import { useNavigate } from "@tanstack/react-router";
import { useRef, useCallback, type ReactNode } from "react";

const SWIPE_PAGES = [
  { href: "/overview", label: "Overview" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-us", label: "Why Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function SwipeZone({
  currentPath,
  children,
}: {
  currentPath: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const startX = useRef(0);
  const startY = useRef(0);
  const moved = useRef(false);

  const currentIndex = SWIPE_PAGES.findIndex((p) => p.href === currentPath);
  const isLastPage = currentIndex === SWIPE_PAGES.length - 1;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    moved.current = false;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const dx = startX.current - e.touches[0].clientX;
    const dy = Math.abs(startY.current - e.touches[0].clientY);
    if (dx > 20 && dy < 40) {
      moved.current = true;
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    if (moved.current && !isLastPage && currentIndex !== -1) {
      navigate({ to: SWIPE_PAGES[currentIndex + 1].href });
    }
    moved.current = false;
  }, [currentIndex, isLastPage, navigate]);

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative"
    >
      {children}

      {/* Always-visible indicator */}
      {!isLastPage && currentIndex !== -1 && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 pb-4 pt-6 sm:hidden pointer-events-none">
          <div className="flex items-center gap-2 rounded-full bg-[#0a1424]/90 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            <span>Swipe to continue</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex gap-1.5">
            {SWIPE_PAGES.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-4 bg-[#1f4e79]" : "w-1 bg-[#0a1424]/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
