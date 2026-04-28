import { ChevronDown } from "lucide-react";

const footerLinks = [
  {
    title: "제도소개",
    links: [
      { label: "제도 개요", href: "#" },
      { label: "제도 운영", href: "#" },
      { label: "관련법령", href: "#" },
      { label: "자료법규", href: "#" },
      { label: "미술작품FAQ", href: "#" },
      { label: "예술위원회소개", href: "#" },
    ],
  },
  {
    title: "미술작품검색",
    links: [
      { label: "미술작품통합검색", href: "#" },
      { label: "아트맵", href: "#" },
    ],
  },
  {
    title: "미술작품통계",
    links: [
      { label: "자료분류별통계", href: "#" },
      { label: "작품가격별통계", href: "#" },
      { label: "건축물별도별통계", href: "#" },
      { label: "건축물인허가별통계", href: "#" },
      { label: "건축물연도별통계", href: "#" },
    ],
  },
  {
    title: "기금출연/수납",
    links: [
      { label: "기금출연 금액산출", href: "#" },
      { label: "기금신청하기", href: "#" },
      { label: "기금출연확인", href: "#" },
    ],
  },
  {
    title: "자료실",
    links: [
      { label: "자료실", href: "#" },
    ],
  },
];

function ArkoLogo() {
  return (
    <div className="flex items-center gap-2.5 flex-shrink-0">
      <svg viewBox="0 0 80 40" className="w-14 h-7" fill="currentColor">
        <ellipse cx="10" cy="26" rx="6" ry="5" className="text-white" fill="currentColor" />
        <ellipse cx="24" cy="24" rx="9" ry="7" className="text-white" fill="currentColor" />
        <ellipse cx="40" cy="20" rx="10" ry="9" className="text-white" fill="currentColor" />
        <ellipse cx="56" cy="22" rx="8" ry="6" className="text-white" fill="currentColor" />
        <circle cx="50" cy="8" r="4" className="text-white" fill="currentColor" />
      </svg>
      <span className="text-white text-sm font-bold whitespace-nowrap">한국문화예술위원회</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-400">
      {/* Main footer links */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 @lg:py-14">
        <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-5 gap-8 @lg:gap-10">
          {footerLinks.map((col, i) => (
            <div key={i}>
              <h4 className="text-white text-sm font-bold mb-4 @lg:mb-5">{col.title}</h4>
              <ul className="space-y-2 @lg:space-y-2.5">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white text-xs @lg:text-sm transition-colors"
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

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col @lg:flex-row items-start @lg:items-center gap-6 @lg:gap-8">
          <ArkoLogo />

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors">사이트안내</a>
            <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors">저작권 안내</a>
            <a href="#" className="text-gray-300 hover:text-white text-xs font-semibold transition-colors">개인정보처리방침</a>
            <a href="#" className="text-gray-300 hover:text-white text-xs transition-colors">사이트맵</a>
          </div>

          <div className="@lg:ml-auto text-xs text-gray-400 leading-relaxed">
            <div>전라남도 나주시 빛가람로 601 (58217) 한국문화예술위원회</div>
            <div>고객센터 1899-2480 · publicart@arko.or.kr</div>
            <div className="text-gray-500">copyright 2026 공공미술포털 All rights reserved.</div>
          </div>

          <button className="flex items-center justify-between gap-2 border border-white/20 bg-transparent text-gray-300 hover:text-white text-xs px-4 py-2 min-w-[140px] transition-colors">
            <span>연관사이트</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
