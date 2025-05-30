import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 전체 쿠폰 목록 조회
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('Coupons')
      .select('*')
      .order('coupon_id', { ascending: true });

    if (error) {
      return res.status(500).json({ message: '쿠폰 목록 조회 중 오류 발생', error: error.message });
    }

    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}