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
  const { user_id, phone, address, password } = req.body;
  if (!user_id) {
    return res.status(400).json({ error: "잘못된 요청입니다." });
  }
  const updateData: any = {};
  if (phone !== undefined) updateData.phone = phone;
  if (address !== undefined) updateData.address = address;
  if (password) {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "비밀번호는 6자 이상이어야 합니다." });
    }
    updateData.password = await bcrypt.hash(password, 10);
  }
  updateData.updated_at = new Date().toISOString();
  const { error } = await supabase
    .from("Users")
    .update(updateData)
    .eq("user_id", user_id);
  if (error) {
    return res.status(500).json({ error: "정보 수정에 실패했습니다." });
  }
  return res.status(200).json({ message: "정보가 성공적으로 수정되었습니다." });
}
