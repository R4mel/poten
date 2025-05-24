import { supabase } from "@/lib/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // 테스트용 유저 데이터 (필수 컬럼 모두 포함, updated_at 추가)
    const now = new Date().toISOString();
    const testUsers = [
      {
        email: "test1@example.com",
        password: "testpassword1",
        name: "Test User 1",
        phone: "010-1111-1111",
        address: "Seoul",
        role: "user",
        updated_at: now,
      },
      {
        email: "test2@example.com",
        password: "testpassword2",
        name: "Test User 2",
        phone: "010-2222-2222",
        address: "Busan",
        role: "user",
        updated_at: now,
      },
      {
        email: "test3@example.com",
        password: "testpassword3",
        name: "Test User 3",
        phone: "010-3333-3333",
        address: "Incheon",
        role: "user",
        updated_at: now,
      },
    ];

    // Users 테이블에 데이터 삽입
    const { data, error } = await supabase
      .from("Users")
      .insert(testUsers)
      .select("user_id, email, name, phone, address, role, updated_at");

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ message: "Test users inserted", data });
  }

  // Users 테이블에서 user_id, email, name, phone, address, role, updated_at을 5개만 조회
  const { data, error } = await supabase
    .from("Users")
    .select("user_id, email, name, phone, address, role, updated_at")
    .limit(5);
  if (error) return res.status(500).send(`<div>Error: ${error.message}</div>`);
  if (!data || data.length === 0)
    return res.status(200).send("<div>No users found.</div>");

  // HTML 테이블 형태로 출력 (모든 주요 컬럼 포함)
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Supabase Connection Test</title>
        <style>
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ccc; padding: 8px; }
          th { background: #f5f5f5; }
        </style>
      </head>
      <body>
        <h2>Supabase Connection Test (Users table)</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Email</th><th>Name</th><th>Phone</th><th>Address</th><th>Role</th><th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            ${data
              .map(
                (u) =>
                  `<tr><td>${u.user_id}</td><td>${u.email}</td><td>${u.name}</td><td>${u.phone}</td><td>${u.address}</td><td>${u.role}</td><td>${u.updated_at}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </body>
    </html>
  `;
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  return res.status(200).send(Buffer.from(html, "utf-8"));
}
