"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import ProductCard from "@/components/product-card";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";
import CartIconWithCount from "@/components/cart-icon-with-count";
import { useState, useEffect } from "react";
import CategoryDropdown from "@/components/category-dropdown";

export default function Home() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(Array.isArray(data) ? data : []));
  }, []);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setSearching(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/search-products?q=${encodeURIComponent(search)}`
      );
      const data = await res.json();
      if (res.ok) {
        setSearchResults(data);
      } else {
        setError(data.error || "검색 실패");
        setSearchResults([]);
      }
    } catch (e) {
      setError("검색 중 오류가 발생했습니다.");
      setSearchResults([]);
    }
    setSearching(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleCategorySelect = (categoryId: number, categoryName: string) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
    setFilteredProducts(
      allProducts.filter((p) => p.category_id === categoryId)
    );
    setSearchResults(null);
    setSearch("");
    setError(null);
  };

  const handleCategoryReset = () => {
    setSelectedCategory(null);
    setFilteredProducts(null);
  };

  // Helper to normalize product id
  function getProductId(product: any) {
    return product.id || product.product_id;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          {/* Top navigation */}
          <TopNav />
          {/* Main navigation */}
          <div className="flex items-center py-4">
            <SiteLogo />
            <MainNav onCategorySelect={handleCategorySelect} />
            <div className="flex items-center ml-auto space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="검색어를 입력해주세요"
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  disabled={searching}
                />
                <button
                  className="absolute right-3 top-2.5 p-0 m-0 bg-transparent border-0 cursor-pointer"
                  aria-label="검색"
                  onClick={handleSearch}
                  disabled={searching}
                  tabIndex={-1}
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              <Link href="/cart" className="relative text-gray-700">
                <CartIconWithCount />
              </Link>
            </div>

            <button className="ml-4 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {selectedCategory && (
          <div className="mb-6 flex items-center gap-4">
            <span className="text-lg font-bold text-purple-700">
              {selectedCategory.name} 카테고리
            </span>
            <button
              className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
              onClick={handleCategoryReset}
            >
              전체 상품 보기
            </button>
          </div>
        )}
        {searchResults ? (
          <>
            <h2 className="text-2xl font-bold mb-6">검색 결과</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            {searching ? (
              <div className="py-8 text-center text-gray-500">검색 중...</div>
            ) : searchResults.length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                검색 결과가 없습니다.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {searchResults.map((product) => (
                  <ProductCard
                    key={getProductId(product)}
                    product={{ ...product, id: getProductId(product) }}
                  />
                ))}
              </div>
            )}
            {/* 뒤로가기: 검색 상태만 초기화, 페이지 이동/새로고침 없음! */}
            <button
              className="mt-8 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
              onClick={() => {
                setSearchResults(null);
                setSearch("");
                setError(null);
              }}
            >
              뒤로가기
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">
              {selectedCategory ? `${selectedCategory.name} 상품` : "인기 상품"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {(filteredProducts ?? allProducts).map((product) => (
                <ProductCard
                  key={getProductId(product)}
                  product={{ ...product, id: getProductId(product) }}
                />
              ))}
            </div>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
