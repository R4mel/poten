"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/use-cart";

export default function CartIconWithCount({
  className = "",
}: {
  className?: string;
}) {
  const { items } = useCart();
  const count = items.length;
  return (
    <span className={`relative text-gray-700 ${className}`}>
      <ShoppingCart className="h-6 w-6" />
      <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    </span>
  );
}
