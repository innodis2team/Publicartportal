import { useState, useEffect } from "react";
import { ArrowRight, MapPin, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1770566858549-775b245d2885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBhcnQlMjBzY3VscHR1cmUlMjBpbnN0YWxsYXRpb24lMjB1cmJhbnxlbnwxfHx8fDE3NzU2MjY0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "건축물미술작품",
    title: "도시를 채우는\n예술의 가치",
    subtitle: "공공미술이 만드는 아름다운 도시 환경\n건축물미술작품 통합관리시스템",
    cta: "작품 둘러보기",
    location: "전국 공공미술 현황",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1769613758100-a5d12762b1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBtdXJhbCUyMGNvbG9yZnVsJTIwdXJiYW4lMjBhcnR8ZW58MXx8fHwxNzc1NjI2NDA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "작가 포트폴리오",
    title: "예술가들의\n창작 세계",
    subtitle: "등록된 공공미술 작가들의 작품을\n한눈에 만나보세요",
    cta: "작가 탐색하기",
    location: "작가 포트폴리오",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1741957915261-ea85cd756056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNjdWxwdHVyZSUyMHBhcmslMjBvdXRkb29yfGVufDF8fHx8MTc3NTYyNjQwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    badge: "시민참여",
    title: "시민과 함께\n만드는 예술",
    subtitle: "공공미술에 대한 의견을 나누고\n문화 예술 공동체를 이루어가세요",
    cta: "참여하기",
    location: "시민참여 공간",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[480px] @lg:h-[760px] overflow-hidden bg-[#0A1628]">
      {/* Background image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
      </div>

      {/* Decorative elements — 데스크탑만 */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 hidden @lg:block" />
      <div className="absolute top-32 right-32 w-40 h-40 border border-white/10 hidden @lg:block" />
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-blue-500/10 hidden @lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex items-center">
        <div className={`max-w-2xl transition-all duration-700 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1.5 mb-4 @lg:mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-blue-400 animate-pulse" />
            <span className="text-sm">{slide.badge}</span>
          </div>

          {/* Title */}
          <h1
            className="text-white mb-4 @lg:mb-5"
            style={{ fontSize: "clamp(1.6rem, 6vw, 4rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            {slide.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="text-blue-400">{line}</span> : line}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mb-6 @lg:mb-8 leading-relaxed" style={{ fontSize: "0.9375rem" }}>
            {slide.subtitle.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 @lg:gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#1e40af] text-white px-5 @lg:px-6 py-3 @lg:py-3.5 text-sm font-medium transition-all hover:scale-105 shadow-lg shadow-blue-900/40"
            >
              {slide.cta}
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-5 @lg:px-6 py-3 @lg:py-3.5 text-sm font-medium transition-all"
            >
              <MapPin size={16} />
              지도 보기
            </a>
          </div>

          {/* Location tag */}
          <div className="mt-6 @lg:mt-8 flex items-center gap-2 text-gray-400 text-sm">
            <MapPin size={14} className="text-blue-400" />
            <span>{slide.location}</span>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-2 bg-blue-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 text-white/40 text-sm z-10">
        <span className="text-white/80">{String(current + 1).padStart(2, "0")}</span>
        <span> / {String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Play indicator */}
      <div className="absolute top-8 right-6 z-10">
        <button className="w-10 h-10 border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <Play size={14} className="ml-0.5" />
        </button>
      </div>
    </section>
  );
}
