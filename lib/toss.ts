import axios from "axios";

const TOSS_CLIENT_KEY = process.env.TOSS_CLIENT_KEY;
const TOSS_SECRET_KEY = process.env.TOSS_SECRET_KEY;
const TOSS_API_URL = "https://api.tosspayments.com/v1/payments";

export async function tossTestPayment({
  orderId,
  amount,
  orderName,
  customerEmail,
  customerName,
}: {
  orderId: string;
  amount: number;
  orderName: string;
  customerEmail: string;
  customerName: string;
}) {
  const auth = Buffer.from(`${TOSS_SECRET_KEY}:`).toString("base64");
  const payload = {
    amount,
    orderId,
    orderName,
    customerEmail,
    customerName,
    successUrl: "https://localhost:3000/payment/success",
    failUrl: "https://localhost:3000/payment/fail",
    // Add more fields as needed for test
  };
  const response = await axios.post(TOSS_API_URL, payload, {
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
}
