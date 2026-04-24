import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, Search, Bell, User, UserPlus } from "lucide-react";

const menuData = [
  {
    id: "intro",
    label: "제도 소개",
    color: "#3B82F6",
    items: [
      { label: "제도 개요", href: "#" },
      { label: "제도 운영", href: "#" },
      { label: "관련법령", href: "#" },
      { label: "자치법규", href: "#" },
      { label: "미술위원회 FAQ", href: "#" },
      { label: "미술위원회 소개", href: "#" },
    ],
  },
  {
    id: "search",
    label: "미술작품검색",
    color: "#8B5CF6",
    items: [
      { label: "미술작품통합검색", href: "#" },
      { label: "지도기반 작품현황", href: "#" },
    ],
  },
  {
    id: "stats",
    label: "미술작품통계",
    color: "#EC4899",
    items: [
      { label: "작품유형통계", href: "#" },
      { label: "작품지역별통계", href: "#" },
      { label: "건축물유형통계", href: "#" },
      { label: "건축물연면적통계", href: "#" },
      { label: "건축물용도별통계", href: "#" },
    ],
  },
  {
    id: "board",
    label: "자료실",
    color: "#10B981",
    items: [
      { label: "공지사항", href: "#" },
      { label: "자료실", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    id: "fund",
    label: "건축물미술작품 기금출연",
    color: "#F59E0B",
    items: [
      { label: "기금출연 결제이용", href: "#" },
      { label: "기금신청하기", href: "#" },
      { label: "기금출연현황", href: "#" },
    ],
  },
];

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      {/* Top utility bar — 컨테이너 640px 이상일 때만 표시 */}
      <div className="hidden sm:block bg-[#0F172A] text-gray-400 text-xs py-2">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <span>건축물미술작품 통합관리시스템</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <Bell size={12} /> 공지사항
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <User size={12} /> 마이페이지
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              <UserPlus size={12} /> 회원가입
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mr-4 @lg:mr-10 flex-shrink-0 min-w-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8 @sm:w-9 @sm:h-9 flex-shrink-0 text-[#0F172A]" fill="currentColor">
                <circle cx="5" cy="6" r="4" />
                <circle cx="15" cy="6" r="4" />
                <rect x="1" y="14" width="8" height="8" />
                <polygon points="15,14 20,22 10,22" />
              </svg>
              <div className="min-w-0 leading-tight">
                <div className="text-[#0F172A] font-bold text-sm @sm:text-base tracking-tight whitespace-nowrap">공공미술포털</div>
                <div className="text-[#0F172A] font-semibold text-[10px] @sm:text-xs tracking-tight whitespace-nowrap hidden @sm:block">Public Art Portal</div>
              </div>
            </a>

            {/* Desktop Navigation — 컨테이너 1024px 이상 */}
            <nav className="hidden @lg:flex items-center flex-1" onMouseLeave={handleMenuLeave}>
              {menuData.map((menu) => (
                <div
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(menu.id)}
                >
                  <button
                    className={`flex items-center gap-1 px-3.5 py-5 text-sm font-medium transition-colors whitespace-nowrap ${
                      activeMenu === menu.id
                        ? "text-[#1E3A8A]"
                        : "text-gray-600 hover:text-[#1E3A8A]"
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeMenu === menu.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === menu.id && (
                    <div className="absolute top-full left-0 min-w-[180px] bg-white shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div
                        className="h-0.5 mx-3 mb-2"
                        style={{ backgroundColor: menu.color }}
                      />
                      {menu.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-1 @sm:gap-2 ml-auto flex-shrink-0">
              {/* 통합검색 — 데스크탑 텍스트, 모바일 아이콘 */}
              <button className="hidden @lg:flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-[#1E3A8A] transition-colors hover:bg-gray-100">
                <Search size={16} />
                <span>통합검색</span>
              </button>
              <button className="@lg:hidden p-2 text-gray-600 hover:text-[#1E3A8A] hover:bg-gray-100 transition-colors">
                <Search size={18} />
              </button>
              {/* 로그인 — 데스크탑 텍스트, 모바일 아이콘 */}
              <button className="hidden @lg:block bg-[#1E3A8A] text-white text-sm px-4 py-2 hover:bg-[#1e40af] transition-colors">
                로그인
              </button>
              <button className="@lg:hidden p-2 text-gray-600 hover:text-[#1E3A8A] hover:bg-gray-100 transition-colors">
                <User size={18} />
              </button>
              {/* 모바일 햄버거 — 컨테이너 1024px 미만 */}
              <button
                className="@lg:hidden p-2 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {activeMenu && (
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: menuData.find((m) => m.id === activeMenu)?.color,
            }}
          />
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="@lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-lg">
            {menuData.map((menu) => (
              <div key={menu.id} className="border-b border-gray-50">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-gray-800"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === menu.id ? null : menu.id)
                  }
                >
                  <span className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: menu.color }}
                    />
                    {menu.label}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform flex-shrink-0 ${
                      mobileExpanded === menu.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === menu.id && (
                  <div className="bg-gray-50 pb-2">
                    {menu.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-10 py-2.5 text-sm text-gray-600 hover:text-[#1E3A8A]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* 모바일 하단 — 통합검색 & 로그인 */}
            <div className="px-6 py-4 flex gap-3 bg-gray-50 border-t border-gray-100">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2.5 text-sm text-gray-700 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors">
                <Search size={15} />
                통합검색
              </button>
              <button className="flex-1 bg-[#1E3A8A] text-white text-sm py-2.5 hover:bg-[#1e40af] transition-colors flex items-center justify-center gap-2">
                <User size={15} />
                로그인
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}