"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCard from "@/components/product-card";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";
import { products as bestProducts } from "@/lib/products";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice: number;
  salePrice: number;
  discountRate: number;
  createdAt?: string;
  sales?: number;
  category?: string;
};

const mockCategories = [
  { id: "all", name: "전체" },
  { id: "meal", name: "간편식사" },
  { id: "fresh", name: "신선식품" },
  { id: "daily", name: "생활필수품" },
  { id: "staff", name: "직원추천상품" },
];
const mockProducts: Product[] = [
  {
    id: 1,
    name: "[집밥의완성] 소고기 미역국",
    imageUrl:  "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/e81e1e27-9b72-442a-b3d8-86e969c33fba.jpg",
    originalPrice: 9900,
    salePrice: 7900,
    discountRate: 20,
    createdAt: "2024-06-01T09:00:00Z",
    sales: 340,
    category: "meal",
  },
  {
    id: 2,
    name: "[집밥의완성] 된장찌개",
    imageUrl: "https://img-cf.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/shop/data/goods/1647407885598l0.jpg",
    originalPrice: 6900,
    salePrice: 6900,
    discountRate: 0,
    createdAt: "2024-05-25T12:00:00Z",
    sales: 210,
    category: "meal",
  },
  {
    id: 3,
    name: "[집밥의완성] 김치찌개",
    imageUrl: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/a695cf27-81b4-4ac2-8683-da431feedb75.jpeg",
    originalPrice: 9900,
    salePrice: 7900,
    discountRate: 20,
    createdAt: "2024-05-28T15:00:00Z",
    sales: 300,
    category: "meal",
  },
  {
    id: 4,
    name: "[집밥의완성] 제육볶음",
    imageUrl: "https://image.greating.co.kr/IL/item/202307/10/DCCA3CA39EE84953BE0198B9D0792B43.png",
    originalPrice: 12900,
    salePrice: 9900,
    discountRate: 23,
    createdAt: "2024-05-20T10:00:00Z",
    sales: 400,
    category: "meal",
  },
  {
    id: 5,
    name: "[집밥의완성] 갈비찜",
    imageUrl: "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/bc5d253d-4444-4b37-af91-44c2a6014823.jpg",
    originalPrice: 19900,
    salePrice: 19900,
    discountRate: 0,
    createdAt: "2024-05-10T13:00:00Z",
    sales: 150,
    category: "meal",
  },
  {
    id: 6,
    name: "[집밥의완성] 오징어볶음",
    imageUrl:"https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/568c9a24-18ca-40c4-b9e0-950f59a025b9.jpg",
    originalPrice: 10900,
    salePrice: 8900,
    discountRate: 18,
    createdAt: "2024-06-02T08:00:00Z",
    sales: 220,
    category: "meal",
  },
  {
    id: 7,
    name: "[집밥의완성] 시금치나물",
    imageUrl: "https://img-cf.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/shop/data/goods/1611123823128l0.jpg",
    originalPrice: 5900,
    salePrice: 4900,
    discountRate: 17,
    createdAt: "2024-06-03T14:00:00Z",
    sales: 180,
    category: "fresh",
  },
  {
    id: 8,
    name: "[집밥의완성] 잡채",
    imageUrl: "https://img-cf.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/shop/data/goods/1642393225580l0.jpg",
    originalPrice: 9900,
    salePrice: 8900,
    discountRate: 10,
    createdAt: "2024-06-04T09:00:00Z",
    sales: 120,
    category: "meal",
  },
]

const TopRankedProductsSection = () => {
  // Sort by sales descending, take top 5
  const topProducts = [...mockProducts].sort((a, b) => (b.sales ?? 0) - (a.sales ?? 0)).slice(0, 5);

  // Modal per card, so we keep showModal state for each index
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [modalQty, setModalQty] = useState(1);

  const handleOpenModal = (idx: number) => {
    setModalIndex(idx);
    setModalQty(1);
  };
  const handleCloseModal = () => setModalIndex(null);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6">
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
              <button
                onClick={() => handleOpenModal(index)}
                className="mt-4 w-full border border-gray-300 text-gray-700 bg-white py-1 rounded text-sm font-medium hover:bg-gray-50"
              >
                담기
              </button>
              {modalIndex === index && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-md md:max-w-2xl">
                    {/* Image */}
                    <div className="p-4 flex-shrink-0 flex items-center justify-center">
                      <Image src={product.imageUrl} alt={product.name} width={150} height={150} className="rounded object-cover w-32 h-32" />
                    </div>
                    {/* Details */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                        <div className="flex items-center mb-3 space-x-2">
                          <span className="text-xl font-bold">{product.salePrice?.toLocaleString()}원</span>
                          {product.originalPrice && product.originalPrice > product.salePrice && (
                            <span className="line-through text-gray-400 text-base">{product.originalPrice.toLocaleString()}원</span>
                          )}
                          {product.discountRate > 0 && (
                            <span className="text-purple-600 font-semibold text-base">{product.discountRate}%</span>
                          )}
                        </div>
                        <div className="flex items-center mb-4">
                          <span className="mr-2 text-sm">수량</span>
                          <button
                            className="w-7 h-7 border rounded text-lg font-bold text-gray-700 flex items-center justify-center"
                            onClick={() => setModalQty(qty => Math.max(1, qty - 1))}
                            aria-label="수량 감소"
                          >-</button>
                          <span className="mx-3 text-base">{modalQty}</span>
                          <button
                            className="w-7 h-7 border rounded text-lg font-bold text-gray-700 flex items-center justify-center"
                            onClick={() => setModalQty(qty => qty + 1)}
                            aria-label="수량 증가"
                          >+</button>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <button
                          className="flex-1 py-2 rounded border border-gray-300 text-gray-700 bg-white font-medium hover:bg-gray-50"
                          onClick={handleCloseModal}
                        >취소</button>
                        <button
                          className="flex-1 py-2 rounded bg-purple-300 text-white font-semibold hover:bg-purple-700"
                          onClick={handleCloseModal}
                        >장바구니 담기</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function BestProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [sortKey, setSortKey] = useState("추천순");

  useEffect(() => {
    let filtered = mockProducts;
    if (selectedCategory !== "all") {
      filtered = mockProducts.filter((product) => product.category === selectedCategory);
    }
    switch (sortKey) {
      case "추천순":
        // Assume "추천순" is the default order, or sort by sales, then discount, then createdAt
        filtered = filtered.slice().sort((a, b) => {
          // Higher sales first, then higher discount, then newer
          if ((b.sales ?? 0) !== (a.sales ?? 0)) return (b.sales ?? 0) - (a.sales ?? 0);
          if ((b.discountRate ?? 0) !== (a.discountRate ?? 0)) return (b.discountRate ?? 0) - (a.discountRate ?? 0);
          return new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime();
        });
        break;
      case "신상품순":
        filtered = filtered.slice().sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime());
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

  const ProductCardWithModal = ({ product }: { product: Product }) => {
    const [showModal, setShowModal] = useState(false);
    const [qty, setQty] = useState(1);

    return (
      <div className="bg-white border rounded-lg shadow overflow-hidden group">
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
          <button
            onClick={() => { setShowModal(true); setQty(1); }}
            className="mt-4 w-full border border-gray-300 text-gray-700 bg-white py-1 rounded text-sm font-medium hover:bg-gray-50"
          >
            담기
          </button>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-md md:max-w-2xl">
                {/* Image */}
                <div className="p-4 flex-shrink-0 flex items-center justify-center">
                  <Image src={product.imageUrl} alt={product.name} width={150} height={150} className="rounded object-cover w-32 h-32" />
                </div>
                {/* Details */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center mb-3 space-x-2">
                      <span className="text-xl font-bold">{product.salePrice?.toLocaleString()}원</span>
                      {product.originalPrice && product.originalPrice > product.salePrice && (
                        <span className="line-through text-gray-400 text-base">{product.originalPrice.toLocaleString()}원</span>
                      )}
                      {product.discountRate > 0 && (
                        <span className="text-purple-600 font-semibold text-base">{product.discountRate}%</span>
                      )}
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="mr-2 text-sm">수량</span>
                      <button
                        className="w-7 h-7 border rounded text-lg font-bold text-gray-700 flex items-center justify-center"
                        onClick={() => setQty(q => Math.max(1, q - 1))}
                        aria-label="수량 감소"
                      >-</button>
                      <span className="mx-3 text-base">{qty}</span>
                      <button
                        className="w-7 h-7 border rounded text-lg font-bold text-gray-700 flex items-center justify-center"
                        onClick={() => setQty(q => q + 1)}
                        aria-label="수량 증가"
                      >+</button>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      className="flex-1 py-2 rounded border border-gray-300 text-gray-700 bg-white font-medium hover:bg-gray-50"
                      onClick={() => setShowModal(false)}
                    >취소</button>
                    <button
                      className="flex-1 py-2 rounded bg-purple-300 text-white font-semibold hover:bg-purple-700"
                      onClick={() => setShowModal(false)}
                    >장바구니 담기</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <TopNav />
          <div className="flex items-center py-4">
            <SiteLogo />
            <nav className="hidden md:clflex flex-1 items-center">
              <MainNav />
            </nav>
            <div className="flex justify-between items-center w-full">
              <MainNav />
              <div className="relative w-full max-w-md ml-auto">
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
        <h1 className="text-3xl font-bold mb-6 text-center">베스트</h1>
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
            {/* <h1 className="text-2xl font-bold mb-2">베스트 상품</h1> */}
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
              <ProductCardWithModal key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>

      <SiteFooter />
    </div>
  );
}
