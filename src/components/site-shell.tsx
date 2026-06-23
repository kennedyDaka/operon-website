import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-[#f4f6fa] text-[#0a1424]">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-[#0a1424] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 sm:py-16 md:px-10 md:py-24">
        <div className="flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#9fc1de] sm:text-[11px] sm:tracking-[0.3em] md:gap-3">
          <span className="h-px w-6 bg-[#4a90c2] sm:w-10" />
          {eyebrow}
        </div>
        <h1 className="mt-4 max-w-4xl font-serif text-2xl font-light leading-tight tracking-tight text-white sm:mt-5 sm:text-3xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-5 sm:text-base md:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/**
 * Plain placeholder block — no decorative pattern. Reserves space for a real
 * photograph that has not been provided yet. Renders an empty bordered panel
 * with a small caption so the layout doesn't collapse.
 */
export function ImagePlaceholder({
  label,
  ratio = "4/3",
  className = "",
}: {
  label?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative border border-slate-200 bg-slate-100 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {label ? (
        <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.22em] text-slate-400">
          {label}
        </span>
      ) : null}
    </div>
  );
}
