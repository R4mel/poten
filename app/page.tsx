"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

const bannerImages = [
  "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/f238d08a-289e-443f-ae9a-3957764ee837.jpg",
  "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/15889a7a-80d6-411a-9635-875250b6a7b8.png",
  "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/40ef282b-1582-4eb6-826e-1419af8891e8.png"
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Top navigation */}
          <TopNav />
          {/* Main navigation */}
          <div className="flex items-center py-4">
            <SiteLogo />

            <nav className="hidden md:flex flex-1 items-center">
              <MainNav />
            </nav>

            <div className="flex items-center ml-auto space-x-4">
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

      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        {/* Full-width promotional banner */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <img
            src={bannerImages[currentBanner]}
            alt="Main Promotion Banner"
            className="w-full h-[370px] object-cover rounded-xl shadow-lg ring-2 ring-purple-300 transition duration-500"
          />
        </div>

        {/* Special Event Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center">
            👑  핵심 특가 라인업 👑
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {[
              {
                id: 1,
                img: "https://product-image.kurly.com/hdims/resize/^%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/23a32590-9613-4fe4-b563-f2d5d9a59b25.jpg",
                title: "[KF365] 훈제오리 2종 (2입)",
                discount: "35%",
                price: "6,770원~",
                original: "10,500원",
                badge: "10th 닭/오리고기",
              },
              {
                id: 2,
                img: "https://product-image.kurly.com/hdims/resize/^%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/30b30de4-14f7-438a-844d-604b5a2acde9.jpg",
                title: "세척사과 1.4kg (6~7입)",
                discount: "25%",
                price: "14,900원",
                original: "19,900원",
                badge: "10th 특가",
              },
              {
                id: 3,
                img: "https://product-image.kurly.com/hdims/resize/^%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/70460211-fe85-4374-88cf-35e5a602f620.jpg",
                title: "[골라담기] 인기 국탕찌개 12종 균일가 (택2)",
                discount: "31%",
                price: "6,000원",
                original: "8,700원",
                badge: "최대10% 쿠폰",
              },
              {
                id: 4,
                img: "https://product-image.kurly.com/hdims/resize/^%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/3df368c8-e124-4d06-a9e9-af4c10d01b53.jpeg?v=0531",
                title: "[압구정주꾸미] 주꾸미 볶음 2종 (택1)",
                discount: "26%",
                price: "6,500원~",
                original: "8,900원",
                badge: "10th 수산간편식",
              },
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img src={item.img} alt={item.title} className="w-full rounded-t-lg transition-all" />
                  <span className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {item.badge}
                  </span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="line-clamp-2">{item.title}</p>
                  <div className="flex space-x-2 text-sm items-baseline">
                    <span className="text-lg font-bold text-gray-900">{item.price}</span>
                    <span className="line-through text-gray-400">{item.original}</span>
                  </div>
                  <span className="text-red-500 font-semibold">{item.discount}</span>
                  <button className="mt-2 w-full border border-gray-300 text-gray-700 bg-white py-1 rounded text-sm font-medium hover:bg-purple-50 hover:text-purple-700 transition">
                    담기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Products Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">지금 인기있는 상품</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
