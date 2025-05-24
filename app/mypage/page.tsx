"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function MyPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className="py-16 text-center">Loading...</div>;
  }

  if (!session) {
    router.replace("/login");
    return null;
  }

  const user = session.user;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="flex flex-col items-center gap-2">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={user?.image || undefined}
              alt={user?.name || "User"}
            />
            <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-xl mt-2">
            {user?.name || "사용자"}
          </CardTitle>
          <div className="text-gray-500 text-sm">{user?.email}</div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <div className="font-semibold">이메일</div>
            <div className="text-gray-700">{user?.email}</div>
          </div>
          {/* Add more user info fields here if needed */}
        </CardContent>
      </Card>
    </div>
  );
}
