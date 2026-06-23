import { useNavigate } from "@tanstack/react-router";

const SWIPE_PAGES = [
  { href: "/overview", label: "Overview" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-us", label: "Why Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function useSwipeNav(currentPath: string) {
  const navigate = useNavigate();
  const currentIndex = SWIPE_PAGES.findIndex((p) => p.href === currentPath);
  const isLastPage = currentIndex === SWIPE_PAGES.length - 1;

  let startX = 0;
  let startY = 0;

  const onTouchStart = (e: TouchEvent) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const onTouchEnd = (e: TouchEvent) => {
    const diffX = startX - e.changedTouches[0].clientX;
    const diffY = Math.abs(startY - e.changedTouches[0].clientY);
    if (diffX > 60 && diffY < 60 && !isLastPage && currentIndex !== -1) {
      navigate({ to: SWIPE_PAGES[currentIndex + 1].href });
    }
  };

  return { onTouchStart, onTouchEnd, currentIndex, isLastPage };
}

export function SwipeIndicator({
  currentPath,
}: {
  currentPath: string;
}) {
  const currentIndex = SWIPE_PAGES.findIndex((p) => p.href === currentPath);
  const isLastPage = currentIndex === SWIPE_PAGES.length - 1;

  if (currentIndex === -1 || isLastPage) return null;

  return (
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
  );
}
