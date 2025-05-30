
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
  const { uid, password } = req.body;
  if (!uid || !password) {
    return res.status(400).json({ error: "잘못된 요청입니다." });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: "비밀번호는 6자 이상이어야 합니다." });
  }
  const hashed = await bcrypt.hash(password, 10);
  const { error } = await supabase
    .from("Users")
    .update({ password: hashed, updated_at: new Date().toISOString() })
    .eq("user_id", uid);
  if (error) {
    return res.status(500).json({ error: "비밀번호 변경에 실패했습니다." });
  }
  return res
    .status(200)
    .json({ message: "비밀번호가 성공적으로 변경되었습니다." });
}
