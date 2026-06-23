import { createFileRoute, Link } from "@tanstack/react-router";

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

function Cover() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a1424] text-white">
      {/* Background image */}
      <img
        src="/hero-background.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1424] via-[#0a1424]/85 to-[#0a1424]/60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 py-6 sm:px-8 sm:py-10 md:px-16 md:py-14 lg:px-24 lg:py-16">
        {/* Top bar — logo (more prominent) */}
        <header className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 rounded-sm bg-white px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/20 sm:px-5 sm:py-3.5">
            <img
              src="/operon-logo.png"
              alt="Operon Systems"
              className="h-12 w-auto sm:h-14 md:h-16"
            />
          </div>
          <div className="hidden items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/60 md:flex">
            <span className="h-px w-10 bg-white/40" />
            Capability Statement
          </div>
        </header>

        {/* Hero text */}
        <section className="flex-1 flex flex-col justify-center max-w-4xl py-16 sm:py-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#4a90c2] sm:w-16" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9fc1de] sm:text-[11px] sm:tracking-[0.35em]">
              Enterprise Operations Partner
            </span>
          </div>

          <h1 className="font-serif text-[44px] font-light leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
            OPERON
            <br />
            <span className="text-white/95">SYSTEMS</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm md:text-base">
            Operational Systems
            <span className="mx-2 text-[#4a90c2] sm:mx-3">•</span>
            Workflow Digitization
            <span className="mx-2 text-[#4a90c2] sm:mx-3">•</span>
            ERP Modernization
          </p>

          <div className="mt-10 border-l-2 border-[#4a90c2] pl-5 sm:pl-8">
            <p className="font-serif text-xl font-light leading-snug text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Show Us Your Workflows.
              <br />
              We Digitize Them.
            </p>
          </div>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base md:text-lg">
            Helping organizations across Malawi modernize operations through
            practical technology.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#1f4e79] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#16395a]"
            >
              Book a Consultation →
            </Link>
            <Link
              to="/overview"
              className="inline-flex items-center justify-center gap-3 border border-white/40 px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Explore Capabilities
            </Link>
          </div>
        </section>

        {/* Footer rail — pushed to bottom, won't overlap */}
        <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.25em] text-white/55 sm:text-[11px] sm:tracking-[0.3em] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4a90c2]" />
            <span>Operon Systems</span>
            <span className="text-white/30">/</span>
            <span>Blantyre CBD · Malawi</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
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
    </main>
  );
}
