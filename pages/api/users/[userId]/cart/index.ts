import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId || Array.isArray(userId) || isNaN(Number(userId))) {
    return res.status(400).json({ message: '잘못된 사용자 ID' });
  }

  if (req.method === 'GET') {
    // cart_id 조회
    const { data: cart, error: cartError } = await supabase
      .from('Carts')
      .select('cart_id')
      .eq('user_id', Number(userId))
      .single();

    if (cartError || !cart) {
      return res.status(404).json({ message: '장바구니가 없습니다.' });
    }

    // cart_item 목록 조회 (상품 정보 포함)
    const { data: cartItems, error } = await supabase
      .from('Cart_Items')
      .select('product_id, quantity, Product:product_id(name, price)')
      .eq('cart_id', cart.cart_id);

    if (error) {
      return res.status(500).json({ message: '장바구니 상품 조회 중 오류 발생', error: error.message });
    }

    return res.status(200).json({
      cart_id: cart.cart_id,
      user_id: Number(userId),
      items: cartItems,
    });
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

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}