import { ArrowRight, MapPin, Eye, Heart } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "빛의 정원",
    artist: "김민준",
    location: "서울특별시 강남구",
    building: "GFC 타워",
    year: 2023,
    type: "조각",
    image: "https://images.unsplash.com/photo-1741957915261-ea85cd756056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    views: 4821,
    likes: 312,
    featured: true,
  },
  {
    id: 2,
    title: "도시의 기억",
    artist: "이수연",
    location: "부산광역시 해운대구",
    building: "엘시티 더샵",
    year: 2023,
    type: "벽화",
    image: "https://images.unsplash.com/photo-1769613758100-a5d12762b1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    views: 3240,
    likes: 218,
    featured: false,
  },
  {
    id: 3,
    title: "자연과 공존",
    artist: "박지훈",
    location: "인천광역시 연수구",
    building: "송도 트리플스트리트",
    year: 2022,
    type: "설치미술",
    image: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    views: 2890,
    likes: 195,
    featured: false,
  },
  {
    id: 4,
    title: "미래를 향하여",
    artist: "최예린",
    location: "대전광역시 유성구",
    building: "대전 아이파크시티",
    year: 2024,
    type: "조형물",
    image: "https://images.unsplash.com/photo-1770566858549-775b245d2885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    views: 5123,
    likes: 421,
    featured: false,
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  조각: { bg: "#EFF6FF", text: "#3B82F6" },
  벽화: { bg: "#FDF2F8", text: "#EC4899" },
  설치미술: { bg: "#F5F3FF", text: "#8B5CF6" },
  조형물: { bg: "#FFFBEB", text: "#F59E0B" },
};

export function FeaturedArtworks() {
  const featured = artworks[0];
  const rest = artworks.slice(1);

  return (
    <section className="py-14 @lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 @lg:mb-12">
          <div>
            <div className="text-blue-600 text-sm font-medium mb-2 tracking-wide uppercase">
              Featured Works
            </div>
            <h2 className="text-gray-900" style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}>
              주목할 작품
            </h2>
            <p className="text-gray-500 mt-2 text-sm">이달의 주요 공공미술 작품을 소개합니다</p>
          </div>
          <a
            href="#"
            className="hidden @sm:flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            전체 작품 보기 <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 @lg:grid-cols-3 gap-6">
          {/* Featured large card */}
          <div className="@lg:col-span-2 group relative overflow-hidden bg-gray-900 aspect-[4/3] @lg:aspect-auto @lg:min-h-[520px] cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-5 left-5">
              <span className="bg-blue-500 text-white text-xs px-3 py-1.5 font-medium">
                이달의 작품
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 @lg:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2.5 py-1"
                      style={{
                        backgroundColor: typeColors[featured.type]?.bg + "33",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      {featured.type}
                    </span>
                    <span className="text-gray-300 text-xs">{featured.year}</span>
                  </div>
                  <h3 className="text-white text-xl @lg:text-2xl mb-1" style={{ fontWeight: 700 }}>
                    {featured.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{featured.artist}</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <MapPin size={12} />
                    <span className="truncate">{featured.location} · {featured.building}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <div className="flex items-center gap-3 text-gray-300 text-xs">
                    <span className="flex items-center gap-1"><Eye size={12} /> {featured.views.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Heart size={12} /> {featured.likes}</span>
                  </div>
                  <button className="bg-white text-gray-900 text-xs px-4 py-2 font-medium hover:bg-blue-50 transition-colors whitespace-nowrap">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - smaller cards */}
          <div className="flex flex-col gap-4">
            {rest.map((artwork) => {
              const tc = typeColors[artwork.type] || { bg: "#F3F4F6", text: "#6B7280" };
              return (
                <div
                  key={artwork.id}
                  className="group flex gap-4 bg-white p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-36 h-36 overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-[10px] px-2 py-0.5"
                        style={{ backgroundColor: tc.bg, color: tc.text }}
                      >
                        {artwork.type}
                      </span>
                      <span className="text-gray-400 text-[10px]">{artwork.year}</span>
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1 truncate">
                      {artwork.title}
                    </h4>
                    <p className="text-gray-500 text-xs mb-2">{artwork.artist}</p>
                    <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                      <MapPin size={10} />
                      <span className="truncate">{artwork.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-[10px] mt-1.5">
                      <span className="flex items-center gap-1"><Eye size={10} /> {artwork.views.toLocaleString()}</span>
                      <span className="flex items-center gap-1"><Heart size={10} /> {artwork.likes}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}