import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
import { checkAdmin } from "@/lib/checkAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return res.status(400).json({ message: '잘못된 ID' });
  }
  // 권한 체크
  // if (["PUT"].includes(req.method!)) {
  //   const isAdmin = await checkAdmin(req, res);
  //   if (!isAdmin) return;
  // }

  // 주문 상세 조회
  if (req.method === 'GET') {
    const { data: order, error } = await supabase
      .from('Orders')
      .select('*')
      .eq('order_id', Number(id))
      .single();

    if (error || !order) {
      return res.status(404).json({ message: '주문을 찾을 수 없습니다.', error: error?.message });
    }

    return res.status(200).json(order);
  }

  // 주문 상태 변경 //관리자
  if (req.method === 'PUT') {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: '변경할 상태값이 필요합니다.' });
    }

    const { data: updatedOrder, error } = await supabase
      .from('Orders')
      .update({ status })
      .eq('order_id', Number(id))
      .single();

    if (error || !updatedOrder) {
      return res.status(500).json({ message: '주문 상태 변경 실패', error: error?.message });
    }

    return res.status(200).json(updatedOrder);
  }

    // 주문 취소
  if (req.method === 'DELETE') {
    const { data: canceledOrder, error } = await supabase
      .from('Orders')
      .update({ status: 'canceled' })
      .eq('order_id', Number(id))
      .single();

    if (error || !canceledOrder) {
      return res.status(500).json({ message: '주문 취소 실패', error: error?.message });
    }

    return res.status(200).json({ message: '주문이 취소되었습니다.', order: canceledOrder });
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}