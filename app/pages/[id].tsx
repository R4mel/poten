// pages/goods/[id].tsx
import { GetStaticPaths, GetStaticProps } from "next";
// import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { allProducts } from "../../lib/products";

<div className="flex flex-col lg:flex-row gap-8">
  {/* 왼쪽 */}
  <div className="lg:w-1/2 space-y-4">…</div>
  {/* 오른쪽 */}
  <div className="lg:w-1/2 space-y-4">…</div>
</div>;

// export static paths for Next.js
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: allProducts.map((product) => ({
    params: { id: product.id.toString() },
  })),
  fallback: "blocking",
});

<div className="flex border">
  <div className="w-1/2 bg-red-100">LEFT</div>
  <div className="w-1/2 bg-blue-100">RIGHT</div>
</div>;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = allProducts.find((p) => p.id.toString() === params!.id);
  if (!product) return { notFound: true };
  return { props: { product }, revalidate: 60 };
};

interface GoodsPageProps {
  product: (typeof allProducts)[number];
}

export default function GoodsPage({ product }: GoodsPageProps) {
  console.log("product:", product);
  return (
    <div>
      <ProductDetail product={product} />
      {/* 필요하다면 Tabs 컴포넌트 등 추가 */}
    </div>
  );
}
