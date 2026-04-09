import { MapPin, Search, Filter, ArrowRight } from "lucide-react";

const regions = [
  { name: "서울", count: 12840, color: "#3B82F6" },
  { name: "경기", count: 8920, color: "#8B5CF6" },
  { name: "부산", count: 4210, color: "#EC4899" },
  { name: "인천", count: 3180, color: "#10B981" },
  { name: "대구", count: 2640, color: "#F59E0B" },
  { name: "광주", count: 1950, color: "#06B6D4" },
  { name: "대전", count: 2120, color: "#F97316" },
  { name: "기타", count: 2882, color: "#6B7280" },
];

const total = regions.reduce((sum, r) => sum + r.count, 0);

export function MapSection() {
  return (
    <section className="py-14 @lg:py-20 bg-[#0F172A] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-white" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 @lg:grid-cols-2 gap-10 @lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="text-blue-400 text-sm font-medium mb-3 tracking-wide uppercase">
              지도 기반 서비스
            </div>
            <h2
              className="text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 700 }}
            >
              전국 공공미술<br />
              <span className="text-blue-400">작품 현황</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 @lg:mb-8 text-sm">
              지도 기반 인터페이스로 전국 공공미술 작품의 위치와 정보를 한눈에 확인하세요.
              지역별, 유형별 필터로 원하는 작품을 쉽게 찾을 수 있습니다.
            </p>

            {/* Search bar */}
            <div className="flex gap-3 mb-6 @lg:mb-8">
              <div className="flex-1 flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-3 backdrop-blur-sm">
                <Search size={16} className="text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="작품명, 작가명, 주소 검색..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 text-sm outline-none min-w-0"
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 @lg:px-5 py-3 text-sm font-medium flex items-center gap-2 transition-colors flex-shrink-0">
                <Filter size={14} />
                검색
              </button>
            </div>

            {/* Region distribution */}
            <div className="space-y-3">
              {regions.map((region, i) => {
                const pct = Math.round((region.count / total) * 100);
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 @sm:w-10 text-gray-400 text-xs text-right flex-shrink-0">{region.name}</div>
                    <div className="flex-1 h-2 bg-white/10 overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000"
                        style={{ width: `${pct}%`, backgroundColor: region.color }}
                      />
                    </div>
                    <div className="w-16 @sm:w-20 text-right flex-shrink-0">
                      <span className="text-white text-xs @sm:text-sm font-medium">{region.count.toLocaleString()}</span>
                      <span className="text-gray-500 text-xs ml-1">점</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 @lg:mt-8 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              지도에서 전체 보기 <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: Map visualization */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-square max-w-[480px] mx-auto shadow-2xl">
              {/* 배경 이미지 */}
              <img
                src="https://images.unsplash.com/photo-1504107435030-c7cd582601b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEtvcmVhJTIwYWVyaWFsJTIwc2F0ZWxsaXRlJTIwY2l0eSUyMG1hcCUyMHZpZXd8ZW58MXx8fHwxNzc1NzQ0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="지도 배경"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* 어두운 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2540]/85 to-[#0d1929]/80" />

              {/* Grid lines */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${(i + 1) * 12.5}%` }} />
                ))}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${(i + 1) * 12.5}%` }} />
                ))}
              </div>

              {/* Map dots */}
              {[
                { x: 55, y: 38, size: 40, region: "서울", color: "#3B82F6", count: "12,840" },
                { x: 58, y: 44, size: 28, region: "경기", color: "#8B5CF6", count: "8,920" },
                { x: 65, y: 72, size: 20, region: "부산", color: "#EC4899", count: "4,210" },
                { x: 47, y: 42, size: 18, region: "인천", color: "#10B981", count: "3,180" },
                { x: 60, y: 60, size: 16, region: "대구", color: "#F59E0B", count: "2,640" },
                { x: 42, y: 70, size: 14, region: "광주", color: "#06B6D4", count: "1,950" },
                { x: 50, y: 56, size: 15, region: "대전", color: "#F97316", count: "2,120" },
              ].map((dot, i) => (
                <div
                  key={i}
                  className="absolute group cursor-pointer"
                  style={{ left: `${dot.x}%`, top: `${dot.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className="absolute rounded-full animate-ping opacity-25"
                    style={{
                      width: dot.size + 8, height: dot.size + 8,
                      backgroundColor: dot.color, left: -4, top: -4,
                      animationDelay: `${i * 0.3}s`, animationDuration: "2s",
                    }}
                  />
                  <div
                    className="relative rounded-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-125"
                    style={{
                      width: dot.size, height: dot.size,
                      backgroundColor: dot.color + "40",
                      border: `2px solid ${dot.color}`,
                    }}
                  >
                    <div className="rounded-full" style={{ width: dot.size * 0.4, height: dot.size * 0.4, backgroundColor: dot.color }} />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-white px-3 py-2 shadow-xl text-xs whitespace-nowrap">
                      <div className="font-semibold text-gray-900">{dot.region}</div>
                      <div className="text-gray-500">{dot.count}점</div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <MapPin size={200} className="text-white" />
              </div>

              {/* Legend */}
              <div className="absolute bottom-5 left-5 bg-black/40 backdrop-blur-sm p-3">
                <div className="text-white text-xs font-medium mb-2">지역별 작품 수</div>
                <div className="space-y-1.5">
                  {regions.slice(0, 4).map((r, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2" style={{ backgroundColor: r.color }} />
                      <span className="text-gray-300 text-[10px]">{r.name}</span>
                      <span className="text-white text-[10px] ml-auto">{r.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}