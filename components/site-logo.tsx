import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className="mr-8">
      <h1 className="text-2xl font-bold text-purple-800">마켓컬리</h1>
    </Link>
  );
}
