import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";
import { sendEmail } from "@/lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("Users")
      .select("user_id, email, name, created_at");
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const {
      email,
      password,
      name,
      phone,
      address,
      role,
      provider,
      provider_id,
      findType,
    } = req.body;

    // Find ID
    if (findType === "id") {
      // Send ID to email using nodemailer
      if (!email) {
        return res.status(400).json({ error: "이메일을 입력해 주세요." });
      }
      // Find user by email
      const { data: user, error } = await supabase
        .from("Users")
        .select("email")
        .eq("email", email)
        .single();
      if (error || !user) {
        return res.status(404).json({ error: "일치하는 회원 정보가 없습니다." });
      }
      try {
        await sendEmail({
          to: user.email,
          subject: "[Poten] 아이디 찾기 결과",
          text: `회원님의 아이디(이메일)는: ${user.email}`,
        });
        return res.status(200).json({ success: true });
      } catch (e) {
        return res.status(500).json({ error: "이메일 전송에 실패했습니다." });
      }
    }

    // Find Password
    if (findType === "password") {
      return res
        .status(501)
        .json({ error: "이메일로 비밀번호 전송 기능이 비활성화되었습니다." });
    }

    // User Registration
    if (!email || !name || !password) {
      return res.status(400).json({ error: "" });
    }
    const { data: existing } = await supabase
      .from("Users")
      .select("user_id")
      .eq("email", email)
      .single();
    if (existing) {
      return res.status(409).json({ error: "이미 가입된 회원입니다." });
    }
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    } else {
      const randomPassword =
        Math.random().toString(36) + Date.now().toString(36);
      hashedPassword = await bcrypt.hash(randomPassword, 10);
    }
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          email,
          password: hashedPassword,
          name,
          phone: phone || null,
          address: address || null,
          role: "customer",
          provider: provider || null,
          provider_id: provider_id || null,
          updated_at: now,
        },
      ])
      .select(
        "user_id, email, name, phone, address, role, provider, provider_id, updated_at"
      )
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
