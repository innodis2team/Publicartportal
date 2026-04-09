import { useState } from "react";
import type { ReactNode } from "react";
import { Monitor, Smartphone } from "lucide-react";

interface PreviewToggleProps {
  children: ReactNode;
}

export function PreviewToggle({ children }: PreviewToggleProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showToggle, setShowToggle] = useState(true);

  return (
    <div className={isMobile ? "bg-gray-200 min-h-screen py-10" : ""}>
      {/* Toggle bar */}
      {showToggle && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 bg-[#0F172A] px-2 py-2"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
        >
          <button
            onClick={() => setIsMobile(false)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-all ${
              !isMobile ? "bg-white text-[#0F172A]" : "text-gray-400 hover:text-white"
            }`}
          >
            <Monitor size={14} />
            데스크탑
          </button>
          <button
            onClick={() => setIsMobile(true)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-medium transition-all ${
              isMobile ? "bg-white text-[#0F172A]" : "text-gray-400 hover:text-white"
            }`}
          >
            <Smartphone size={14} />
            모바일
          </button>
          <button
            onClick={() => setShowToggle(false)}
            className="ml-2 px-3 py-2 text-xs text-gray-400 hover:text-white transition-colors border-l border-white/20"
          >
            숨기기
          </button>
        </div>
      )}

      {isMobile ? (
        /* ── 모바일 프레임 ── */
        <div className="flex justify-center">
          <div
            style={{
              width: 430,
              background: "#1a1a1a",
              borderRadius: 44,
              padding: "14px 12px 20px",
              boxShadow: "0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.5)",
              position: "relative",
            }}
          >
            {/* 노치 */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 34,
                background: "#1a1a1a",
                borderRadius: "0 0 20px 20px",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: 48, height: 6, background: "#111", borderRadius: 9999 }} />
            </div>

            {/* 스크린 — @container 390px → @sm/lg 클래스가 컨테이너 기준으로 동작 */}
            <div
              className="@container overflow-y-auto overflow-x-hidden bg-white"
              style={{
                width: 390,
                height: 780,
                borderRadius: 34,
                display: "block",
                margin: "0 auto",
              }}
            >
              {children}
            </div>

            {/* 홈 인디케이터 */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
              <div style={{ width: 112, height: 4, background: "rgba(255,255,255,0.3)", borderRadius: 9999 }} />
            </div>
          </div>
        </div>
      ) : (
        /* ── 데스크탑 — 전체 뷰포트 기준 @container ── */
        <div className="@container w-full">
          {children}
        </div>
      )}
    </div>
  );
}