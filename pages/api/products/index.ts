import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from "@/lib/supabase";
import { checkAdmin } from "@/lib/checkAdmin";
import { ca } from 'date-fns/locale';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // // //권한 체크
  // if (["POST"].includes(req.method!)) {
  //   const isAdmin = await checkAdmin(req, res);
  //   if (!isAdmin) return;
  // }
  
  // 상품 목록 조회
  if (req.method === 'GET') {
    const { data: products, error } = await supabase
      .from('Products')
      .select('*');

    if (error) {
      return res.status(500).json({ message: '상품 목록을 불러오는 중 오류 발생', error: error.message });
    }

    return res.status(200).json(products);
  }

  // 상품 등록 //관리자
  if (req.method === 'POST') {
    const { name, description, price, stock, category_id } = req.body;

    const { data: newProduct, error } = await supabase
      .from('Products')
      .insert([{ name, description, price, stock, category_id}])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ message: '상품 등록 중 오류 발생', error: error.message });
    }

    return res.status(201).json(newProduct);
  }

  // 허용되지 않은 메서드 처리
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}