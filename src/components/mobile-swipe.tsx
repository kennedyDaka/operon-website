import { useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";

const SWIPE_PAGES = [
  { href: "/overview", label: "Overview" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-us", label: "Why Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function MobileSwipe({ currentPath }: { currentPath: string }) {
  const navigate = useNavigate();
  const [showIndicator, setShowIndicator] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentIndex = SWIPE_PAGES.findIndex((p) => p.href === currentPath);
  const isLastPage = currentIndex === SWIPE_PAGES.length - 1;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 80;

    if (diff > threshold && !isLastPage) {
      // Swipe left - go next
      navigate({ to: SWIPE_PAGES[currentIndex + 1].href });
    }
  }, [currentIndex, isLastPage, navigate]);

  useEffect(() => {
    setShowIndicator(true);
    const timer = setTimeout(() => setShowIndicator(false), 4000);
    return () => clearTimeout(timer);
  }, [currentPath]);

  if (currentIndex === -1) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {showIndicator && (
        <div className="flex flex-col items-center gap-2 pb-6">
          {!isLastPage && (
            <div className="flex items-center gap-2 rounded-full bg-[#0a1424]/80 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
              <span>Swipe to continue</span>
              <svg
                className="h-4 w-4 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}
          <div className="flex gap-1.5">
            {SWIPE_PAGES.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${
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
