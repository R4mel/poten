// lib/api.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  options: string[];
}

export async function getProductById(id: string): Promise<Product> {
  // 실제 API가 준비돼 있으면 URL만 바꿔주세요
  const res = await fetch("http://localhost:3000/${id}");
  if (!res.ok) throw new Error("Product fetch failed");
  return res.json();
}

// mock 예시
// import products from './mockProducts';
// export function getProductById(id: string) {
//   return Promise.resolve(products.find(p => p.id === +id)!);
// }
