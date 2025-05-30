import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';
import { checkAdmin } from "@/lib/checkAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId, reviewId } = req.query;

  if (
    !productId || Array.isArray(productId) || isNaN(Number(productId)) ||
    !reviewId || Array.isArray(reviewId) || isNaN(Number(reviewId))
  ) {
    return res.status(400).json({ message: '잘못된 요청' });
  }

  // 리뷰 수정 //글쓴이만
  if (req.method === 'PUT') {
    const { user_id, rating, comment } = req.body;

    if (!user_id) {
      return res.status(400).json({ message: 'user_id가 필요합니다.' });
    }

    const { data: review, error: reviewError } = await supabase
      .from('Reviews')
      .select('user_id')
      .eq('review_id', Number(reviewId))
      .eq('product_id', Number(productId))
      .single();

    if (reviewError || !review) {
      return res.status(404).json({ message: '리뷰를 찾을 수 없습니다.', error: reviewError?.message });
    }

    if (review.user_id !== user_id) {
      return res.status(403).json({ message: '본인만 리뷰를 수정할 수 있습니다.' });
    }

    const { data: updatedReview, error } = await supabase
      .from('Reviews')
      .update({ rating, comment })
      .eq('review_id', Number(reviewId))
      .eq('product_id', Number(productId))
      .select() 
      .single();

    if (error) {
      return res.status(500).json({ message: '리뷰 수정 중 오류 발생', error: error.message });
    }

    return res.status(200).json(updatedReview);
  }

  // 리뷰 삭제 //글쓴이, 관리자
  if (req.method === 'DELETE') {
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ message: 'user_id가 필요합니다.' });
    }

    const { data: review, error: reviewError } = await supabase
      .from('Reviews')
      .select('user_id')
      .eq('review_id', Number(reviewId))
      .eq('product_id', Number(productId))
      .single();

    if (reviewError || !review) {
      return res.status(404).json({ message: '리뷰를 찾을 수 없습니다.', error: reviewError?.message });
    }
    //권한 체크
    // let isAdmin =  true;
    // try {
    //   isAdmin = await checkAdmin(req, res);
    // } catch {
    //   isAdmin = false;
    // }

    // if (review.user_id !== user_id && !isAdmin) {
    //   return res.status(403).json({ message: '글쓴이 또는 관리자만 리뷰를 삭제할 수 있습니다.' });
    // }

    const { error } = await supabase
      .from('Reviews')
      .delete()
      .eq('review_id', Number(reviewId))
      .eq('product_id', Number(productId));

    if (error) {
      return res.status(500).json({ message: '리뷰 삭제 중 오류 발생', error: error.message });
    }

    return res.status(200).json({ message: '리뷰가 삭제되었습니다.' });
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}