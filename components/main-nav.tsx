import Link from "next/link";
import { Menu } from "lucide-react";

export default function MainNav() {
  return (
    <nav className="hidden md:flex flex-1 items-center">
      <ul className="flex space-x-8">
        <li>
          <Link
            href="/categories"
            className="flex items-center text-gray-900 hover:text-purple-800"
          >
            <Menu className="mr-1 h-5 w-5" />
            카테고리
          </Link>
        </li>
        <li>
          <Link
            href="/new-products"
            className="text-gray-900 hover:text-purple-800"
          >
            신상품
          </Link>
        </li>
        <li>
          <Link
            href="/best-products"
            className="text-gray-900 hover:text-purple-800"
          >
            베스트
          </Link>
        </li>
        <li>
          <Link
            href="/sale-products"
            className="text-gray-900 hover:text-purple-800"
          >
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
  );
}
