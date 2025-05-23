"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      setMessage("You must agree to the terms and conditions.");
      return;
    }
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setMessage("Registration successful!");
      setForm({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
      });
      setAgree(false);
    } else {
      setMessage(data.error || "Registration failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow"
    >
      <Input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <Input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <Input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />
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
        {loading ? "Registering..." : "Sign Up"}
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
          <span className="sr-only">Sign in with Google</span>
        </div>
      </button>
      {/* Kakao 공식 로그인 버튼 */}
      <button
        type="button"
        onClick={() => signIn("kakao")}
        className="w-full flex justify-center items-center mt-2 bg-transparent border-none p-0"
        style={{ minHeight: 45 }}
      >
        <img
          src="/kakao_login_medium_wide.png"
          alt="카카오 로그인"
          style={{ height: 45, width: "auto" }}
        />
      </button>
      {message && <div className="text-center mt-2 text-sm">{message}</div>}
    </form>
  );
}
