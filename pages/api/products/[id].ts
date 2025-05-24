import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: "상품 ID가 필요합니다." });

  // GET: Get product detail
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("Products")
      .select("*")
      .eq("product_id", id)
      .single();
    if (error)
      return res.status(404).json({ error: "상품을 찾을 수 없습니다." });
    return res.status(200).json(data);
  }

  // PUT: Update product (admin only)
  if (req.method === "PUT") {
    const { name, description, price, stock, category_id, products_option } =
      req.body;
    const { error } = await supabase
      .from("Products")
      .update({ name, description, price, stock, category_id, products_option })
      .eq("product_id", id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: "상품이 수정되었습니다." });
  }

  // DELETE: Delete product (admin only)
  if (req.method === "DELETE") {
    const { error } = await supabase
      .from("Products")
      .delete()
      .eq("product_id", id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ message: "상품이 삭제되었습니다." });
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
