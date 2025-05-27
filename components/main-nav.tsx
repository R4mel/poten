// import Link from "next/link";
// import { Menu } from "lucide-react";

// export default function MainNav() {
//   return (
//     <nav className="hidden md:flex flex-1 items-center">
//       <ul className="flex space-x-8">
//         <li>
//           <Link
//             href="/categories"
//             className="flex items-center text-gray-900 hover:text-purple-800"
//           >
//             <Menu className="mr-1 h-5 w-5" />
//             카테고리
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/new-products"
//             className="text-gray-900 hover:text-purple-800"
//           >
//             신상품
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/best-products"
//             className="text-gray-900 hover:text-purple-800"
//           >
//             베스트
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/sale-products"
//             className="text-gray-900 hover:text-purple-800"
//           >
//             알뜰쇼핑
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="https://www.kurly.com/collections/market-time-sales"
//             target="_blank"
//             className="text-gray-900 hover:text-purple-800"
//           >
//             특가/혜택
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
// components/main-nav.tsx
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

type Category = {
  category_id: number;
  name: string;
};

export default function MainNav() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <nav className="hidden md:flex flex-1 items-center relative">
      <ul className="flex space-x-8">
        {/* 카테고리 드롭다운 */}
        <li className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-gray-900 hover:text-purple-800"
          >
            <Menu className="mr-1 h-5 w-5" />
            카테고리
          </button>

          {isOpen && (
            <ul className="absolute left-0 top-full mt-2 w-48 bg-white border rounded shadow-md z-50">
              {categories.map((cat) => (
                <li key={cat.category_id}>
                  <Link
                    href={`/category/${cat.category_id}`}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* 다른 메뉴들 */}
        <li>
          <Link href="/new-products" className="text-gray-900 hover:text-purple-800">
            신상품
          </Link>
        </li>
        <li>
          <Link href="/best-products" className="text-gray-900 hover:text-purple-800">
            베스트
          </Link>
        </li>
        <li>
          <Link href="/sale-products" className="text-gray-900 hover:text-purple-800">
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