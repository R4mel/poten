import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
import { checkAdmin } from "@/lib/checkAdmin";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //권한 체크
  // if (["POST"].includes(req.method!)) {
  //   const isAdmin = await checkAdmin(req, res);
  //   if (!isAdmin) return;
  // }

  // 카테고리 목록 조회
  if (req.method === 'GET') {
    const { data: categories, error } = await supabase
      .from('Categories')
      .select('*');

    if (error) {
      console.error('카테고리 조회 오류:', error);
      return res.status(500).json({ message: '카테고리를 불러오는 중 오류가 발생했습니다.', error: error.message });
    }

    return res.status(200).json(categories);
  }

  // 카테고리 추가 //관리자
  if (req.method === 'POST') {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: '카테고리 이름이 필요합니다.' });
    }

    const { data: newCategory, error } = await supabase
      .from('Categories')
      .insert([{ name }])
      .select()
      .single();

    if (error) {
      console.error('카테고리 추가 오류:', error);
      return res.status(500).json({ message: '카테고리 추가 중 오류가 발생했습니다.', error: error.message });
    }

    return res.status(201).json(newCategory);
  }

  res.setHeader('Allow', ['GET', 'POST']).status(405).end(`Method ${req.method} Not Allowed`);
}