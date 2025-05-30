"use client";
import { useEffect, useState, useRef } from "react";

export default function CategoryDropdown({
  onCategorySelect,
}: {
  onCategorySelect?: (categoryId: number, categoryName: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-gray-900 hover:text-purple-800 focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="mr-1">카테고리</span>
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {loading ? (
            <div className="p-4 text-gray-500 text-center">로딩 중...</div>
          ) : (
            <ul>
              {categories.map((cat) => (
                <li
                  key={cat.category_id}
                  className="px-4 py-2 hover:bg-purple-50 active:bg-purple-100 cursor-pointer text-gray-900 select-none"
                  onClick={() => {
                    if (onCategorySelect)
                      onCategorySelect(cat.category_id, cat.name);
                    setOpen(false);
                  }}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
