import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 배송 상태 전체 조회
  if (req.method === 'GET') {
    const { data: shipments, error } = await supabase
      .from('Shipments')
      .select('*');

    if (error) {
      return res.status(500).json({ message: '배송 상태를 불러오는 중 오류 발생', error: error.message });
    }

    return res.status(200).json(shipments);
  }

  // 배송 상태 수정 //관리자
  if (req.method === 'PUT') {
    const { shipment_id, status } = req.body;

    if (!shipment_id || !status) {
      return res.status(400).json({ message: 'shipment_id와 status가 필요합니다.' });
    }

    const { data: updatedShipment, error } = await supabase
      .from('Shipments')
      .update({ status })
      .eq('shipment_id', shipment_id)
      .single();

    if (error || !updatedShipment) {
      return res.status(500).json({ message: '배송 상태 수정 실패', error: error?.message });
    }

    return res.status(200).json(updatedShipment);
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}