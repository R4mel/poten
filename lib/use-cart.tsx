"use client";

import type React from "react";
import { useSession } from "next-auth/react";

import { createContext, useContext, useState, useEffect } from "react";
import type { CartItem } from "./types";

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: () => {},
  updateQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load cart from API on initial render if logged in
  useEffect(() => {
    async function fetchCartWithProductDetails() {
      if (session?.user) {
        const res = await fetch("/api/users/cart");
        const cart = await res.json();
        if (cart && Array.isArray(cart.Cart_Items)) {
          const itemsWithProduct = await Promise.all(
            cart.Cart_Items.map(async (ci: any) => {
              if (ci.Product && ci.Product.name) {
                return {
                  id: String(ci.product_id),
                  name: ci.Product.name,
                  price: ci.Product.price,
                  quantity: ci.quantity,
                  image: ci.Product.image || "",
                };
              } else {
                // Fallback: fetch product info from API
                const productRes = await fetch(
                  `/api/products/${ci.product_id}`
                );
                const product = await productRes.json();
                return {
                  id: String(product.id || product.product_id),
                  name: product.name || "",
                  price: product.price || 0,
                  quantity: ci.quantity,
                  image:
                    product.imageUrl ||
                    (product.images && product.images[0]?.url) ||
                    "",
                };
              }
            })
          );
          setItems(itemsWithProduct);
        } else {
          setItems([]);
        }
        setLoading(false);
      } else {
        setItems([]);
        setLoading(false);
      }
    }
    fetchCartWithProductDetails();
  }, [session]);

  const addToCart = async (newItem: CartItem) => {
    if (!session?.user) return;
    // Optimistic update
    setItems((prev) => {
      const exists = prev.find((item) => item.id === newItem.id);
      if (exists) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
    // Sync with backend
    const res = await fetch("/api/users/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_id: Number(newItem.id),
        quantity: newItem.quantity,
      }),
    });
    if (!res.ok) {
      // Rollback if failed
      setItems((prev) => prev.filter((item) => item.id !== newItem.id));
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    if (!session?.user) return;
    await fetch("/api/users/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_id: Number(id), quantity }),
    });
  };

  const removeFromCart = async (id: string) => {
    // Optimistic update
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (!session?.user) return;
    const res = await fetch(`/api/users/cart/${Number(id)}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      // Rollback if failed
      // (Optional: re-fetch or show error)
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  if (loading) return null;

  return (
    <CartContext.Provider
      value={{ items, addToCart, updateQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
