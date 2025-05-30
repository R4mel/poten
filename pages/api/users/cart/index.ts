import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user?.email) {
    return res.status(401).json({ error: "로그인이 필요합니다." });
  }

  // Get user_id from Users table
  const { data: user, error: userError } = await supabase
    .from("Users")
    .select("user_id")
    .eq("email", session.user.email)
    .single();
  if (userError || !user) {
    return res.status(404).json({ error: "유저 정보를 찾을 수 없습니다." });
  }
  const user_id = user.user_id;

  if (req.method === "GET") {
    // Step 1: Get user's cart
    const { data: cart } = await supabase
      .from("Carts")
      .select("cart_id")
      .eq("user_id", user_id)
      .single();
    if (!cart) {
      return res.status(200).json({ cart_id: null, Cart_Items: [] });
    }

    // Debug: fetch all cart items for this cart_id
    const { data: allItems } = await supabase
      .from("Cart_Items")
      .select("*")
      .eq("cart_id", cart.cart_id);

    // Step 2: Get cart items (no join)
    const { data: items } = await supabase
      .from("Cart_Items")
      .select("product_id, quantity")
      .eq("cart_id", cart.cart_id);
    return res.status(200).json({ cart_id: cart.cart_id, Cart_Items: items || [] });
  }

  if (req.method === "POST") {
    const { product_id, quantity } = req.body;
    if (!product_id || !quantity) {
      return res.status(400).json({ error: "상품 정보가 올바르지 않습니다." });
    }
    // Find or create cart for user
    let { data: cart } = await supabase
      .from("Carts")
      .select("cart_id")
      .eq("user_id", user_id)
      .single();
    if (!cart) {
      const { data: newCart, error: cartError } = await supabase
        .from("Carts")
        .insert({ user_id })
        .select("cart_id")
        .single();
      if (cartError || !newCart) {
        return res.status(500).json({ error: "장바구니 생성 실패" });
      }
      cart = newCart;
    }
    // Upsert cart item
    const intProductId = Number(product_id);
    const intQuantity = Number(quantity);
    const { error: upsertError, data: upsertData } = await supabase
      .from("Cart_Items")
      .upsert({ cart_id: cart.cart_id, product_id: intProductId, quantity: intQuantity }, { onConflict: "cart_id,product_id" });
    if (upsertError) {
      console.error("Cart_Items upsert error:", upsertError);
      return res.status(500).json({ error: "장바구니 추가 실패", details: upsertError.message });
    }
    return res.status(200).json({ ok: true, upsertData });
  }

  return res.status(405).json({ error: "허용되지 않은 메서드" });
}
