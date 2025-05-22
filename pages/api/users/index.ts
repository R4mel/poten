import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Get all users (do not return sensitive info)
    const { data, error } = await supabase
      .from("Users")
      .select("user_id, email, name, created_at"); // Adjust fields as needed

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { email, password, name, phone, address, role } = req.body;
    if (!email || !password || !name || !phone || !address || !role) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if user already exists
    const { data: existing } = await supabase
      .from("Users")
      .select("user_id")
      .eq("email", email)
      .single();

    if (existing) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const now = new Date().toISOString();

    // Insert new user
    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          email,
          password: hashedPassword,
          name,
          phone,
          address,
          role,
          updated_at: now,
        },
      ])
      .select("user_id, email, name, phone, address, role, updated_at")
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
