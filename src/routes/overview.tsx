import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/overview")({
  head: () => ({
    meta: [
      { title: "Company Overview" },
      {
        name: "description",
        content:
          "Operon Systems helps organizations modernize operations through customized software systems designed around real workflows.",
      },
      { property: "og:title", content: "Company Overview" },
      {
        property: "og:description",
        content: "Who we are and what we do.",
      },
    ],
  }),
  component: OverviewPage,
});

function OverviewPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Company Overview"
        title="Who We Are"
        lede="Operon Systems helps organizations modernize operations through customized software systems designed around real workflows, not generic templates."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
              Our Mission
            </h2>
            <p className="mt-6 font-serif text-3xl font-light leading-snug text-[#0a1424] md:text-4xl">
              To help organizations simplify, digitize and scale operations
              using practical technology.
            </p>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                We partner with operators, finance teams and IT leaders to
                replace spreadsheets, paper trails and disconnected tools with
                systems that reflect how their business actually runs.
              </p>
              <p>
                Every engagement begins with the workflow on the floor, in the
                warehouse, the kitchen, the depot or the back office, and ends
                with software that earns its place in daily use.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
              {[
                ["8+", "Industries served"],
                ["100%", "Custom-built"],
                ["24/7", "Managed support"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-serif text-3xl font-light text-[#0a1424]">{k}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden md:block">
            <img
              src="/overview-hero.jpg"
              alt="Operon Systems"
              className="h-full min-h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
