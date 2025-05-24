import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/supabase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "이메일을 입력해 주세요." });
  }
  const { data: user, error } = await supabase
    .from("Users")
    .select("user_id")
    .eq("email", email)
    .single();
  if (error || !user) {
    return res.status(404).json({ error: "일치하는 회원 정보가 없습니다." });
  }
  // Return user_id for password reset (frontend will redirect to /reset-password?uid=...)
  return res.status(200).json({ userId: user.user_id });
}
