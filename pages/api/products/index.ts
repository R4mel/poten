import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // GET: List all products
  if (req.method === "GET") {
    const { data, error } = await supabase.from("Products").select("*");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // POST: Create a new product (admin only)
  if (req.method === "POST") {
    const { name, description, price, stock, category_id, products_option } = req.body;
    if (!name || !price || !stock || !category_id) {
      return res.status(400).json({ error: "필수 항목이 누락되었습니다." });
    }
    const { data, error } = await supabase.from("Products").insert([
      { name, description, price, stock, category_id, products_option }
    ]).select("*").single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
