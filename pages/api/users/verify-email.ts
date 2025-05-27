import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/email";

// 임시 메모리 저장 (실서비스는 Redis/DB 사용 권장)
declare global {
  // eslint-disable-next-line no-var
  var __codeStore: Record<string, { code: string; expires: number }> | undefined;
}
const codeStore: Record<string, { code: string; expires: number }> = global.__codeStore || (global.__codeStore = {});

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
  // Generate 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  // Store code with 5 min expiry
  codeStore[email] = { code, expires: Date.now() + 5 * 60 * 1000 };

  try {
    await sendEmail({
      to: email,
      subject: "[Poten] 이메일 인증 코드",
      text: `인증 코드: ${code}`,
    });
    return res.status(200).json({ success: true }); // code 미노출
  } catch (e) {
    return res.status(500).json({ error: "이메일 전송에 실패했습니다." });
  }
}
