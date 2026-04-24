import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "제도 소개",
    links: [
      { label: "제도 개요", href: "#" },
      { label: "제도 운영", href: "#" },
      { label: "관련법령", href: "#" },
      { label: "미술위원회 소개", href: "#" },
    ],
  },
  {
    title: "미술작품",
    links: [
      { label: "미술작품통합검색", href: "#" },
      { label: "작품유형통계", href: "#" },
      { label: "건축물유형통계", href: "#" },
      { label: "건축물용도별통계", href: "#" },
    ],
  },
  {
    title: "기금출연",
    links: [
      { label: "기금출연 결제이용", href: "#" },
      { label: "기금신청하기", href: "#" },
      { label: "기금출연현황", href: "#" },
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
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-white flex-shrink-0" fill="currentColor">
                <circle cx="5" cy="6" r="4" />
                <circle cx="15" cy="6" r="4" />
                <rect x="1" y="14" width="8" height="8" />
                <polygon points="15,14 20,22 10,22" />
              </svg>
              <div className="leading-tight">
                <div className="text-white font-bold text-sm">공공미술포털</div>
                <div className="text-gray-400 font-semibold text-[10px]">Public Art Portal</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              건축물미술작품 통합관리시스템은 공공미술 작품의 체계적인 관리와 시민들의 문화 향유를 지원합니다.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin size={13} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span>전라남도 나주시 빛가람로 601 (58217) 한국문화예술위원회</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <Phone size={13} className="text-blue-500 flex-shrink-0" />
                <span>고객센터 1899-2480</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs">
                <Mail size={13} className="text-blue-500 flex-shrink-0" />
                <span>publicart@arko.or.kr</span>
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
          <div className="flex items-center gap-4 @lg:gap-6 order-1 @sm:order-none">
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">사이트안내</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">저작권안내</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">개인정보처리방침</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors">사이트맵</a>
          </div>
          <p className="text-gray-600 text-xs text-center @sm:text-right">
            copyright 2026 공공미술포털 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
