import Link from "next/link";
import { Menu } from "lucide-react";
import CategoryDropdown from "./category-dropdown";

export default function MainNav({
  onCategorySelect,
}: {
  onCategorySelect?: (categoryId: number, categoryName: string) => void;
}) {
  const handleCategorySelect = (categoryId: number, categoryName: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId, categoryName);
    }
  };
  return (
    <nav className="hidden md:flex flex-1 items-center">
      <ul className="flex space-x-8">
        <li>
          <CategoryDropdown onCategorySelect={handleCategorySelect} />
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
