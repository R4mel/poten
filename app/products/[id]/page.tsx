"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { products } from "@/lib/products"
import { useCart } from "@/lib/use-cart"

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const { addToCart, items } = useCart() // Access items here
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })

    toast({
      title: "장바구니에 상품이 담겼습니다.",
      description: `${product.name} ${quantity}개가 장바구니에 추가되었습니다.`,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Top navigation */}
          <div className="flex justify-end py-2 text-sm space-x-4">
            <Link href="/signup" className="text-gray-600 hover:text-purple-800">
              회원가입
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/login" className="text-gray-600 hover:text-purple-800">
              로그인
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/customer-service" className="text-gray-600 hover:text-purple-800">
              고객센터
            </Link>
          </div>

          {/* Main navigation */}
          <div className="flex items-center py-4">
            <Link href="/" className="mr-8">
              <h1 className="text-2xl font-bold text-purple-800">마켓컬리</h1>
            </Link>

            <nav className="hidden md:flex flex-1 items-center">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/categories" className="flex items-center text-gray-900 hover:text-purple-800">
                    <ShoppingCart className="mr-1 h-5 w-5" />
                    카테고리
                  </Link>
                </li>
                <li>
                  <Link href="/new-products" className="text-gray-900 hover:text-purple-800">
                    신상품
                  </Link>
                </li>
                <li>
                  <Link href="/best-products" className="text-gray-900 hover:text-purple-800">
                    베스트
                  </Link>
                </li>
                <li>
                  <Link href="/sale-products" className="text-gray-900 hover:text-purple-800">
                    알뜰쇼핑
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.kurly.com/collections/market-time-sales"
                    target="_blank"
                    className="text-gray-900 hover:text-purple-800"
                  >
                    특가/혜택
                  </Link>
                </li>
              </ul>
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
          <button onClick={() => router.back()} className="flex items-center text-gray-600">
            <ChevronLeft className="h-5 w-5" />
            뒤로가기
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="sticky top-32">
              <div className="mb-2 text-sm text-gray-500">{product.category}</div>
              <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 font-bold">{product.discount}%</span>
                    <span className="text-2xl font-bold">{product.price.toLocaleString()}원</span>
                    <span className="text-gray-500 line-through">{product.originalPrice?.toLocaleString()}원</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold">{product.price.toLocaleString()}원</div>
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
                    <div className="w-10 h-8 flex items-center justify-center border-t border-b">{quantity}</div>
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
                <span className="text-xl font-bold">{(product.price * quantity).toLocaleString()}원</span>
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

      <footer className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">고객센터</h3>
              <p className="text-2xl font-bold mb-2">1644-1107</p>
              <p className="text-gray-600 text-sm">365일 오전 7시 - 오후 7시</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">마켓컬리</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>회사소개</li>
                <li>채용정보</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-sm text-gray-500">
            © 2024 Market Kurly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
