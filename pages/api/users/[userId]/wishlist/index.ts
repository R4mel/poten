// import type { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from '@/lib/supabase';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { userId } = req.query;

//   if (!userId || Array.isArray(userId) || isNaN(Number(userId))) {
//     return res.status(400).json({ message: '잘못된 사용자 ID' });
//   }

//   // 찜한 상품 목록 조회
//   if (req.method === 'GET') {
//     const { data: wishlists, error } = await supabase
//       .from('Wishlists')
//       .select('*, Product:product_id(*)')
//       .eq('user_id', Number(userId));

//     if (error) {
//       return res.status(500).json({ message: '찜 목록 조회 중 오류 발생', error: error.message });
//     }

//     return res.status(200).json(wishlists);
//   }

//   res.setHeader('Allow', ['GET']);
//   res.status(405).end(`Method ${req.method} Not Allowed`);
// }