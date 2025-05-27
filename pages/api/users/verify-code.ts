import type { NextApiRequest, NextApiResponse } from "next";

// 임시 메모리 저장 (실서비스는 Redis/DB 사용 권장)
declare global {
  // eslint-disable-next-line no-var
  var __codeStore: Record<string, { code: string; expires: number }> | undefined;
}
const codeStore: Record<string, { code: string; expires: number }> = global.__codeStore || (global.__codeStore = {});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { email, code } = req.body;
  if (!email || !code) {
    return res.status(400).json({ error: "이메일과 인증코드를 입력해 주세요." });
  }
  const entry = codeStore[email];
  if (!entry || entry.code != code) {
    return res.status(400).json({ error: "인증 코드가 올바르지 않습니다." });
  }
  if (Date.now() > entry.expires) {
    return res.status(400).json({ error: "인증 코드가 만료되었습니다." });
  }
  // 인증 성공 시 코드 삭제
  delete codeStore[email];
  return res.status(200).json({ success: true });
}
