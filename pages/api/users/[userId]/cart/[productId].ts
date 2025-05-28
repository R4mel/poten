import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, productId } = req.query;

  if (
    !userId || Array.isArray(userId) || isNaN(Number(userId)) ||
    !productId || Array.isArray(productId) || isNaN(Number(productId))
  ) {
    return res.status(400).json({ message: '잘못된 요청' });
  }

  // 장바구니에서 상품 제거
  if (req.method === 'DELETE') {
    // 사용자의 장바구니 찾기
    const { data: cart, error: cartError } = await supabase
      .from('Carts')
      .select('cart_id')
      .eq('user_id', Number(userId))
      .single();

    if (cartError || !cart) {
      return res.status(404).json({ message: '장바구니를 찾을 수 없습니다.', error: cartError?.message });
    }

    // 장바구니에서 해당 상품 삭제
    const { error } = await supabase
      .from('Cart_Items')
      .delete()
      .eq('cart_id', cart.cart_id)
      .eq('product_id', Number(productId));

    if (error) {
      return res.status(500).json({ message: '장바구니 상품 삭제 중 오류 발생', error: error.message });
    }

    return res.status(200).json({ message: '장바구니에서 상품이 삭제되었습니다.' });
  }

  res.setHeader('Allow', ['DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}