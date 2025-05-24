"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "@/components/product-card";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";
import { products as bestProducts } from "@/lib/products";

const mockCategories = [
  { id: "all", name: "전체" },
  { id: "meal", name: "간편식사" },
  { id: "fresh", name: "신선식품" },
  { id: "daily", name: "생활필수품" },
  { id: "staff", name: "직원추천상품" },
];

const TopRankedProductsSection = () => {
  const topProducts = bestProducts.slice(0, 5);

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-6 text-center">
        🌟 지금 이 순간 가장 많이 담긴 상품 TOP 5
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topProducts.map((product, index) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow overflow-hidden group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-purple-300 text-white px-2 py-1 text-xs rounded-full font-semibold select-none">
                #{index + 1}
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500 mb-1">{product.shippingText ?? "샛별배송"}</p>
              <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
              <p className="text-xs text-gray-500 mt-1">맛있게 즐기는 집밥 요리</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-lg font-bold">{product.salePrice?.toLocaleString() ? `${product.salePrice.toLocaleString()}원` : "가격 정보 없음"}</span>
                {product.originalPrice && product.originalPrice > product.salePrice && (
                  <span className="line-through text-gray-400 text-sm">{product.originalPrice.toLocaleString()}원</span>
                )}
              </div>
              <button className="mt-4 w-full border border-gray-300 text-gray-700 bg-white py-1 rounded text-sm font-medium hover:bg-gray-50">
                담기
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function BestProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(bestProducts);
  const [sortKey, setSortKey] = useState("추천순");

  useEffect(() => {
    let filtered = bestProducts;
    if (selectedCategory !== "all") {
      filtered = bestProducts.filter((product) => product.category === selectedCategory);
    }

    switch (sortKey) {
      case "추천순":
        // Assuming bestProducts are already sorted by recommendation
        break;
      case "신상품순":
        filtered = filtered.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "판매량순":
        filtered = filtered.slice().sort((a, b) => (b.sales ?? 0) - (a.sales ?? 0));
        break;
      case "혜택순":
        filtered = filtered.slice().sort((a, b) => (b.discountRate ?? 0) - (a.discountRate ?? 0));
        break;
      case "낮은 가격순":
        filtered = filtered.slice().sort((a, b) => (a.salePrice ?? 0) - (b.salePrice ?? 0));
        break;
      case "높은 가격순":
        filtered = filtered.slice().sort((a, b) => (b.salePrice ?? 0) - (a.salePrice ?? 0));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortKey]);

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
            <div className="flex justify-end flex-1">
              <div className="relative w-full max-w-md">
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
            <div className="flex-1 flex justify-end items-center gap-4">
              {/* 로그인, 회원가입, 장바구니 등 추가 */}
            </div>
          </div>
        </div>
      </header>

      {/* 탭 영역 */}
      <section className="container mx-auto px-4 pt-6">
        <h1 className="text-2xl font-bold mb-6 text-center">베스트</h1>
        <div className="flex justify-center space-x-6 border-b pb-4 mb-6 text-sm font-medium overflow-x-auto">
          <button className="px-2 pb-1 border-b-2 border-purple-600 text-purple-600 focus:outline-none font-semibold">TOP500</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">간편식사</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">신선식품</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">생활필수품</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">직원추천상품</button>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-6 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="border p-4 rounded-lg text-sm space-y-4">
            <div>
              <h4 className="font-semibold mb-2">카테고리</h4>
              <ul className="space-y-2 text-sm">
                {mockCategories.map((item, index) => {
                  const isSelected = selectedCategory === item.id;
                  return (
                    <li key={index} className="flex items-center space-x-2 cursor-pointer" onClick={() => setSelectedCategory(item.id)}>
                      <span className={`w-5 h-5 flex items-center justify-center rounded-full border ${isSelected ? "bg-purple-300 border-purple-300" : "border-gray-400"}`}>
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
            </div>
            <div>
              <h4 className="font-semibold mb-2">브랜드</h4>
              <ul className="space-y-2 text-sm">
                {["브랜드 A", "브랜드 B", "브랜드 C"].map((brand, idx) => (
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
                {["~ 10,000원", "10,000원 ~ 30,000원", "30,000원 ~"].map((price, idx) => (
                  <li key={idx} className="flex items-center space-x-2 cursor-pointer">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full border border-gray-400"></span>
                    <label className="text-sm">{price}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          <TopRankedProductsSection />

          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">베스트 상품</h1>
            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <span className="text-sm">총 {filteredProducts.length}개</span>
              <div className="space-x-3 flex">
                {["추천순", "신상품순", "판매량순", "혜택순", "낮은 가격순", "높은 가격순"].map((key) => (
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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg shadow overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  {product.discountRate && product.discountRate > 0 && (
                    <div className="absolute top-2 left-2 bg-purple-300 text-white text-xs px-2 py-1 rounded">
                      {product.discountRate}%
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{product.shippingText ?? "샛별배송"}</p>
                  <h3 className="text-sm font-semibold line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">맛있게 즐기는 집밥 요리</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-lg font-bold">{product.salePrice?.toLocaleString() ? `${product.salePrice.toLocaleString()}원` : "가격 정보 없음"}</span>
                    {product.originalPrice && product.originalPrice > product.salePrice && (
                      <span className="line-through text-gray-400 text-sm">{product.originalPrice.toLocaleString()}원</span>
                    )}
                  </div>
                  <button className="mt-4 w-full border border-gray-300 text-gray-700 bg-white py-1 rounded text-sm font-medium hover:bg-gray-50">
                    담기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
