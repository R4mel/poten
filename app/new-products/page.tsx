'use client';

import TopNav from "@/components/top-nav";
import SiteLogo from "@/components/site-logo";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { motion } from "framer-motion";

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"


type Product = {
  product_id: number
  name: string
  imageUrl: string
  originalPrice: number
  salePrice: number
  discountRate: number
  is_new: boolean
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
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showVoteSection, setShowVoteSection] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortKey, setSortKey] = useState<string>('추천순');
  const [quantity, setQuantity] = useState<number>(1);
  // 브랜드 투표 선택 상태 추가
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  // 장바구니에 담기 핸들러
  const handleAddToCart = async () => {
    if (!selectedProduct) return;
  
    try {
      const response = await fetch(`/api/users/${userId}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: selectedProduct.product_id,
          quantity: quantity
        }),
      });
  
      if (!response.ok) {
        throw new Error("장바구니 담기 실패");
      }
  
      alert("장바구니에 담겼습니다!");
      setSelectedProduct(null);
      setQuantity(1);
    } catch (error) {
      console.error("장바구니 추가 중 오류:", error);
      alert("장바구니 담기에 실패했습니다.");
    }
  };

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
        return [...products].sort((a, b) => b.product_id - a.product_id);
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
      .then(res => res.json())
      .then((data) => {
        const productList = Array.isArray(data)
          ? data
          : Array.isArray((data as any).products)
          ? (data as any).products
          : [];
        const filtered = productList
          .filter((p: any) => selectedCategories.length === 0 || selectedCategories.includes(p.category))
          .map((p: any) => ({
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
  }, [sortKey, selectedCategories]);

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
          <button className="px-2 pb-1 border-b-2 border-purple-600 text-purple-600 focus:outline-none font-semibold">인기신상품</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">제철신선</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">간편한끼</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">주방리빙</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">뷰티</button>
          <button className="px-2 pb-1 text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 transition focus:outline-none">패션잡화</button>
        </div>

        {/* 네고딜 이벤트 슬라이드 배너 */}
        <div className="relative w-full h-48 md:h-60 overflow-hidden rounded-md shadow mb-8">
          <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out animate-slide">
            <img
              src="/banners/nego-banner-1.jpg"
              alt="네고딜 배너 1"
              className="w-full h-full object-cover flex-shrink-0"
            />
          </div>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white px-4">
            <div>
              <h2 className="text-lg md:text-2xl font-bold mb-2">🔥 요즘 핫한 신상품, 네고왕처럼 할인받자!</h2>
              <p className="text-sm md:text-base">투표 1위 상품은 <span className="font-semibold text-yellow-300">초특가 네고딜</span>로 출시됩니다!</p>
              <button
                onClick={() => setShowVoteSection(true)}
                className="inline-block mt-4 bg-purple-300 hover:bg-purple-400 text-white font-semibold py-2 px-4 rounded-full shadow"
              >
                지금 네고딜 투표하러 가기 →
              </button>
            </div>
          </div>
        </div>

        {showVoteSection && (
          <section className="bg-purple-50 p-6 rounded-lg mb-8 shadow">
            <h2 className="text-lg font-bold mb-4 text-purple-600 text-center">💡 네고딜로 만나고 싶은 브랜드는?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: "lalasweet", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bS0w4otcfN6WcP_ePJSkeh6tNkMWq1y_dA&s" },
                { name: "bibigo", image: "https://yt3.googleusercontent.com/okkk9Kk8ZDC7p5y50uZrePrz14POIrz3UK6pEhX2WSi2CgbzFIQAJZp4KJ3J42Et9K_LDzem=s900-c-k-c0x00ffffff-no-rj" },
                { name: "FULLight", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wgT5ZvBup2_yMJZPv2wSBFXUs3JVIkJ1EQ&s" },
                { name: "TEAZEN", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-QshjN8tX-06NPLpctgdF12Vc6WSbVOFEg&s" },
              ].map((brand, index) => (
                <label
                  key={index}
                  className={`relative group block bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-200 cursor-pointer ${selectedBrand === brand.name ? 'ring-4 ring-purple-300 border-purple-400' : ''}`}
                  onClick={() => setSelectedBrand(brand.name)}
                >
                  <input
                    type="radio"
                    name="nego-brand"
                    className="hidden peer"
                    value={brand.name}
                    checked={selectedBrand === brand.name}
                    onChange={() => setSelectedBrand(brand.name)}
                  />
                  <div className={`p-4 h-full flex flex-col items-center justify-center ${selectedBrand === brand.name ? 'ring-4 ring-purple-300' : ''}`}>
                    <div className="relative w-24 h-24 mb-3">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="object-contain w-full h-full rounded-full border border-gray-200 shadow-sm group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className={`text-sm font-semibold text-center ${selectedBrand === brand.name ? 'text-purple-700' : 'text-gray-800'}`}>{brand.name}</p>
                  </div>
                </label>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                className="bg-purple-300 text-white px-6 py-2 rounded-full hover:bg-purple-400 transition font-semibold shadow"
                onClick={() => {
                  if (!selectedBrand) {
                    alert("브랜드를 선택해주세요");
                    return;
                  }
                  router.push('/lucky-roulette');
                }}
              >
                브랜드 투표하기
              </button>
            </div>
          </section>
        )}

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
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.product_id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-white border rounded-lg overflow-hidden shadow-sm group">
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
                </motion.div>
              ))}
            </motion.div>
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
                      <button
                        className="px-3 py-1"
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      >−</button>
                      <span className="px-4">{quantity}</span>
                      <button
                        className="px-3 py-1"
                        onClick={() => setQuantity(q => q + 1)}
                      >+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="font-bold text-xl">{(selectedProduct.salePrice * quantity).toLocaleString()} 원</span>
                    <div className="space-x-2">
                      <button
                        onClick={() => { setSelectedProduct(null); setQuantity(1); }}
                        className="px-4 py-2 border rounded text-sm"
                      >
                        취소
                      </button>
                      <button
                        className="px-4 py-2 bg-purple-400 text-white rounded text-sm"
                        onClick={handleAddToCart}
                      >
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