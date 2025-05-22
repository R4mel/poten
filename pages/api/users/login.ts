import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  // Find user by email
  const { data: user, error } = await supabase
    .from("Users")
    .select("user_id, email, password, name, created_at")
    .eq("email", email)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  // Compare password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  // Never return password in response
  const { password: _pw, ...userData } = user;
  return res.status(200).json(userData);
}
