import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/lib/use-cart";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AuthContext from "@/components/auth-context"; //

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "마켓컬리 - 내일의 장보기",
  description: "신선한 식품과 생필품을 내일 아침까지 배송해드립니다.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthContext>
            <CartProvider>
              {children}
              <SpeedInsights />
              <Toaster />
            </CartProvider>
          </AuthContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
