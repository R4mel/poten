"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams ? searchParams.get("orderId") : null;
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setError("주문 번호가 없습니다.");
      setLoading(false);
      return;
    }
    // Fetch order detail from API
    fetch(`/api/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setOrder(data);
        setLoading(false);
      })
      .catch(() => {
        setError("주문 정보를 불러올 수 없습니다.");
        setLoading(false);
      });
  }, [orderId]);

  if (loading) return <div className="p-8 text-center">로딩 중...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!order) return null;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold mb-4">주문 완료</h1>
      <div className="mb-2">
        주문번호: <b>{order.order_id}</b>
      </div>
      <div className="mb-2">
        주문일시: {new Date(order.created_at).toLocaleString()}
      </div>
      <div className="mb-2">주문상태: {order.status}</div>
      <div className="mb-2">총 결제금액: {order.total_price}원</div>
      <div className="mb-4">결제수단: {order.payment_method || "N/A"}</div>
      <h2 className="text-lg font-semibold mb-2">주문 상품</h2>
      <ul className="mb-4">
        {order.items && order.items.length > 0 ? (
          order.items.map((item: any) => (
            <li
              key={item.product_id}
              className="flex justify-between border-b py-2"
            >
              <span>{item.product_name}</span>
              <span>{item.quantity}개</span>
              <span>{item.price}원</span>
            </li>
          ))
        ) : (
          <li>상품 정보 없음</li>
        )}
      </ul>
      <a
        href="/mypage"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        마이페이지로 이동
      </a>
    </div>
  );
}
