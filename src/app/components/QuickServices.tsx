import {
  Map,
  User,
  Building2,
  FileText,
  BarChart3,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Map,
    title: "지도기반\n작품현황",
    description: "전국 공공미술 작품을 지도에서 탐색하세요",
    color: "#0F172A",
    href: "#",
    tag: "서비스 포털",
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: User,
    title: "작가\n포트폴리오",
    description: "등록 작가의 작품과 이력을 확인하세요",
    color: "#0F172A",
    href: "#",
    tag: "서비스 포털",
    image: "https://images.unsplash.com/photo-1761420723713-9b894acdb987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Building2,
    title: "건축물\n작품관리",
    description: "건축물별 미술작품 등록 및 관리",
    color: "#0F172A",
    href: "#",
    tag: "작품관리",
    image: "https://images.unsplash.com/photo-1652876256405-3902cc201b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: FileText,
    title: "기금\n출연관리",
    description: "기금 출연 계획 및 확인 서비스",
    color: "#0F172A",
    href: "#",
    tag: "기금관리",
    image: "https://images.unsplash.com/photo-1764407395696-495d7fb7fc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: Wrench,
    title: "보존\n관리",
    description: "공공미술 작품 점검 및 보수 관리",
    color: "#0F172A",
    href: "#",
    tag: "보존관리",
    image: "https://images.unsplash.com/flagged/photo-1555445777-92ed5efc0741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    icon: BarChart3,
    title: "통계\n현황",
    description: "작품, 보수, 기금 통계를 한눈에",
    color: "#0F172A",
    href: "#",
    tag: "통계관리",
    image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export function QuickServices() {
  return (
    <section className="py-14 @lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8 @lg:mb-12">
          <div>
            <div className="text-blue-600 text-sm font-medium mb-2 tracking-wide uppercase">
              Quick Access
            </div>
            <h2 className="text-gray-900" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}>
              주요 서비스
            </h2>
            <p className="text-gray-500 mt-2 text-sm">자주 사용하는 서비스에 빠르게 접근하세요</p>
          </div>
          <a
            href="#"
            className="hidden @sm:flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            전체 서비스 보기 <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Service grid */}
        <div className="grid grid-cols-2 @md:grid-cols-3 gap-3 @lg:gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <a
                key={i}
                href={service.href}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 aspect-square flex flex-col justify-end"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, ${service.color}EE 0%, ${service.color}88 35%, transparent 65%)`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                </div>

                {/* Icon — 컨테이너 640px 이상에서만 표시 */}
                <div className="absolute top-4 left-4 z-10 hidden @sm:block">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Content — bottom */}
                <div className="relative z-10 p-3 @sm:p-5">
                  <div
                    className="text-white mb-1 leading-snug"
                    style={{ fontSize: "0.875rem", fontWeight: 700 }}
                  >
                    {service.title.split("\n").map((line, j) => (
                      <span key={j} className="block">{line}</span>
                    ))}
                  </div>
                  <p className="text-white/75 text-xs leading-relaxed line-clamp-2 mb-2 @sm:mb-3 hidden @sm:block">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-1 text-white/80 text-xs font-medium group-hover:text-white transition-colors">
                    <span>바로가기</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}