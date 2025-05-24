import Link from "next/link";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/product-card";
import { allProducts } from "@/lib/products";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

export default function ProductsPage() {
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
            <div className="flex-1 relative max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center gap-4">
              <Link
                href="/signup"
                className="text-sm text-gray-600 hover:text-purple-800"
              >
                회원가입
              </Link>
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-purple-800"
              >
                로그인
              </Link>
              <Link href="/cart" className="relative">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Cart"
                  width={24}
                  height={24}
                />
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link
              href="/products?category=new"
              className="py-4 px-2 text-purple-800 border-b-2 border-purple-800"
            >
              신상품
            </Link>
            <Link
              href="/products?category=best"
              className="py-4 px-2 text-gray-700 hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
            >
              베스트
            </Link>
            <Link
              href="/products?category=sale"
              className="py-4 px-2 text-gray-700 hover:text-purple-800 hover:border-b-2 hover:border-purple-800"
            >
              알뜰 쇼핑
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-4">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  필터
                </h3>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">카테고리</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-soups" />
                      <label htmlFor="category-soups" className="text-sm">
                        국 (24)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-sides" />
                      <label htmlFor="category-sides" className="text-sm">
                        반찬 (56)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="category-main" />
                      <label htmlFor="category-main" className="text-sm">
                        메인요리 (32)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-4 pt-4">
                  <h4 className="font-medium mb-2">브랜드</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-kurly" />
                      <label htmlFor="brand-kurly" className="text-sm">
                        Kurly's (45)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-chef" />
                      <label htmlFor="brand-chef" className="text-sm">
                        Chef's Table (28)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-4 pt-4">
                  <h4 className="font-medium mb-2">가격</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-1" />
                      <label htmlFor="price-1" className="text-sm">
                        10,000원 미만 (32)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-2" />
                      <label htmlFor="price-2" className="text-sm">
                        10,000원 ~ 20,000원 (45)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price-3" />
                      <label htmlFor="price-3" className="text-sm">
                        20,000원 이상 (23)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">신상품</h1>
              <p className="text-gray-600">총 112개</p>
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2 text-sm">
                <button className="font-medium text-purple-800">추천순</button>
                <span className="text-gray-300">|</span>
                <button>신상품순</button>
                <span className="text-gray-300">|</span>
                <button>판매량순</button>
                <span className="text-gray-300">|</span>
                <button>혜택순</button>
                <span className="text-gray-300">|</span>
                <button>낮은 가격순</button>
                <span className="text-gray-300">|</span>
                <button>높은 가격순</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
