import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export async function checkAdmin(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  // 세션이 없으면 거부
  if (!session || !session.user?.email) {
    res.status(403).json({ message: "관리자만 접근 가능합니다." });
    return false;
  }

  // 세션에 role이 있으면 바로 체크
  if ((session.user as any).role === "admin") {
    return true;
  }

  // 세션에 role이 없으면 DB에서 조회
  const { data: user, error } = await supabase
    .from("Users")
    .select("role")
    .eq("email", session.user.email)
    .single();

  if (error || !user || user.role !== "admin") {
    res.status(403).json({ message: "관리자만 접근 가능합니다." });
    return false;
  }

  return true;
}