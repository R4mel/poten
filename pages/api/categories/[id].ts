import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
//import { checkAdmin } from "@/lib/checkAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || Array.isArray(id) || isNaN(Number(id))) {
    return res.status(400).json({ message: '잘못된 ID' });
  }
  // 권한 체크
  // if (["PUT", "DELETE"].includes(req.method!)) {
  //   const isAdmin = await checkAdmin(req, res);
  //   if (!isAdmin) return;
  // }

  // 특정 카테고리 조회
  if (req.method === 'GET') {
    const { data: category, error } = await supabase
      .from('Categories')
      .select('*')
      .eq('category_id', Number(id))
      .single();

    if (error || !category) {
      return res.status(404).json({ message: '카테고리를 찾을 수 없습니다.', error: error?.message });
    }

    return res.status(200).json(category);
  }

  // 카테고리 수정 //관리자
  if (req.method === 'PUT') {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '카테고리 이름이 필요합니다.' });
    }

    const { data: updatedCategory, error } = await supabase
      .from('Categories')
      .update({ name })
      .eq('category_id', Number(id))
      .single();

    if (error) {
      return res.status(500).json({ message: '카테고리 수정 실패', error: error.message });
    }

    return res.status(200).json(updatedCategory);
  }

  // 카테고리 삭제 //관리자
  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('Categories')
      .delete()
      .eq('category_id', Number(id));

    if (error) {
      return res.status(500).json({ message: '카테고리 삭제 실패', error: error.message });
    }

    return res.status(200).json({ message: '삭제 완료' });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
