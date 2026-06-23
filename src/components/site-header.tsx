import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/overview", label: "Overview" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/why-us", label: "Why Us" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#0a1424] text-white">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-3 px-5 sm:px-6 md:px-10">
        <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <span className="inline-flex items-center bg-white px-2.5 py-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
            <img src="/operon-logo.png" alt="Operon Systems" className="h-10 w-auto sm:h-11" decoding="async" />
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-white sm:inline">
            Operon Systems
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-[#1f4e79] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#16395a] md:inline-block"
          >
            Book Consultation
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onPointerDown={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-white/20 text-white lg:hidden active:bg-white/10"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0a1424] lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-5 py-3 sm:px-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-[13px] font-medium uppercase tracking-[0.16em] text-white/80"
                activeProps={{ className: "text-white" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-[#1f4e79] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
