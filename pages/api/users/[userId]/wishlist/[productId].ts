// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '@/lib/supabase';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { userId, productId } = req.query;

//   if (
//     !userId || Array.isArray(userId) || isNaN(Number(userId)) ||
//     !productId || Array.isArray(productId) || isNaN(Number(productId))
//   ) {
//     return res.status(400).json({ message: '잘못된 요청' });
//   }

//   // 찜 추가
//   if (req.method === 'POST') {
//     // 이미 찜한 상품인지 확인
//     const { data: exist, error: existError } = await supabase
//       .from('Wishlists')
//       .select('wishlist_id')
//       .eq('user_id', Number(userId))
//       .eq('product_id', Number(productId))
//       .single();

//     if (exist && exist.wishlist_id) {
//       return res.status(400).json({ message: '이미 찜한 상품입니다.' });
//     }

//     if (existError && existError.code !== 'PGRST116') {
//       return res.status(500).json({ message: '찜 확인 중 오류 발생', error: existError.message });
//     }

//     // 찜 추가
//     const { data: wishlist, error } = await supabase
//       .from('Wishlists')
//       .insert([{ user_id: Number(userId), product_id: Number(productId) }])
//       .select()
//       .single();

//     if (error) {
//       return res.status(500).json({ message: '찜 추가 중 오류 발생', error: error.message });
//     }

//     return res.status(201).json(wishlist);
//   }

//   // 찜 삭제
//   if (req.method === 'DELETE') {
//     const { error } = await supabase
//       .from('Wishlists')
//       .delete()
//       .eq('user_id', Number(userId))
//       .eq('product_id', Number(productId));

//     if (error) {
//       return res.status(500).json({ message: '찜 삭제 중 오류 발생', error: error.message });
//     }

//     return res.status(200).json({ message: '찜이 삭제되었습니다.' });
//   }

//   res.setHeader('Allow', ['POST', 'DELETE']);
//   res.status(405).end(`Method ${req.method} Not Allowed`);
// }