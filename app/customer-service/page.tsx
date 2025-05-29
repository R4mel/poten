"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";

export default function CustomerServicePage() {
  const { data: session } = useSession();
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({ title: "", content: "" });

  // Fix: safely get user role from session
  const userRole = (session?.user && (session.user as any).role) || undefined;

  // Get current user name for author check
  const userName = session?.user?.name || "";

  useEffect(() => {
    fetch("/api/customer-service")
      .then((res) => res.json())
      .then((data) => {
        setNotices(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.title || !form.content) {
      setError("제목과 내용을 입력하세요.");
      return;
    }
    const res = await fetch("/api/customer-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: form.title,
        content: form.content,
        author: session?.user?.name || "익명",
      }),
    });
    if (res.ok) {
      setForm({ title: "", content: "" });
      setShowForm(false);
      setSuccess("등록되었습니다.");
      // Refresh list
      const data = await res.json();
      setNotices((prev) => [data, ...prev]);
    } else {
      const data = await res.json();
      setError(data.error || "등록 실패");
    }
  };

  // Edit handler
  const handleEdit = (notice: any) => {
    setEditingId(notice.id);
    setEditForm({ title: notice.title, content: notice.content });
    setError("");
    setSuccess("");
  };
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.title || !editForm.content) {
      setError("제목과 내용을 입력하세요.");
      return;
    }
    const res = await fetch("/api/customer-service", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: editingId,
        title: editForm.title,
        content: editForm.content,
      }),
    });
    if (res.ok) {
      const updated = await res.json();
      setNotices((prev) => prev.map((n) => (n.id === editingId ? updated : n)));
      setEditingId(null);
      setEditForm({ title: "", content: "" });
      setSuccess("수정되었습니다.");
    } else {
      const data = await res.json();
      setError(data.error || "수정 실패");
    }
  };
  const handleDelete = async (id: number) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const res = await fetch("/api/customer-service", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setNotices((prev) => prev.filter((n) => n.id !== id));
    } else {
      const data = await res.json();
      setError(data.error || "삭제 실패");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl">고객센터 공지사항</CardTitle>
          <Button size="sm" onClick={() => setShowForm((v) => !v)}>
            {showForm ? "취소" : "+ 새 공지 등록"}
          </Button>
        </CardHeader>
        <CardContent>
          {showForm && (
            <form onSubmit={handleSubmit} className="mb-6 space-y-2">
              <Input
                placeholder="제목"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                required
              />
              <Textarea
                placeholder="내용"
                value={form.content}
                onChange={(e) =>
                  setForm((f) => ({ ...f, content: e.target.value }))
                }
                rows={5}
                required
              />
              <Button type="submit">등록</Button>
              {error && (
                <div className="text-red-600 text-sm mt-2">{error}</div>
              )}
              {success && (
                <div className="text-green-600 text-sm mt-2">{success}</div>
              )}
            </form>
          )}
          {loading ? (
            <div className="py-8 text-center text-gray-500">로딩 중...</div>
          ) : notices.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              등록된 공지사항이 없습니다.
            </div>
          ) : (
            <ul className="divide-y">
              {notices.map((notice) => (
                <li key={notice.id} className="py-4">
                  {editingId === notice.id ? (
                    <form
                      onSubmit={handleEditSubmit}
                      className="mb-2 space-y-2"
                    >
                      <Input
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm((f) => ({ ...f, title: e.target.value }))
                        }
                        required
                      />
                      <Textarea
                        value={editForm.content}
                        onChange={(e) =>
                          setEditForm((f) => ({
                            ...f,
                            content: e.target.value,
                          }))
                        }
                        rows={4}
                        required
                      />
                      <div className="flex gap-2 mt-2">
                        <Button type="submit" size="sm">
                          저장
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={() => setEditingId(null)}
                        >
                          취소
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div className="font-bold text-lg">{notice.title}</div>
                      <div className="text-gray-700 whitespace-pre-line mt-1">
                        {notice.content}
                      </div>
                      <div className="text-xs text-gray-400 mt-2 flex gap-2">
                        <span>작성자: {notice.author}</span>
                        <span>•</span>
                        <span>
                          {new Date(notice.created_at).toLocaleString()}
                        </span>
                        <span>•</span>
                        {notice.author === userName && (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEdit(notice)}
                            >
                              수정
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(notice.id)}
                            >
                              삭제
                            </Button>
                          </>
                        )}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
