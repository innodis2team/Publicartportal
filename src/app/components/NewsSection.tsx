import { ArrowRight, Clock, ChevronRight, FileText, Paperclip } from "lucide-react";

const notices = [
  { id: 1, category: "공지", title: "2024년 건축물 미술작품 심의위원회 구성 안내", date: "2026-04-05", isNew: true, important: true },
  { id: 2, category: "공지", title: "공공미술작품 보존관리 지침 개정 안내", date: "2026-04-02", isNew: true, important: false },
  { id: 3, category: "공지", title: "기금출연 확인 시스템 점검 일정 공지 (4월)", date: "2026-03-28", isNew: false, important: false },
  { id: 4, category: "공지", title: "작품 철거 신청 절차 변경 사항 안내", date: "2026-03-20", isNew: false, important: false },
  { id: 5, category: "공지", title: "2026년 공공미술 기금 출연 계획 공고", date: "2026-03-10", isNew: false, important: true },
];

const resources = [
  { id: 1, title: "건축물 미술작품 심의 가이드라인 2026", type: "PDF", size: "2.4MB", date: "2026-04-01", downloads: 1847 },
  { id: 2, title: "공공미술 기금 출연 매뉴얼", type: "HWP", size: "1.8MB", date: "2026-03-25", downloads: 1203 },
  { id: 3, title: "작품 보존관리 체크리스트 양식", type: "XLSX", size: "0.5MB", date: "2026-03-15", downloads: 892 },
  { id: 4, title: "철거작품 처리 절차 안내서", type: "PDF", size: "1.2MB", date: "2026-03-08", downloads: 634 },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  PDF: { bg: "#FEE2E2", text: "#DC2626" },
  HWP: { bg: "#DBEAFE", text: "#2563EB" },
  XLSX: { bg: "#D1FAE5", text: "#059669" },
  DOC: { bg: "#E0E7FF", text: "#4F46E5" },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

export function NewsSection() {
  return (
    <section className="py-14 @lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-8 @lg:mb-12">
          <div className="text-blue-600 text-sm font-medium mb-2 tracking-wide uppercase">
            Information
          </div>
          <h2 className="text-gray-900" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}>
            공지사항 & 자료실
          </h2>
        </div>

        <div className="grid grid-cols-1 @lg:grid-cols-2 gap-8">
          {/* Notices */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                <span className="w-5 h-5 bg-[#1E3A8A] flex items-center justify-center">
                  <span className="text-white text-[9px]">공</span>
                </span>
                공지사항
              </h3>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-600 flex items-center gap-1 transition-colors">
                더보기 <ChevronRight size={14} />
              </a>
            </div>

            <div className="space-y-1">
              {notices.map((notice) => (
                <a
                  key={notice.id}
                  href="#"
                  className="group flex items-start gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {notice.important ? (
                      <span className="inline-block bg-red-100 text-red-600 text-[10px] px-2 py-0.5 font-medium">중요</span>
                    ) : (
                      <span className="inline-block bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5">공지</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {notice.title}
                      </span>
                      {notice.isNew && (
                        <span className="flex-shrink-0 bg-blue-500 text-white text-[9px] px-1.5 py-0.5">NEW</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
                      <Clock size={10} />
                      {formatDate(notice.date)}
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors mt-0.5 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-gray-900 font-semibold flex items-center gap-2">
                <span className="w-5 h-5 bg-[#7C3AED] flex items-center justify-center">
                  <FileText size={10} className="text-white" />
                </span>
                자료실
              </h3>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-600 flex items-center gap-1 transition-colors">
                더보기 <ChevronRight size={14} />
              </a>
            </div>

            <div className="space-y-3">
              {resources.map((resource) => {
                const tc = typeColors[resource.type] || { bg: "#F3F4F6", text: "#6B7280" };
                return (
                  <a
                    key={resource.id}
                    href="#"
                    className="group flex items-center gap-4 px-4 py-4 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: tc.bg }}
                    >
                      <Paperclip size={16} style={{ color: tc.text }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                        {resource.title}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="px-1.5 py-0.5 text-[10px] font-medium" style={{ backgroundColor: tc.bg, color: tc.text }}>
                          {resource.type}
                        </span>
                        <span>{resource.size}</span>
                        <span className="hidden @sm:inline">{formatDate(resource.date)}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 flex-shrink-0">
                      <span className="text-gray-300 mr-1">↓</span>
                      {resource.downloads.toLocaleString()}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-10 @lg:mt-12 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] p-6 @lg:p-8 flex flex-col @md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute right-0 top-0 bottom-0 opacity-10">
            <svg viewBox="0 0 400 200" className="h-full" fill="none">
              <circle cx="350" cy="100" r="150" stroke="white" strokeWidth="60" />
              <circle cx="200" cy="50" r="100" stroke="white" strokeWidth="40" />
            </svg>
          </div>
          <div className="relative z-10 text-center @md:text-left">
            <h3 className="text-white mb-2" style={{ fontSize: "1.125rem", fontWeight: 700 }}>
              시민참여 공간
            </h3>
            <p className="text-blue-100 text-sm">
              공공미술에 대한 의견을 남기고, 지역 예술 활동에 함께 참여하세요
            </p>
          </div>
          <a
            href="#"
            className="relative z-10 flex-shrink-0 bg-white text-[#1E3A8A] px-6 py-3 text-sm font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            참여하기 <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
