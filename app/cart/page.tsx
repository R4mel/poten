"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/use-cart";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = totalPrice > 40000 ? 0 : 3000;
  const finalPrice = totalPrice + shippingFee;

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
              <div className="hidden md:block">
                <Link
                  href="/delivery-info"
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
                >
                  <span className="text-purple-800">샛별·하루</span> 배송안내
                </Link>
              </div>

              <Link href="/cart" className="relative text-gray-700">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
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
                      <h3 className="font-medium">{item.name}</h3>
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
                <Button className="w-full mt-6 bg-purple-800 hover:bg-purple-900">
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
