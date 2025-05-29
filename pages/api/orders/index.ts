import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const { userId } = req.query;
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "유저 정보가 없습니다." });
  }
  try {
    const orders = await prisma.orders.findMany({
      where: { user_id: Number(userId) },
      include: { Payment: true },
      orderBy: { created_at: "desc" },
    });
    res.status(200).json(orders.map(order => ({
      order_id: order.order_id,
      created_at: order.created_at,
      status: order.status,
      total_price: order.total_price,
      payment_method: order.Payment?.method || null,
    })));
  } catch (e) {
    res.status(500).json({ error: "주문 내역을 불러올 수 없습니다." });
  }
}
