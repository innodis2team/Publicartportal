import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "등록 작품 수", value: 25685, suffix: "점", color: "#3B82F6" },
  { label: "참여 작가 수", value: 12480, suffix: "명", color: "#8B5CF6" },
  { label: "관리 건축물", value: 29361, suffix: "동", color: "#10B981" },
  { label: "기금 출연액", value: 4827, suffix: "억원", color: "#F59E0B" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="bg-[#0F172A] py-10 @lg:py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 @lg:grid-cols-4 gap-px bg-white/5 overflow-hidden">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#0F172A] px-4 py-5 @sm:px-6 @sm:py-7 @lg:px-8 @lg:py-8 flex flex-col gap-1.5 hover:bg-[#1a2540] transition-colors group"
            >
              <div
                className="w-6 h-0.5 mb-1.5 transition-all group-hover:w-12"
                style={{ backgroundColor: stat.color }}
              />
              <div
                className="text-lg @sm:text-2xl @lg:text-3xl font-bold text-white leading-tight"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-xs @sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
