import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

// Noticeboard-like customer service endpoint
// GET: List all notices
// POST: Create a new notice (admin only)
// (Optional) PUT/DELETE for admin

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Fetch all notices, newest first
    const { data, error } = await supabase
      .from("CustomerService")
      .select("id, title, content, created_at, author")
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    // Only admin can post
    // (In production, check session user role)
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ error: "필수 항목이 누락되었습니다." });
    }
    const { data, error } = await supabase
      .from("CustomerService")
      .insert([{ title, content, author }])
      .select("id, title, content, created_at, author")
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  if (req.method === "PUT") {
    // Only admin can update
    const { id, title, content } = req.body;
    if (!id || !title || !content) {
      return res.status(400).json({ error: "필수 항목이 누락되었습니다." });
    }
    const { data, error } = await supabase
      .from("CustomerService")
      .update({ title, content })
      .eq("id", id)
      .select("id, title, content, created_at, author")
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "DELETE") {
    // Only admin can delete
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "공지 ID가 필요합니다." });
    }
    const { error } = await supabase
      .from("CustomerService")
      .delete()
      .eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
