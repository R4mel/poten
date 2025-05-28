import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { userId, amount, currency, email, name, items } = req.body;
  if (!userId || !amount || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "필수 주문 정보가 누락되었습니다." });
  }
  try {
    // 1. Create order
    const order = await prisma.orders.create({
      data: {
        user_id: userId,
        status: "pending",
        total_price: amount,
      },
    });
    // 2. Create payment record (pending)
    const payment = await prisma.payments.create({
      data: {
        order_id: order.order_id,
        method: "toss", // or null, to be updated after payment
        amount: amount,
      },
    });
    // 3. (Optional) Record ordered products in a join table if needed
    // 4. Return orderId and orderName for Toss widget
    return res.status(200).json({ orderId: String(order.order_id), orderName: items.map((item:any) => item.name).join(", ") });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "주문 생성 실패" });
  }
}