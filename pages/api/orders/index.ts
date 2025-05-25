import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
import { checkAdmin } from "@/lib/checkAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // //권한 체크
  if (["GET"].includes(req.method!)) {
    const isAdmin = await checkAdmin(req, res);
    if (!isAdmin) return;
  }
  
    // 전체 주문 목록 조회 //관리자
  if (req.method === 'GET') {
    const { data: orders, error } = await supabase
      .from('Orders')
      .select('*');

    if (error) {
      return res.status(500).json({ message: '주문 목록을 불러오는 중 오류 발생', error: error.message });
    }

    return res.status(200).json(orders);
  }
  
  // 주문 생성
  if (req.method === 'POST') {
    const { user_id, status, total_price, payment_state } = req.body;

    if (!user_id || !status || !total_price) {
      return res.status(400).json({ message: 'user_id, status, total_price는 필수입니다.' });
    }

    const { data: newOrder, error } = await supabase
    .from('Orders')
    .insert([{
        user_id,
        status,
        total_price,
        ["payment state"]: payment_state
    }])
    .select()
    .single();

    if (error) {
      return res.status(500).json({ message: '주문 생성 중 오류 발생', error: error.message });
    }

    return res.status(201).json(newOrder);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}