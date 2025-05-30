
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from "@/lib/supabase";
import { checkAdmin } from "@/lib/checkAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const { productId } = req.query;

  if (!productId || Array.isArray(productId) || isNaN(Number(productId))) {
    return res.status(400).json({ message: '잘못된 ID' });
  }
  // // 권한 체크 (예: PUT, DELETE 등)
  // if (["PUT", "DELETE"].includes(req.method!)) {
  //   const isAdmin = await checkAdmin(req, res);
  //   if (!isAdmin) return;
  // }
  // 상품 상세 조회  
  if (req.method === 'GET') {
    const { data: product, error } = await supabase
      .from('Products')
      .select('*')
      .eq('product_id', Number(productId))
      .single();

    if (error || !product) {
      return res.status(404).json({ message: '상품 없음', error: error?.message });
    }

    return res.status(200).json(product);
  }

  // 상품 수정 //관리자
  if (req.method === 'PUT') {
    const { name, description, price, stock } = req.body;

    const { data: updatedProduct, error } = await supabase
      .from('Products')
      .update({ name, description, price, stock })
      .eq('product_id', Number(productId))
      .single();

    if (error) {
      console.error('상품 수정 오류:', error);
      return res.status(500).json({ message: '상품 수정 실패', error: error.message });
    }

    return res.status(200).json(updatedProduct);
  }

  // 상품 삭제 //관리자
  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('Products')
      .delete()
      .eq('product_id', Number(productId));

    if (error) {
      return res.status(500).json({ message: '상품 삭제 실패', error: error.message });
    }

    return res.status(200).json({ message: '삭제 완료' });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
