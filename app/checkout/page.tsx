"use client";
import { useEffect, useRef, useState } from "react";
import {
  loadPaymentWidget,
  ANONYMOUS,
  type PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { useSession } from "next-auth/react";
import { useCart } from "@/lib/use-cart";
import { Button } from "@/components/ui/button";

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!;

export default function CheckoutPage() {
  const { data: session } = useSession();
  const { items } = useCart();
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<PaymentWidgetInstance | null>(null);
  const [amount, setAmount] = useState({ currency: "KRW", value: 0 });
  const paymentMethodRef = useRef<HTMLDivElement>(null);
  const agreementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAmount({
      currency: "KRW",
      value: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    });
  }, [items]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!clientKey || !paymentMethodRef.current || !agreementRef.current)
        return;
      const instance = await loadPaymentWidget(
        clientKey,
        session?.user?.email || ANONYMOUS
      );
      setWidgets(instance);
      instance.renderPaymentMethods("#payment-method", {
        value: amount.value,
        currency: "KRW",
      });
      instance.renderAgreement("#agreement");
      setReady(true);
    }
    renderPaymentWidgets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientKey, session?.user?.email, amount]);

  const handleRequestPayment = async () => {
    if (!widgets || !session?.user) return;
    try {
      const payload = {
        amount: amount.value,
        currency: amount.currency,
        userId: (session.user as any).id, // user_id from session
        email: session.user.email,
        name: session.user.name,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
      };
      console.log("PAYMENT PAYLOAD", payload);
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("주문 생성에 실패했습니다.");
      const { orderId, orderName } = await res.json();

      // 2. Call Toss widget
      await widgets.requestPayment({
        orderId,
        orderName,
        customerName: session.user.name || "고객",
        customerEmail: session.user.email || "",
        successUrl: window.location.origin + "/checkout/success",
        failUrl: window.location.origin + "/checkout/fail",
      });
    } catch (e: any) {
      alert(e.message || "결제 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="wrapper w-100">
      <div className="max-w-540 w-100">
        <div ref={paymentMethodRef} id="payment-method" className="w-100" />
        <div ref={agreementRef} id="agreement" className="w-100" />
        <div className="btn-wrapper w-100">
          <Button
            className="btn primary w-100"
            onClick={handleRequestPayment}
            disabled={!ready}
          >
            결제하기
          </Button>
        </div>
      </div>
    </div>
  );
}
