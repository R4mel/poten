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


export default function NewProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showVoteSection, setShowVoteSection] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortKey, setSortKey] = useState<string>('추천순');

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const sortProducts = (key: string, products: Product[]) => {
    switch (key) {
      case '신상품순':
        return [...products].sort((a, b) => b.id - a.id);
      case '낮은가격순':
        return [...products].sort((a, b) => a.salePrice - b.salePrice);
      case '높은가격순':
        return [...products].sort((a, b) => b.salePrice - a.salePrice);
      default:
        return products;
    }
  };

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const productList = Array.isArray(data) ? data : Array.isArray(data.products) ? data.products : [];
        const filtered = productList.map((p: any) => ({
          ...p,
          imageUrl: p.imageUrl || "/images/placeholder.jpg",
          originalPrice: p.originalPrice || p.price || 0,
          salePrice: p.salePrice || p.price || 0,
          discountRate: p.discountRate || 0,
        }));
        const sorted = sortProducts(sortKey, filtered);
        setProducts(sorted);
      })
      .catch((err) => {
        console.error("상품 불러오기 실패:", err);
      });
  }, [sortKey]);

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
        <h1 className="text-2xl font-bold mb-6 text-center">알뜰쇼핑</h1>

        {/* 카테고리 탭 */}
        <div className="flex justify-center space-x-6 border-b pb-4 mb-6 text-sm font-medium overflow-x-auto">
          <button className="px-2 pb-1 border-b-2 border-purple-600 text-purple-600 focus:outline-none font-semibold">알뜰쇼핑</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">반값세일</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">신선&정육</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">만원의행복</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">장보기초특가</button>
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
                          isSelected ? "bg-purple-300 border-purple-300" : "border-gray-400"
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
                <ul className="space-y-2 text-sm">
                  {["Kurly's (45)", "Chef's Table (28)"].map((brand, idx) => (
                    <li key={idx} className="flex items-center space-x-2 cursor-pointer">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400"></span>
                      <label className="text-sm">{brand}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">가격</h4>
                <ul className="space-y-2 text-sm">
                  {["10,000원 미만", "10,000원 ~ 20,000원", "20,000원 이상"].map((price, idx) => (
                    <li key={idx} className="flex items-center space-x-2 cursor-pointer">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400"></span>
                      <label className="text-sm">{price}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* 상품 영역 */}
          <section className="flex-1">
            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <span className="text-sm">총 {products.length}개</span>
              <div className="space-x-3 flex">
                {["추천순", "신상품순", "낮은가격순", "높은가격순"].map((key) => (
                  <button
                    key={key}
                    onClick={() => setSortKey(key)}
                    className={`px-2 py-1 rounded focus:outline-none ${
                      sortKey === key ? "font-bold text-black bg-gray-100" : "hover:text-purple-600"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <div key={product.id} className="bg-white border rounded-lg overflow-hidden shadow-sm group">
                  <div className="relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    {product.discountRate > 0 && (
                      <div className="absolute top-2 left-2 bg-purple-300 text-white text-xs px-2 py-1 rounded">
                        {product.discountRate}%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">샛별배송</p>
                    <h3 className="text-sm font-semibold line-clamp-2 leading-tight">{product.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">맛있게 즐기는 집밥 요리</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-lg font-bold">{product.salePrice.toLocaleString()}원</span>
                      {product.discountRate > 0 && (
                        <span className="line-through text-gray-400 text-sm">{product.originalPrice.toLocaleString()}원</span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="mt-4 w-full border border-gray-300 text-gray-700 py-1 rounded text-sm font-medium hover:bg-gray-50"
                    >
                      담기
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {selectedProduct && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg max-w-md w-full p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="font-semibold">{selectedProduct.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{selectedProduct.name}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-lg font-bold">{selectedProduct.salePrice.toLocaleString()}원</p>
                      {selectedProduct.discountRate > 0 && (
                        <p className="line-through text-sm text-gray-400">{selectedProduct.originalPrice.toLocaleString()}원</p>
                      )}
                    </div>
                    <div className="flex items-center border rounded overflow-hidden">
                      <button className="px-3 py-1">−</button>
                      <span className="px-4">1</span>
                      <button className="px-3 py-1">+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-bold text-xl">{selectedProduct.salePrice.toLocaleString()} 원</span>
                    <div className="space-x-2">
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="px-4 py-2 border rounded text-sm"
                      >
                        취소
                      </button>
                      <button className="px-4 py-2 bg-purple-400 text-white rounded text-sm">
                        장바구니 담기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}