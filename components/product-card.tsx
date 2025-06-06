"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  return (
    <div
      className="group cursor-pointer"
      onClick={() => router.push(`/products/${product.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(`/products/${product.id}`);
      }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-3">
        <h3 className="font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">
              {product.price.toLocaleString()}원
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()}원
              </span>
            )}
          </div>
          {product.discount && (
            <span className="text-sm font-medium text-red-600">
              {product.discount}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
