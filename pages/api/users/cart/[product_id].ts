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

  if (req.method === "DELETE") {
    const { product_id } = req.query;
    if (!product_id) {
      return res.status(400).json({ error: "상품 정보가 올바르지 않습니다." });
    }
    // Find user's cart
    const { data: cart } = await supabase
      .from("Carts")
      .select("cart_id")
      .eq("user_id", user_id)
      .single();
    if (!cart) {
      return res.status(404).json({ error: "장바구니가 없습니다." });
    }
    // Delete cart item
    const { error: deleteError } = await supabase
      .from("Cart_Items")
      .delete()
      .eq("cart_id", cart.cart_id)
      .eq("product_id", product_id);
    if (deleteError) {
      return res.status(500).json({ error: "장바구니 삭제 실패" });
    }
    return res.status(200).json({ ok: true });
  }

  return res.status(405).json({ error: "허용되지 않은 메서드" });
}
