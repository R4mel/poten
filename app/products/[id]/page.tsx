"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, Menu, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/lib/products";
import { useCart } from "@/lib/use-cart";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { toast } = useToast();
  const { addToCart, items } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Unwrap params using React.use()
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0]?.url || "",
      quantity,
    });

    toast({
      title: "장바구니에 상품이 담겼습니다.",
      description: `${product.name} ${quantity}개가 장바구니에 추가되었습니다.`,
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
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-4">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600"
          >
            <ChevronLeft className="h-5 w-5" />
            뒤로가기
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={product.images?.[0]?.url || "/placeholder.svg"}
                alt={product.images?.[0]?.alt || product.name}
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="sticky top-32">
              <div className="mb-2 text-sm text-gray-500">
                {product.category}
              </div>
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold">
                      {product.discount}%
                    </span>
                    <span className="text-2xl font-bold">
                      {product.price.toLocaleString()}원
                    </span>
                    <span className="text-gray-500 line-through">
                      {product.originalPrice?.toLocaleString()}원
                    </span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold">
                    {product.price.toLocaleString()}원
                  </div>
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-700">
                  {product.description ||
                    "신선하고 맛있는 상품입니다. 마켓컬리의 엄격한 품질관리를 거쳐 고객님께 제공됩니다."}
                </p>
              </div>

              <div className="border-t border-b py-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">수량</span>
                  <div className="flex items-center">
                    <button
                      onClick={handleDecreaseQuantity}
                      className="w-8 h-8 flex items-center justify-center border rounded-l"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="w-10 h-8 flex items-center justify-center border-t border-b">
                      {quantity}
                    </div>
                    <button
                      onClick={handleIncreaseQuantity}
                      className="w-8 h-8 flex items-center justify-center border rounded-r"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">총 상품금액:</span>
                <span className="text-xl font-bold">
                  {(product.price * quantity).toLocaleString()}원
                </span>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full py-6 bg-purple-800 hover:bg-purple-900 text-white font-bold text-lg"
              >
                장바구니에 담기
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
