import { ArrowRight, Award } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "김민준",
    specialty: "조각 · 설치미술",
    works: 24,
    awards: 8,
    image: "https://images.unsplash.com/photo-1609486397744-6b292145e71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    featured: "빛의 정원",
    tag: "이달의 작가",
    tagColor: "#F59E0B",
  },
  {
    id: 2,
    name: "이수연",
    specialty: "벽화 · 공공미술",
    works: 31,
    awards: 12,
    image: "https://images.unsplash.com/photo-1766524555230-3071d08571f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    featured: "도시의 기억",
    tag: "주목 작가",
    tagColor: "#3B82F6",
  },
  {
    id: 3,
    name: "박지훈",
    specialty: "조형물 · 환경미술",
    works: 18,
    awards: 5,
    image: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    featured: "자연과 공존",
    tag: "신진 작가",
    tagColor: "#10B981",
  },
];

export function ArtistSection() {
  return (
    <section className="py-14 @lg:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 @lg:mb-12">
          <div>
            <div className="text-blue-600 text-sm font-medium mb-2 tracking-wide uppercase">
              Artist Spotlight
            </div>
            <h2 className="text-gray-900" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}>
              작가 포트폴리오
            </h2>
            <p className="text-gray-500 mt-2 text-sm">공공미술을 이끄는 작가들을 만나보세요</p>
          </div>
          <a
            href="#"
            className="hidden @sm:flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            전체 작가 보기 <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 @md:grid-cols-3 gap-5 @lg:gap-6">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group relative overflow-hidden cursor-pointer aspect-square"
            >
              <div className="absolute inset-0 bg-gray-900">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-90"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-5 left-5">
                <span
                  className="text-white text-xs px-3 py-1.5 font-medium"
                  style={{ backgroundColor: artist.tagColor }}
                >
                  {artist.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 @lg:p-6">
                <h3 className="text-white mb-1" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {artist.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{artist.specialty}</p>

                <div className="flex items-center gap-4 mb-3 text-sm">
                  <div className="text-white">
                    <span className="font-bold">{artist.works}</span>
                    <span className="text-gray-400 ml-1 text-xs">작품</span>
                  </div>
                  <div className="text-white flex items-center gap-1">
                    <Award size={14} className="text-yellow-400" />
                    <span className="font-bold">{artist.awards}</span>
                    <span className="text-gray-400 ml-1 text-xs">수상</span>
                  </div>
                </div>

                <div className="text-gray-400 text-xs mb-4 flex items-center gap-1.5">
                  <span className="text-gray-500">대표작</span>
                  <span className="text-gray-300">"{artist.featured}"</span>
                </div>

                <button className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white text-sm py-2.5 transition-all font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                  포트폴리오 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}