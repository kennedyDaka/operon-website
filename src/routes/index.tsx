import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useRef, useEffect, useCallback } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Operon Systems" },
      {
        name: "description",
        content:
          "Operon Systems helps organizations in Malawi modernize operations through practical technology, workflow digitization and ERP modernization.",
      },
      { property: "og:title", content: "Operon Systems" },
      {
        property: "og:description",
        content: "Show us your workflows. We digitize them.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Cover,
});

const PAGES = [
  { href: "/", label: "Home" },
  { href: "/overview", label: "Overview" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/why-us", label: "Why Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function Cover() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [showArrow, setShowArrow] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 80;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentPage < PAGES.length - 1) {
        // Swipe left - go next
        setCurrentPage((p) => p + 1);
        navigate({ to: PAGES[currentPage + 1].href });
      } else if (diff < 0 && currentPage > 0) {
        // Swipe right - go prev
        setCurrentPage((p) => p - 1);
        navigate({ to: PAGES[currentPage - 1].href });
      }
    }
  }, [currentPage, navigate]);

  useEffect(() => {
    setShowArrow(true);
    const timer = setTimeout(() => setShowArrow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-[#0a1424] text-white">
      {/* Background image */}
      <img
        src="/hero-background.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
        fetchPriority="high"
      />
      {/* Dark overlay - stronger on mobile */}
      <div className="absolute inset-0 bg-[#0a1424]/70 sm:bg-gradient-to-r sm:from-[#0a1424] sm:via-[#0a1424]/85 sm:to-[#0a1424]/60" />

      <div
        className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1440px] flex-col px-5 py-6 sm:px-8 sm:py-10 md:px-16 md:py-14 lg:px-24 lg:py-16"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 rounded-sm bg-white px-3 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/20 sm:px-5 sm:py-3.5">
            <img
              src="/operon-logo.png"
              alt="Operon Systems"
              className="h-10 w-auto sm:h-14 md:h-16"
              decoding="async"
            />
          </div>
          <div className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/60 md:flex">
            <span className="h-px w-10 bg-white/40" />
            Capability Statement
          </div>
        </header>

        {/* Hero text */}
        <section className="flex flex-1 flex-col justify-center py-12 sm:py-16 md:py-24">
          <div className="mb-4 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-[#4a90c2] sm:w-16" />
            <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[#9fc1de] sm:text-[11px] sm:tracking-[0.35em]">
              Enterprise Operations Partner
            </span>
          </div>

          <h1 className="font-serif text-[36px] font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            OPERON
            <br />
            <span className="text-white/95">SYSTEMS</span>
          </h1>

          <p className="mt-6 max-w-3xl text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 sm:mt-8 sm:text-sm md:text-base">
            Operational Systems
            <span className="mx-1.5 text-[#4a90c2] sm:mx-3">•</span>
            Workflow Digitization
            <span className="mx-1.5 text-[#4a90c2] sm:mx-3">•</span>
            ERP Modernization
          </p>

          <div className="mt-6 border-l-2 border-[#4a90c2] pl-4 sm:mt-10 sm:pl-8">
            <p className="font-serif text-lg font-light leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Show Us Your Workflows.
              <br />
              We Digitize Them.
            </p>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/75 sm:mt-8 sm:text-base md:text-lg">
            Helping organizations across Malawi modernize operations through
            practical technology.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1f4e79] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#16395a]"
            >
              Book a Consultation
            </Link>
            <Link
              to="/overview"
              className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Explore Capabilities
            </Link>
          </div>
        </section>

        {/* Footer rail */}
        <footer className="flex flex-col gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/55 sm:text-[11px] sm:tracking-[0.3em] md:flex-row md:items-center md:justify-between md:pt-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 sm:gap-x-3 sm:gap-y-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4a90c2]" />
            <span>Operon Systems</span>
            <span className="text-white/30">/</span>
            <span>Blantyre CBD · Malawi</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:gap-x-3">
            <span>Logistics</span>
            <span className="text-white/30">·</span>
            <span>Hospitality</span>
            <span className="text-white/30">·</span>
            <span>Retail</span>
            <span className="text-white/30">·</span>
            <span>Enterprise</span>
          </div>
        </footer>
      </div>

      {/* Mobile swipe indicator */}
      {showArrow && (
        <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-2 sm:hidden">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            <span>Swipe to explore</span>
            <svg
              className="h-4 w-4 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex gap-1.5">
            {PAGES.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === currentPage ? "w-4 bg-white" : "w-1 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
