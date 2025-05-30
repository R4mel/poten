"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function MyPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const user = session?.user as {
    id?: string;
    user_id?: string;
    name?: string;
    email?: string;
    image?: string;
    phone?: string;
    address?: string;
    role?: string;
  };

  // Always call useState in the same order, do not depend on user
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  // Set phone/address when user is available
  useEffect(() => {
    if (user) {
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, [user]);

  // Dynamically load Kakao scripts
  useEffect(() => {
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
        setAddress(addr);
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
              }, 100);
            }
          });
        }
      },
    }).open();
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null);
    setLoading(true);
    if (password && password !== confirm) {
      setResult("비밀번호가 일치하지 않습니다.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/users/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user?.id || user?.user_id,
          phone,
          address,
          password: password || undefined,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult("정보가 성공적으로 수정되었습니다.");
        setPassword("");
        setConfirm("");
      } else {
        setResult(data.error || "정보 수정에 실패했습니다.");
      }
    } catch {
      setResult("서버 오류가 발생했습니다.");
    }
    setLoading(false);
  };

  // Product CRUD UI for admin only
  const isAdmin = user?.role == "admin";

  // --- Product CRUD state ---
  const [products, setProducts] = useState<any[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [crudError, setCrudError] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editProduct, setEditProduct] = useState<any | null>(null);
  // Add form state
  const [addForm, setAddForm] = useState({
    name: "",
    price: "",
    stock: "",
    category_id: "",
    image: "",
    description: "",
    products_option: "",
  });
  // Edit form state
  const [editForm, setEditForm] = useState({
    name: "",
    price: "",
    stock: "",
    category_id: "",
    image: "",
    description: "",
    products_option: "",
  });

  // Fetch products
  useEffect(() => {
    if (!isAdmin) return;
    setLoadingProducts(true);
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoadingProducts(false);
      })
      .catch(() => {
        setCrudError("상품 목록을 불러오지 못했습니다.");
        setLoadingProducts(false);
      });
  }, [isAdmin]);

  // Add product handler
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setCrudError(null);
    const body = {
      ...addForm,
      price: Number(addForm.price),
      stock: Number(addForm.stock),
    };
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const newProduct = await res.json();
      setProducts((prev) => [newProduct, ...prev]);
      setShowAdd(false);
      setAddForm({
        name: "",
        price: "",
        stock: "",
        category_id: "",
        image: "",
        description: "",
        products_option: "",
      });
    } else {
      const err = await res.json();
      setCrudError(err.error || "상품 추가 실패");
    }
  };

  // Edit product open
  const openEdit = (product: any) => {
    setEditProduct(product);
    setEditForm({
      name: product.name || "",
      price: product.price?.toString() || "",
      stock: product.stock?.toString() || "",
      category_id: product.category_id || "",
      image: product.image || "",
      description: product.description || "",
      products_option: product.products_option || "",
    });
    setShowEdit(true);
  };

  // Edit product handler
  const handleEditProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProduct) return;
    setCrudError(null);
    const body = {
      ...editForm,
      price: Number(editForm.price),
      stock: Number(editForm.stock),
    };
    const res = await fetch(`/api/products/${editProduct.product_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setProducts((prev) =>
        prev.map((p) =>
          p.product_id === editProduct.product_id ? { ...p, ...body } : p
        )
      );
      setShowEdit(false);
      setEditProduct(null);
    } else {
      const err = await res.json();
      setCrudError(err.error || "상품 수정 실패");
    }
  };

  // Delete product handler
  const handleDeleteProduct = async (product_id: string) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch(`/api/products/${product_id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.product_id !== product_id));
    } else {
      setCrudError("상품 삭제 실패");
    }
  };

  // --- Order List for User ---
  const [orders, setOrders] = useState<any[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  useEffect(() => {
    if (!user?.user_id) return;
    setLoadingOrders(true);
    fetch(`/api/orders?userId=${user.user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(Array.isArray(data) ? data : []);
        setLoadingOrders(false);
      })
      .catch(() => {
        setOrders([]);
        setLoadingOrders(false);
      });
  }, [user?.user_id]);

  if (status === "loading") {
    return <div className="py-16 text-center">Loading...</div>;
  }

  if (!session) {
    router.replace("/login");
    return null;
  }

  // Sidebar navigation items
  const navItems = [
    { key: "orders", label: "주문내역", icon: "📦" },
    { key: "profile", label: "회원정보", icon: "👤" },
    { key: "password", label: "비밀번호 변경", icon: "🔒" },
  ];
  const [section, setSection] = useState("orders");

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col items-center py-6 sm:py-10">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 px-2 sm:px-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-56 shrink-0 mb-6 lg:mb-0">
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <div className="flex flex-col items-center">
              <Avatar className="h-20 w-20 mb-2 border-4 border-purple-100 shadow">
                <AvatarImage
                  src={user?.image || undefined}
                  alt={user?.name || "User"}
                />
                <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <div className="font-bold text-lg mt-2">
                {user?.name || "사용자"}
              </div>
              <div className="text-gray-500 text-sm mb-1">{user?.email}</div>
              <span className="inline-block bg-purple-50 text-purple-700 text-xs rounded px-2 py-0.5 mt-1">
                {user?.role === "admin" ? "관리자" : "일반회원"}
              </span>
            </div>
          </div>
          <nav className="bg-white rounded-2xl shadow p-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {navItems.map((item) => (
              <button
                key={item.key}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-left transition font-medium text-gray-700 hover:bg-purple-50 ${
                  section === item.key ? "bg-purple-100 text-purple-800" : ""
                }`}
                onClick={() => setSection(item.key)}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* 주문내역 */}
          {section === "orders" && (
            <section className="bg-white rounded-2xl shadow p-8 mb-8">
              <h2 className="text-base sm:text-xl font-bold mb-6 flex items-center gap-2 whitespace-nowrap">
                <span className="text-2xl">📦</span> 주문내역
              </h2>
              {loadingOrders ? (
                <div className="py-8 text-center text-gray-500">로딩 중...</div>
              ) : orders.length === 0 ? (
                <div className="py-8 text-center text-gray-500">
                  주문 내역이 없습니다.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm border rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-purple-50 text-purple-800">
                        <th className="p-3 border">주문번호</th>
                        <th className="p-3 border">주문일시</th>
                        <th className="p-3 border">상태</th>
                        <th className="p-3 border">결제수단</th>
                        <th className="p-3 border">총금액</th>
                        <th className="p-3 border">상세</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.order_id} className="even:bg-gray-50">
                          <td className="p-3 border font-mono">
                            {order.order_id}
                          </td>
                          <td className="p-3 border">
                            {new Date(order.created_at).toLocaleString()}
                          </td>
                          <td className="p-3 border">{order.status}</td>
                          <td className="p-3 border">
                            {order.payment_method || "-"}
                          </td>
                          <td className="p-3 border">
                            {order.total_price?.toLocaleString()}원
                          </td>
                          <td className="p-3 border">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() =>
                                router.push(
                                  `/payment/success?orderId=order-${order.order_id}`
                                )
                              }
                            >
                              상세
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}
          {/* 회원정보 */}
          {section === "profile" && (
            <section className="bg-white rounded-2xl shadow p-8 mb-8">
              <h2 className="text-base sm:text-xl font-bold mb-6 flex items-center gap-2 whitespace-nowrap">
                <span className="text-2xl">👤</span> 회원정보
              </h2>
              <form
                onSubmit={handleUpdate}
                className="flex flex-col gap-6 max-w-lg"
              >
                <div>
                  <div className="font-semibold mb-1">이메일</div>
                  <div className="text-gray-700 bg-gray-50 rounded px-3 py-2">
                    {user?.email}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">전화번호</div>
                  <Input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="전화번호를 입력하세요"
                  />
                </div>
                <div>
                  <div className="font-semibold mb-1">주소</div>
                  <div className="flex items-center gap-2">
                    <Input
                      type="text"
                      value={address}
                      readOnly
                      placeholder="주소를 입력하세요"
                    />
                    <Button
                      type="button"
                      onClick={handleAddressSearch}
                      className="ml-2 whitespace-nowrap"
                    >
                      주소 검색
                    </Button>
                  </div>
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
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "수정 중..." : "정보 수정"}
                </Button>
                {result && (
                  <div className="text-center text-sm text-gray-700">
                    {result}
                  </div>
                )}
              </form>
            </section>
          )}
          {/* 비밀번호 변경 */}
          {section === "password" && (
            <section className="bg-white rounded-2xl shadow p-8 mb-8 max-w-lg">
              <h2 className="text-base sm:text-xl font-bold mb-6 flex items-center gap-2 whitespace-nowrap">
                <span className="text-2xl">🔒</span> 비밀번호 변경
              </h2>
              <form onSubmit={handleUpdate} className="flex flex-col gap-6">
                <div>
                  <div className="font-semibold mb-1">
                    새 비밀번호 (6자 이상)
                  </div>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="새 비밀번호"
                  />
                </div>
                <div>
                  <div className="font-semibold mb-1">새 비밀번호 확인</div>
                  <Input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="새 비밀번호 확인"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "수정 중..." : "비밀번호 변경"}
                </Button>
                {result && (
                  <div className="text-center text-sm text-gray-700">
                    {result}
                  </div>
                )}
              </form>
            </section>
          )}
          {/* 관리자 상품 관리 (기존 코드, 관리자만) */}
          {isAdmin && (
            <section className="bg-white rounded-2xl shadow p-8 mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-2xl">🛒</span> [관리자] 상품 관리 (CRUD)
              </h2>
              <div className="mb-4 p-4 border rounded bg-gray-100">
                <div className="font-bold mb-2">[관리자] 상품 관리 (CRUD)</div>
                <div className="mb-2 flex justify-between items-center">
                  <span>총 {products.length}개</span>
                  <Dialog open={showAdd} onOpenChange={setShowAdd}>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="secondary">
                        + 상품 추가
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>상품 추가</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAddProduct} className="space-y-2">
                        <Label>상품명</Label>
                        <Input
                          value={addForm.name}
                          onChange={(e) =>
                            setAddForm((f) => ({ ...f, name: e.target.value }))
                          }
                          required
                        />
                        <Label>가격</Label>
                        <Input
                          type="number"
                          value={addForm.price}
                          onChange={(e) =>
                            setAddForm((f) => ({ ...f, price: e.target.value }))
                          }
                          required
                        />
                        <Label>재고</Label>
                        <Input
                          type="number"
                          value={addForm.stock}
                          onChange={(e) =>
                            setAddForm((f) => ({ ...f, stock: e.target.value }))
                          }
                          required
                        />
                        <Label>카테고리ID</Label>
                        <Input
                          value={addForm.category_id}
                          onChange={(e) =>
                            setAddForm((f) => ({
                              ...f,
                              category_id: e.target.value,
                            }))
                          }
                          required
                        />
                        <Label>이미지 URL</Label>
                        <Input
                          value={addForm.image}
                          onChange={(e) =>
                            setAddForm((f) => ({ ...f, image: e.target.value }))
                          }
                        />
                        <Label>설명</Label>
                        <Input
                          value={addForm.description}
                          onChange={(e) =>
                            setAddForm((f) => ({
                              ...f,
                              description: e.target.value,
                            }))
                          }
                        />
                        <Label>옵션</Label>
                        <Input
                          value={addForm.products_option}
                          onChange={(e) =>
                            setAddForm((f) => ({
                              ...f,
                              products_option: e.target.value,
                            }))
                          }
                        />
                        <DialogFooter>
                          <Button type="submit">추가</Button>
                          <DialogClose asChild>
                            <Button type="button" variant="secondary">
                              취소
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                        {crudError && (
                          <div className="text-red-600 text-sm mt-2">
                            {crudError}
                          </div>
                        )}
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
                {loadingProducts ? (
                  <div className="py-4 text-center text-gray-500">
                    로딩 중...
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="p-2 border">ID</th>
                          <th className="p-2 border">이미지</th>
                          <th className="p-2 border">상품명</th>
                          <th className="p-2 border">가격</th>
                          <th className="p-2 border">재고</th>
                          <th className="p-2 border">카테고리</th>
                          <th className="p-2 border">관리</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((p) => (
                          <tr key={p.product_id}>
                            <td className="p-2 border">{p.product_id}</td>
                            <td className="p-2 border">
                              {p.image && (
                                <Image
                                  src={p.image}
                                  alt={p.name}
                                  width={40}
                                  height={40}
                                  className="rounded"
                                />
                              )}
                            </td>
                            <td className="p-2 border">{p.name}</td>
                            <td className="p-2 border">
                              {p.price?.toLocaleString()}원
                            </td>
                            <td className="p-2 border">{p.stock}</td>
                            <td className="p-2 border">{p.category_id}</td>
                            <td className="p-2 border">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openEdit(p)}
                                className="mr-2"
                              >
                                수정
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() =>
                                  handleDeleteProduct(p.product_id)
                                }
                              >
                                삭제
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {/* Edit Dialog */}
                <Dialog open={showEdit} onOpenChange={setShowEdit}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>상품 수정</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleEditProduct} className="space-y-2">
                      <Label>상품명</Label>
                      <Input
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, name: e.target.value }))
                        }
                        required
                      />
                      <Label>가격</Label>
                      <Input
                        type="number"
                        value={editForm.price}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, price: e.target.value }))
                        }
                        required
                      />
                      <Label>재고</Label>
                      <Input
                        type="number"
                        value={editForm.stock}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, stock: e.target.value }))
                        }
                        required
                      />
                      <Label>카테고리ID</Label>
                      <Input
                        value={editForm.category_id}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            category_id: e.target.value,
                          }))
                        }
                        required
                      />
                      <Label>이미지 URL</Label>
                      <Input
                        value={editForm.image}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, image: e.target.value }))
                        }
                      />
                      <Label>설명</Label>
                      <Input
                        value={editForm.description}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            description: e.target.value,
                          }))
                        }
                      />
                      <Label>옵션</Label>
                      <Input
                        value={editForm.products_option}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            products_option: e.target.value,
                          }))
                        }
                      />
                      <DialogFooter>
                        <Button type="submit">저장</Button>
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">
                            취소
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                      {crudError && (
                        <div className="text-red-600 text-sm mt-2">
                          {crudError}
                        </div>
                      )}
                    </form>
                  </DialogContent>
                </Dialog>
                {crudError && (
                  <div className="text-red-600 text-sm mt-2">{crudError}</div>
                )}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
