'use client';

import TopNav from "@/components/top-nav";
import SiteLogo from "@/components/site-logo";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Product = {
  id: number
  name: string
  imageUrl: string
  originalPrice: number
  salePrice: number
  discountRate: number
}

const mockCategories = [
  { name: "헤어·바디·구강", count: 93 },
  { name: "스킨케어·메이크업", count: 51 },
  { name: "유아동", count: 37 },
  { name: "면·양념·오일", count: 36 },
  { name: "패션", count: 33 },
  { name: "국·반찬·메인요리", count: 29 },
  { name: "반려동물", count: 28 },
  { name: "과일·견과·쌀", count: 27 },
  { name: "간편식·밀키트·샐러드", count: 23 },
];

const mockProducts: Product[] = [
  {
    id: 1,
    name: "[집밥의완성] 소고기 미역국",
    imageUrl: "/sample/1.jpg",
    originalPrice: 9900,
    salePrice: 7900,
    discountRate: 20,
  },
  {
    id: 2,
    name: "[집밥의완성] 된장찌개",
    imageUrl: "/sample/2.jpg",
    originalPrice: 6900,
    salePrice: 6900,
    discountRate: 0,
  },
  {
    id: 3,
    name: "[집밥의완성] 김치찌개",
    imageUrl: "/sample/3.jpg",
    originalPrice: 9900,
    salePrice: 7900,
    discountRate: 20,
  },
  {
    id: 4,
    name: "[집밥의완성] 제육볶음",
    imageUrl: "/sample/4.jpg",
    originalPrice: 12900,
    salePrice: 9900,
    discountRate: 23,
  },
  {
    id: 5,
    name: "[집밥의완성] 갈비찜",
    imageUrl: "/sample/5.jpg",
    originalPrice: 19900,
    salePrice: 19900,
    discountRate: 0,
  },
  {
    id: 6,
    name: "[집밥의완성] 오징어볶음",
    imageUrl: "/sample/6.jpg",
    originalPrice: 10900,
    salePrice: 8900,
    discountRate: 18,
  },
  {
    id: 7,
    name: "[집밥의완성] 시금치나물",
    imageUrl: "/sample/7.jpg",
    originalPrice: 5900,
    salePrice: 4900,
    discountRate: 17,
  },
  {
    id: 8,
    name: "[집밥의완성] 잡채",
    imageUrl: "/sample/8.jpg",
    originalPrice: 9900,
    salePrice: 8900,
    discountRate: 10,
  },
]

export default function NewProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    setProducts(mockProducts) // 실제 API 연동 시 fetch로 대체
  }, [])

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
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="absolute right-3 top-2.5">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">신상품</h1>

        {/* 카테고리 탭 */}
        <div className="flex justify-center space-x-6 border-b pb-4 mb-6 text-sm font-medium overflow-x-auto">
          <button className="px-2 pb-1 border-b-2 border-purple-800 text-purple-800 focus:outline-none font-semibold">인기신상품</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition focus:outline-none">제철신선</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition focus:outline-none">간편한끼</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition focus:outline-none">주방리빙</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition focus:outline-none">뷰티</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-800 hover:border-b-2 hover:border-purple-800 transition focus:outline-none">패션잡화</button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 필터 사이드바 */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="border p-4 rounded-lg text-sm space-y-4">
              <div>
                <h4 className="font-semibold mb-2">카테고리</h4>
                <ul className="space-y-2 text-sm">
                  {mockCategories.map((item, index) => {
                    const isSelected = selectedCategories.includes(item.name);
                    return (
                      <li key={index} className="flex items-center space-x-2 cursor-pointer" onClick={() => toggleCategory(item.name)}>
                        <span className={cn(
                          "w-5 h-5 flex items-center justify-center rounded-full border",
                          isSelected ? "bg-purple-700 border-purple-700" : "border-gray-400"
                        )}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <label className="text-sm">{item.name}</label>
                      </li>
                    );
                  })}
                </ul>
                <button className="mt-4 text-xs text-gray-500 underline">카테고리 더보기 &gt;</button>
              </div>
              <div>
                <h4 className="font-semibold mb-2">브랜드</h4>
                <div className="space-y-1">
                  <label className="flex items-center"><input type="checkbox" className="mr-2" />Kurly's (45)</label>
                  <label className="flex items-center"><input type="checkbox" className="mr-2" />Chef's Table (28)</label>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">가격</h4>
                <div className="space-y-1">
                  <label className="flex items-center"><input type="checkbox" className="mr-2" />10,000원 미만</label>
                  <label className="flex items-center"><input type="checkbox" className="mr-2" />10,000원 ~ 20,000원</label>
                  <label className="flex items-center"><input type="checkbox" className="mr-2" />20,000원 이상</label>
                </div>
              </div>
            </div>
          </aside>

          {/* 상품 영역 */}
          <section className="flex-1">
            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <span className="text-sm">총 {products.length}개</span>
              <div className="space-x-3 flex">
                <button className="font-bold text-black px-2 py-1 rounded focus:outline-none bg-gray-100">추천순</button>
                <button className="hover:text-purple-800 px-2 py-1 rounded focus:outline-none">신상품순</button>
                <button className="hover:text-purple-800 px-2 py-1 rounded focus:outline-none">낮은가격순</button>
                <button className="hover:text-purple-800 px-2 py-1 rounded focus:outline-none">높은가격순</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <Card key={product.id} className="overflow-hidden relative group">
                  {/* 할인 뱃지 */}
                  {product.discountRate > 0 && (
                    <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded z-10">
                      {product.discountRate}%
                    </div>
                  )}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
                    <div className="mt-2">
                      <span className="text-base font-bold">{product.salePrice.toLocaleString()}원</span>
                      {product.discountRate > 0 && (
                        <span className="ml-2 line-through text-gray-400 text-sm">{product.originalPrice.toLocaleString()}원</span>
                      )}
                    </div>
                    {/* 담기 버튼: hover 시 노출 */}
                    <button className="opacity-0 group-hover:opacity-100 transition mt-4 w-full bg-purple-600 text-white py-1 rounded text-sm font-semibold shadow">
                      담기
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}