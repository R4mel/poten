"use client";
import { useState, useEffect, useRef } from "react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

export default function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
  });
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [nameInput, setNameInput] = useState("");
  const [isComposing, setIsComposing] = useState(false); // Track IME composition
  const [showMap, setShowMap] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    // Email validation
    if (!form.email.includes("@")) {
      newErrors.email = "이메일에 @가 포함되어야 합니다.";
    }
    // Password match
    if (form.password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    // Name: only alphabetic
    if (!/^[a-zA-Z가-힣]+$/.test(form.name)) {
      newErrors.name = "이름은 한글 또는 영문만 입력 가능합니다.";
    }
    // Phone: only numbers
    if (!/^[0-9]+$/.test(form.phone)) {
      newErrors.phone = "전화번호는 숫자만 입력 가능합니다.";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForm((f) => ({ ...f, name: nameInput }));
    if (!agree) {
      setMessage("You must agree to the terms and conditions.");
      return;
    }
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, name: nameInput }),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setShowDialog(true);
      setForm({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
      });
      setNameInput("");
      setConfirmPassword("");
      setAgree(false);
      setErrors({});
    } else {
      setMessage(data.error || "Registration failed.");
    }
  };

  // Dynamically load Kakao scripts
  useEffect(() => {
    // Only load once
    if (typeof window === "undefined") return;
    if (document.getElementById("kakao-postcode-script")) return;
    const script1 = document.createElement("script");
    script1.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script1.id = "kakao-postcode-script";
    document.body.appendChild(script1);
    const script2 = document.createElement("script");
    script2.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=2fc869bf12302100a575cd7e94a95c0d&libraries=services";
    script2.id = "kakao-maps-script";
    document.body.appendChild(script2);
    return () => {
      script1.remove();
      script2.remove();
    };
  }, []);

  // Kakao address search handler
  const handleAddressSearch = () => {
    // @ts-ignore
    if (!window.daum || !window.daum.Postcode) {
      alert(
        "카카오 주소 검색 스크립트가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요."
      );
      return;
    }
    // @ts-ignore
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        const addr = data.address;
        setForm((f) => ({ ...f, address: addr }));
        // @ts-ignore
        if (window.daum && window.daum.maps && window.daum.maps.services) {
          // @ts-ignore
          const geocoder = new window.daum.maps.services.Geocoder();
          // @ts-ignore
          geocoder.addressSearch(addr, function (results: any, status: any) {
            // @ts-ignore
            if (status === window.daum.maps.services.Status.OK) {
              const result = results[0];
              // @ts-ignore
              const coords = new window.daum.maps.LatLng(result.y, result.x);
              setShowMap(true);
              setTimeout(() => {
                if (mapRef.current) {
                  // @ts-ignore
                  const map = new window.daum.maps.Map(mapRef.current, {
                    center: coords,
                    level: 5,
                  });
                  // @ts-ignore
                  const marker = new window.daum.maps.Marker({
                    position: coords,
                    map: map,
                  });
                  map.setCenter(coords);
                }
              }, 100); // Wait for map div to be visible
            }
          });
        }
      },
    }).open();
  };

  // Email verification handler
  const handleSendVerification = async () => {
    if (!form.email.includes("@")) {
      setErrors((prev) => ({
        ...prev,
        email: "이메일 형식이 올바르지 않습니다.",
      }));
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/users/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setVerificationSent(true);
        setVerificationCode(data.code); // In production, do not expose code
        setMessage("인증 코드가 이메일로 전송되었습니다.");
      } else {
        setMessage(data.error || "이메일 인증 코드 전송 실패");
      }
    } finally {
      setLoading(false);
    }
  };

  // 인증코드 확인 (서버 검증)
  const handleVerifyCode = async () => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/users/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, code: inputCode }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setEmailVerified(true);
        setMessage("이메일 인증이 완료되었습니다.");
      } else {
        setMessage(data.error || "인증 코드가 올바르지 않습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow"
      >
        {/* Email */}
        <div className="flex items-center gap-2">
          <Label className="w-28 text-right" htmlFor="email">
            이메일
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1"
            disabled={emailVerified}
          />
          <Button
            type="button"
            onClick={handleSendVerification}
            disabled={loading || emailVerified}
            className="ml-2"
          >
            {verificationSent ? "재전송" : "인증코드 전송"}
          </Button>
        </div>
        {verificationSent && !emailVerified && (
          <div className="flex items-center gap-2 mt-2">
            <Input
              type="text"
              placeholder="인증 코드 입력"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1"
            />
            <Button type="button" onClick={handleVerifyCode}>
              인증 확인
            </Button>
          </div>
        )}
        {emailVerified && (
          <div className="text-green-600 text-xs ml-28">이메일 인증 완료</div>
        )}
        {errors.email && (
          <div className="text-red-500 text-xs ml-28">{errors.email}</div>
        )}
        {/* Password */}
        <div className="flex items-center gap-2">
          <Label className="w-28 text-right" htmlFor="password">
            비밀번호
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={handleChange}
            required
            className="flex-1"
          />
        </div>
        {/* Confirm Password */}
        <div className="flex items-center gap-2">
          <Label className="w-28 text-right" htmlFor="confirmPassword">
            비밀번호확인
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="flex-1"
          />
        </div>
        {errors.confirmPassword && (
          <div className="text-red-500 text-xs ml-28">
            {errors.confirmPassword}
          </div>
        )}
        {/* Name */}
        <div className="flex items-center gap-2">
          <Label className="w-28 text-right" htmlFor="name">
            이름
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="이름을 입력해주세요"
            value={nameInput}
            onChange={(e) => {
              const value = e.target.value;
              setNameInput(value); // Always set raw value
            }}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={(e) => {
              setIsComposing(false);
              // After composition ends, filter and update both local and form state
              const filtered = e.currentTarget.value.replace(
                /[^a-zA-Z가-힣]/g,
                ""
              );
              setNameInput(filtered);
              setForm((f) => ({ ...f, name: filtered }));
            }}
            onBlur={(e) => {
              // On blur, update form state with filtered value
              const filtered = e.target.value.replace(/[^a-zA-Z가-힣]/g, "");
              setNameInput(filtered);
              setForm((f) => ({ ...f, name: filtered }));
            }}
            required
            className="flex-1"
          />
        </div>
        {errors.name && (
          <div className="text-red-500 text-xs ml-28">{errors.name}</div>
        )}
        {/* Phone */}
        <div className="flex items-center gap-2">
          <Label className="w-28 text-right" htmlFor="phone">
            휴대폰
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="숫자만 입력해주세요"
            value={form.phone}
            onChange={(e) => {
              // Only allow numbers
              if (/^[0-9]*$/.test(e.target.value)) {
                handleChange(e);
              }
            }}
            required
            className="flex-1"
          />
        </div>
        {errors.phone && (
          <div className="text-red-500 text-xs ml-28">{errors.phone}</div>
        )}
        {/* Address */}
        <div className="flex items-center gap-2">
          <Label className="w-28 text-right" htmlFor="address">
            주소
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="주소"
            value={form.address}
            onChange={handleChange}
            required
            className="flex-1"
            readOnly
          />
          <Button
            type="button"
            onClick={handleAddressSearch}
            className="ml-2 whitespace-nowrap"
          >
            주소 검색
          </Button>
        </div>
        {/* Kakao Map */}
        <div
          id="map"
          ref={mapRef}
          style={{
            width: 300,
            height: 300,
            marginTop: 10,
            display: showMap ? "block" : "none",
          }}
        ></div>
        {/* Terms */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => setAgree((v) => !v)}
            className="mr-2"
          />
          <label htmlFor="agree" className="text-sm select-none">
            이용약관에 동의합니다.
          </label>
        </div>
        <Button type="submit" disabled={loading || !agree} className="w-full">
          {loading ? "Registering..." : "회원 가입"}
        </Button>
        {/* Google 공식 로그인 버튼 (Material style) */}
        <button
          type="button"
          onClick={() => signIn("google")}
          className="gsi-material-button w-full max-w-[400px] min-w-min flex items-center justify-center relative overflow-hidden border border-[#747775] rounded bg-white text-[#1f1f1f] font-['Roboto','Arial',sans-serif] text-[14px] h-10 px-3 transition-colors duration-200 focus:outline-none disabled:cursor-default disabled:bg-[#ffffff61] disabled:border-[#1f1f1f1f]"
          style={{ fontWeight: 500 }}
        >
          <div className="gsi-material-button-state absolute inset-0 opacity-0 transition-opacity duration-200 pointer-events-none" />
          <div className="gsi-material-button-content-wrapper flex flex-row flex-nowrap items-center h-full w-full justify-between relative">
            <div className="gsi-material-button-icon h-5 w-5 min-w-[20px] mr-3">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                style={{ display: "block" }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className="gsi-material-button-contents flex-grow overflow-hidden text-ellipsis text-center">
              Google로 로그인
            </span>
          </div>
        </button>
        {message && (
          <div className="text-center text-sm text-red-500 mt-2">{message}</div>
        )}
      </form>
      <Dialog
        open={showDialog}
        onOpenChange={(open) => {
          setShowDialog(open);
          if (!open) {
            router.push("/login");
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>회원가입이 완료되었습니다!</DialogTitle>
          </DialogHeader>
          <div className="py-4 text-center">로그인 페이지로 이동합니다.</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
