"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/use-cart";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";
import { loadTossPaymentsWidget } from "@/lib/toss-widget";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import CategoryDropdown from "@/components/category-dropdown";

declare global {
  interface Window {
    TossPayments?: any;
  }
}

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const { data: session } = useSession();
  const [categoryDrawerOpen, setCategoryDrawerOpen] = useState(false);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = totalPrice > 40000 ? 0 : 3000;
  const finalPrice = totalPrice + shippingFee;

  useEffect(() => {
    loadTossPaymentsWidget(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!);
  }, []);

  // 결제하기 버튼 클릭 핸들러
  const handleTossPayment = async () => {
    if (typeof window === "undefined" || !window.TossPayments) {
      alert("토스 결제 위젯을 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    if (!session?.user) {
      alert("로그인이 필요합니다.");
      return;
    }
    const userId = Number((session.user as any).id); // Ensure userId is a number
    // Patch: use correct API field names
    const payload = {
      userId,
      amount: finalPrice,
      currency: "KRW",
      email: session.user.email,
      name: session.user.name,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
    };
    const res = await fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.error || "결제 준비 중 오류가 발생했습니다.");
      return;
    }
    if (typeof window.TossPayments !== "function") {
      alert("토스 결제 위젯을 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    const toss = window.TossPayments(process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!);
    toss.requestPayment("카드", {
      amount: finalPrice,
      orderId: `order-${data.orderId}`,
      orderName: items.map((item) => item.name).join(", "),
      customerEmail: session.user.email,
      customerName: session.user.name,
      successUrl: `${window.location.origin}/payment/success`,
      failUrl: `${window.location.origin}/payment/fail`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <TopNav />
          <div className="flex items-center py-4">
            <SiteLogo />
            <nav className="hidden md:flex flex-1 items-center">
              <MainNav />
            </nav>
            <div className="flex items-center ml-auto space-x-4">
              <Link href="/cart" className="relative text-gray-700">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              </Link>
              {/* 홈페이지에서만 삼선버튼 보이도록 분기 */}
              {typeof window !== "undefined" &&
                window.location.pathname === "/" && (
                  <button
                    className="ml-4 md:hidden"
                    aria-label="카테고리 열기"
                    onClick={() => setCategoryDrawerOpen(true)}
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                )}
            </div>
          </div>
        </div>
        {/* 모바일 카테고리 드로어 */}
        {categoryDrawerOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/40 flex justify-end md:hidden"
            onClick={() => setCategoryDrawerOpen(false)}
          >
            <div
              className="bg-white w-64 h-full shadow-lg p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setCategoryDrawerOpen(false)}
                aria-label="닫기"
              >
                ×
              </button>
              <h2 className="text-lg font-bold mb-4">카테고리</h2>
              <CategoryDropdown
                alwaysOpen
                onCategorySelect={() => setCategoryDrawerOpen(false)}
              />
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">장바구니</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-4">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-300" />
            </div>
            <p className="text-gray-500 mb-6">
              장바구니에 담긴 상품이 없습니다
            </p>
            <Button asChild className="bg-purple-800 hover:bg-purple-900">
              <Link href="/">쇼핑 계속하기</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="text-sm font-medium">전체 {items.length}개</div>
                <button onClick={clearCart} className="text-sm text-gray-500">
                  전체삭제
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b">
                    <div className="w-20 h-20 shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">
                        <Link
                          href={`/products/${item.id}`}
                          className="hover:underline text-purple-800"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <div className="flex items-center mt-2 gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-8 h-8 flex items-center justify-center border rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center border rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">
                        {(item.price * item.quantity).toLocaleString()}원
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-gray-400"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-80 shrink-0">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">상품금액</span>
                    <span className="font-medium">
                      {totalPrice.toLocaleString()}원
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">배송비</span>
                    <span className="font-medium">
                      {shippingFee === 0
                        ? "무료"
                        : `${shippingFee.toLocaleString()}원`}
                    </span>
                  </div>
                  <div className="pt-3 border-t flex justify-between">
                    <span className="font-bold">결제예정금액</span>
                    <span className="font-bold text-lg">
                      {finalPrice.toLocaleString()}원
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-purple-800 hover:bg-purple-900"
                  onClick={handleTossPayment}
                >
                  결제하기
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
