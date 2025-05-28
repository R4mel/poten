import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId || Array.isArray(userId) || isNaN(Number(userId))) {
    return res.status(400).json({ message: '잘못된 사용자 ID' });
  }

  // 사용자 장바구니 조회
  if (req.method === 'GET') {
    const { data: cart, error } = await supabase
      .from('Carts')
      .select('*, Cart_Items(*, Product:product_id(*))')
      .eq('user_id', Number(userId))
      .single();

    if (error) {
      return res.status(500).json({ message: '장바구니 조회 중 오류 발생', error: error.message });
    }

    return res.status(200).json(cart);
  }

  // 장바구니에 상품 추가
  if (req.method === 'POST') {
    const { product_id, quantity } = req.body;

    if (!product_id || !quantity) {
      return res.status(400).json({ message: 'product_id와 quantity가 필요합니다.' });
    }

    //1) 사용자 장바구니(cart)가 있는지 확인, 없으면 생성
    let { data: cart, error: cartError } = await supabase
      .from('Carts')
      .select('cart_id')
      .eq('user_id', Number(userId))
      .single();

    if (cartError && cartError.code !== 'PGRST116') {
      return res.status(500).json({ message: '장바구니 확인 중 오류 발생', error: cartError.message });
    }

    if (!cart) {
      const { data: newCart, error: newCartError } = await supabase
        .from('Carts')
        .insert([{ user_id: Number(userId) }])
        .select()
        .single();
      if (newCartError) {
        return res.status(500).json({ message: '장바구니 생성 중 오류 발생', error: newCartError.message });
      }
      cart = newCart;
    }

    //2) 이미 장바구니에 해당 상품이 있으면 안내메세지, 없으면 추가
    const { data: cartItem, error: cartItemError } = await supabase
      .from('Cart_Items')
      .select('*')
      .eq('cart_id', cart)
      .eq('product_id', product_id)
      .single();

    if (cartItemError && cartItemError.code !== 'PGRST116') {
      return res.status(500).json({ message: '장바구니 상품 확인 중 오류 발생', error: cartItemError.message });
    }

    if (cartItem) {// 이미 있으면 안내 메시지 반환
      return res.status(400).json({ message: '이미 장바구니에 담긴 상품입니다.' });
    } else { // 없으면 새로 추가
      const { data: newItem, error: insertError } = await supabase
        .from('Cart_Items')
        .insert([{ cart_id: cart, product_id, quantity }])
        .select()
        .single();
      if (insertError) {
        return res.status(500).json({ message: '상품 추가 중 오류 발생', error: insertError.message });
      }
      return res.status(201).json(newItem);
    }
  }

    // 3) 상품 수량 변경
  if (req.method === 'PATCH') {
    const { cart_item_id, quantity } = req.body;

    // 유효성 검사: cart_item_id 필수, quantity는 1 이상 정수
    if (
        !cart_item_id ||
        typeof quantity !== 'number' ||
        !Number.isInteger(quantity) ||
        quantity < 1
    ) {
        return res.status(400).json({ message: 'cart_item_id와 1 이상의 정수 quantity가 필요합니다.' });
    }

    const { data: updatedItem, error } = await supabase
        .from('Cart_Items')
        .update({ quantity })
        .eq('cart_item_id', cart_item_id)
        .select()
        .single();

    if (error) {
        return res.status(500).json({ message: '수량 변경 중 오류 발생', error: error.message });
    }

    return res.status(200).json(updatedItem);
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}