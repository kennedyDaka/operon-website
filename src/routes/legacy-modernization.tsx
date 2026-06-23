import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/legacy-modernization")({
  head: () => ({
    meta: [
      { title: "Legacy System Modernization — Operon Systems" },
      {
        name: "description",
        content:
          "Rebuild outdated software, migrate existing data and expand systems to support new departments and operations.",
      },
      { property: "og:title", content: "Legacy System Modernization — Operon Systems" },
      { property: "og:description", content: "Outgrown your current system?" },
    ],
  }),
  component: LegacyPage,
});

const BEFORE = [
  "Disconnected modules",
  "Manual reconciliation",
  "No mobile access",
  "Single-branch design",
  "Reports take days",
];

const AFTER = [
  "Unified data model",
  "Automated reconciliation",
  "Mobile-first for the floor",
  "Built for multi-branch growth",
  "Reports refresh in real time",
];

function LegacyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legacy System Modernization"
        title="Outgrown Your Current System?"
        lede="We rebuild outdated software, migrate existing data and extend systems to support new departments, branches and operations — without disrupting the business in flight."
      />

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
          <div className="bg-white p-10 md:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Before
            </span>
            <h3 className="mt-3 font-serif text-3xl font-light text-[#0a1424]">
              The legacy state
            </h3>
            <ul className="mt-8 space-y-4">
              {BEFORE.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0a1424] p-10 text-white md:p-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9fc1de]">
              After
            </span>
            <h3 className="mt-3 font-serif text-3xl font-light">The modernized state</h3>
            <ul className="mt-8 space-y-4">
              {AFTER.map((a) => (
                <li key={a} className="flex items-start gap-3 text-white/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4a90c2]" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
