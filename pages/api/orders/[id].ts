import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "주문 번호가 없습니다." });
  }
  try {
    const order = await prisma.orders.findUnique({
      where: { order_id: Number(id.replace('order-', '')) },
      include: {
        Payment: true,
      }
    });
    if (!order) return res.status(404).json({ error: "주문을 찾을 수 없습니다." });
    res.status(200).json({
      order_id: order.order_id,
      created_at: order.created_at,
      status: order.status,
      total_price: order.total_price,
      payment_method: order.Payment?.method || null,
      items: [],
    });
  } catch (e) {
    res.status(500).json({ error: "주문 정보를 불러올 수 없습니다." });
  }
}
