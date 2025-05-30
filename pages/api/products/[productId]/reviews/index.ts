import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;

  if (!productId || Array.isArray(productId) || isNaN(Number(productId))) {
    return res.status(400).json({ message: '잘못된 상품 ID' });
  }

  // 해당 상품의 전체 리뷰 조회
  if (req.method === 'GET') {
    const { data: reviews, error } = await supabase
      .from('Reviews')
      .select('*')
      .eq('product_id', Number(productId));

    if (error) {
      return res.status(500).json({ message: '리뷰 조회 중 오류 발생', error: error.message });
    }

    return res.status(200).json(reviews);
  }

  // 리뷰 작성 
  // 리뷰작성하려는 사람이 주문을 했는지 체크해야 함
  if (req.method === 'POST') {
    const { user_id, rating, comment, order_id } = req.body;

    if (!user_id || !rating) {
      return res.status(400).json({ message: 'user_id와 rating은 필수입니다.' });
    }

    const { data: newReview, error } = await supabase
      .from('Reviews')
      .insert([{ user_id, product_id: Number(productId), rating, comment, order_id }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ message: '리뷰 작성 중 오류 발생', error: error.message });
    }

    return res.status(201).json(newReview);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}