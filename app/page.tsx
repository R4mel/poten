import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";
import CartIconWithCount from "@/components/cart-icon-with-count";

export default function Home() {
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
        <h2 className="text-2xl font-bold mb-6">인기 상품</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
