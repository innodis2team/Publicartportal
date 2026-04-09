import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { label: "지도기반 작품현황", href: "#" },
      { label: "작가 포트폴리오", href: "#" },
      { label: "시민참여 공간", href: "#" },
    ],
  },
  {
    title: "관리",
    links: [
      { label: "기금관리", href: "#" },
      { label: "작품관리", href: "#" },
      { label: "보존관리", href: "#" },
      { label: "통계관리", href: "#" },
    ],
  },
  {
    title: "정보",
    links: [
      { label: "공지사항", href: "#" },
      { label: "자료실", href: "#" },
      { label: "개인정보처리방침", href: "#" },
      { label: "이용약관", href: "#" },
    ],
  },
];

const relatedSites = [
  { label: "문화체육관광부", href: "#" },
  { label: "한국문화예술위원회", href: "#" },
  { label: "건축도시공간연구소", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-400">
      {/* Related sites bar */}
      <div className="border-b border-white/5 py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">관련 사이트</span>
          {relatedSites.map((site, i) => (
            <a
              key={i}
              href={site.href}
              className="text-gray-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
            >
              {site.label} <ExternalLink size={10} />
            </a>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 @lg:py-14">
        <div className="grid grid-cols-1 @lg:grid-cols-4 gap-8 @lg:gap-12">
          {/* Brand */}
          <div className="@lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#1E3A8A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">공공미술포털</div>
                <div className="text-gray-500 text-[10px]">건축물미술작품통합관리시스템</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              건축물미술작품 통합관리시스템은 공공미술 작품의 체계적인 관리와 시민들의 문화 향유를 지원합니다.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin size={13} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>서울특별시 종로구 율곡로 57, 예술가의집</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <Phone size={13} className="text-blue-500 flex-shrink-0" />
                <span>1588-1234</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <Mail size={13} className="text-blue-500 flex-shrink-0" />
                <span>publicart@example.go.kr</span>
              </div>
            </div>
          </div>

          {/* Links — 모바일에서 3열 그리드 */}
          <div className="@lg:col-span-3 grid grid-cols-3 gap-6 @lg:gap-12">
            {footerLinks.map((col, i) => (
              <div key={i}>
                <h4 className="text-white text-sm font-semibold mb-4 @lg:mb-5">{col.title}</h4>
                <ul className="space-y-2.5 @lg:space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.href}
                        className="text-gray-500 hover:text-gray-200 text-xs @lg:text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col @sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs text-center @sm:text-left">
            © 2026 공공미술포털 (건축물미술작품통합관리시스템). All rights reserved.
          </p>
          <div className="flex items-center gap-4 @lg:gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">개인정보처리방침</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">이용약관</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">접근성 정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
