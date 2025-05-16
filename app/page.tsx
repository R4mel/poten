import Link from "next/link"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
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
                    <Menu className="mr-1 h-5 w-5" />
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
              <div className="hidden md:block">
                <Link
                  href="/delivery-info"
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 text-gray-800"
                >
                  <span className="text-purple-800">샛별·하루</span> 배송안내
                </Link>
              </div>

              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <Link href="/my-kurly" className="text-gray-700">
                <User className="h-6 w-6" />
              </Link>

              <Link href="/cart" className="relative text-gray-700">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>

            <button className="ml-4 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">인기 상품</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
