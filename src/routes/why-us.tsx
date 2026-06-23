import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";
import { SwipeZone } from "@/components/mobile-swipe";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Operon Systems" },
      {
        name: "description",
        content:
          "Built around workflows, designed to grow, practical solutions and long-term support.",
      },
      { property: "og:title", content: "Why Operon Systems" },
      {
        property: "og:description",
        content: "What sets our engagements apart.",
      },
    ],
  }),
  component: WhyPage,
});

const PILLARS = [
  {
    n: "01",
    title: "Built Around Workflows",
    body: "We start with how your team actually works, not a product roadmap.",
  },
  {
    n: "02",
    title: "Designed To Grow",
    body: "Systems are architected for new branches, departments and lines of business.",
  },
  {
    n: "03",
    title: "Practical Solutions",
    body: "We ship what earns its place in daily use. No surplus features.",
  },
  {
    n: "04",
    title: "Long-Term Support",
    body: "The team that builds your system is the team that operates it.",
  },
];

function WhyPage() {
  return (
    <SiteShell>
      <SwipeZone currentPath="/why-us">
      <PageHero
        eyebrow="Why Operon Systems"
        title="A consulting engagement shaped like an operating partnership."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <div className="grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <article key={p.n} className="flex flex-col gap-6 bg-white p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
                {p.n}
              </span>
              <h3 className="font-serif text-2xl font-light text-[#0a1424]">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{p.body}</p>
            </article>
          ))}
        </div>
      </section>
      </SwipeZone>
    </SiteShell>
  );
}
