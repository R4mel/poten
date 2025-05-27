export default function Loading() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* 페이지 헤더 자리 */}
        <div className="h-16 bg-gray-100 animate-pulse" />
  
        {/* 배너 자리 */}
        <div className="h-48 md:h-60 bg-gray-200 animate-pulse w-full mb-8" />
  
        {/* 카테고리 탭 자리 */}
        <div className="flex justify-center space-x-4 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-24 h-6 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
  
        {/* 필터 + 상품 카드 자리 */}
        <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8">
          {/* 사이드 필터 자리 */}
          <div className="w-full md:w-64 space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-4 bg-gray-100 rounded animate-pulse w-3/4" />
              ))}
            </div>
          </div>
  
          {/* 상품 카드 자리 */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-sm overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-3 space-y-2">
                  <div className="h-4 bg-gray-200 w-3/4 rounded" />
                  <div className="h-4 bg-gray-100 w-1/2 rounded" />
                  <div className="h-4 bg-gray-300 w-1/3 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* 푸터 자리 */}
        <div className="mt-12 h-20 bg-gray-100 animate-pulse" />
      </div>
    );
  }