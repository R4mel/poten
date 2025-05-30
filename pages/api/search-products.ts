import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { q } = req.query;
  if (!q || typeof q !== "string") {
    return res.status(400).json({ error: "검색어가 필요합니다." });
  }
  // Search by name or description (case-insensitive)
  const { data, error } = await supabase
    .from("Products")
    .select("product_id, name, price, imageUrl, description")
    .ilike("name", `%${q}%`);
  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json(data);
}
