import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies" },
      {
        name: "description",
        content:
          "Selected client engagements: WatchGalore 265, Yano Eggs and Jungle Pepper.",
      },
      { property: "og:title", content: "Case Studies" },
      {
        property: "og:description",
        content: "Selected engagements and outcomes.",
      },
    ],
  }),
  component: CasesPage,
});

const CASES = [
  {
    sector: "Retail · E-commerce",
    client: "WatchGalore 265",
    logo: "/client-watchgalore265.jpg",
    bg: "bg-white",
    title: "An online store built for reach beyond the storefront.",
    problem:
      "Sales were limited to walk-in customers at a single location, with no way to reach buyers across Malawi.",
    solution:
      "We launched a branded online store with product catalogue, order management and integrated checkout, designed to be run by a small team.",
    outcome:
      "WatchGalore 265 now sells watches and men's essentials online, reaching customers well beyond the physical store.",
  },
  {
    sector: "FMCG · Multi-branch Operations",
    client: "Yano Eggs",
    logo: "/client-yano-eggs.png",
    bg: "bg-white",
    title: "A centralized system across branches with real-time reporting.",
    problem:
      "Each branch tracked sales and stock independently, leaving management without a single, current view of the business.",
    solution:
      "We built a centralized operations platform connecting every branch, with live dashboards for sales, stock movement and daily performance.",
    outcome:
      "Leadership now sees branch performance in real time and can act on the same day, not at month-end.",
  },
  {
    sector: "Hospitality · Restaurant",
    client: "Jungle Pepper",
    logo: "/client-jungle-pepper.png",
    bg: "bg-white",
    title: "Real-time inventory, sales, expenses and restaurant ordering.",
    problem:
      "Inventory, expenses and orders lived across notebooks and disconnected tools, making daily reconciliation slow and error-prone.",
    solution:
      "We deployed an integrated system covering live inventory, sales capture, expense records and an in-restaurant ordering workflow.",
    outcome:
      "Stock, takings and expenses now reconcile in real time, and order flow from table to kitchen is fully digital.",
  },
];

function CasesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Case Studies"
        title="Engagements in their own words."
        lede="A consistent format, problem, solution, outcome, across retail, FMCG and hospitality clients."
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="space-y-8 md:space-y-12">
          {CASES.map((c, i) => (
            <article
              key={c.client}
              className="grid gap-8 border border-slate-200 bg-white p-6 sm:p-8 md:grid-cols-[1fr_1.4fr] md:gap-10 md:p-12"
            >
              <div className={`flex items-center justify-center border border-slate-200 ${c.bg} p-6 md:p-10`}>
                <img
                  src={c.logo}
                  alt={`${c.client} logo`}
                  className="max-h-40 w-auto object-contain md:max-h-56"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
                  Case {String(i + 1).padStart(2, "0")} · {c.sector}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-light text-[#0a1424] md:text-3xl">
                  {c.client}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-700 md:text-lg">
                  {c.title}
                </p>
                <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                  {[
                    ["Problem", c.problem],
                    ["Solution", c.solution],
                    ["Outcome", c.outcome],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t border-slate-200 pt-4">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
                        {k}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
