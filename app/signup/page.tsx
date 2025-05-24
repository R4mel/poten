"use client";

import SignupForm from "@/components/signup-form";
import SiteFooter from "@/components/site-footer";
import TopNav from "@/components/top-nav";
import MainNav from "@/components/main-nav";
import SiteLogo from "@/components/site-logo";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4">
          <TopNav />
          <div className="flex items-center py-4">
            <SiteLogo />
            <nav className="hidden md:flex flex-1 items-center">
              <MainNav />
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 max-w-md">
        <h1 className="text-2xl font-bold mb-8">회원가입</h1>
        <SignupForm />
      </main>
      <SiteFooter />
    </div>
  );
}
