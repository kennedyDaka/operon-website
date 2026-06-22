import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hospitalityImg from "@/assets/hospitality-pos.jpg.asset.json";
import logisticsImg from "@/assets/logistics.jpg.asset.json";
import analyticsImg from "@/assets/analytics.jpg.asset.json";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Operon Systems" },
      { name: "description", content: "How real operations teams replaced spreadsheets and legacy tools with systems built around their workflows." },
      { property: "og:title", content: "Case Studies — Operon Systems" },
      { property: "og:description", content: "Restaurant operations, ERP implementations and workflow automation — built to fit." },
    ],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    sector: "Hospitality",
    title: "Restaurant operations across four outlets",
    image: hospitalityImg.url,
    problem: "Each outlet ran its own spreadsheets for stock, sales and shift cash. Head office had no live picture and reports arrived days late.",
    solution: "A unified POS, kitchen display and inventory system with central reporting. Recipes drove automatic stock deductions; shifts closed digitally.",
    outcome: "Daily reporting from days to minutes. Stock variance dropped by 60%. Head office now sees outlet performance in real time.",
  },
  {
    sector: "Distribution",
    title: "ERP implementation for a growing distributor",
    image: logisticsImg.url,
    problem: "Finance, sales and warehouse worked in three disconnected tools. Month-end took two weeks and reconciliations were manual.",
    solution: "Phased ERP rollout — finance, then inventory and sales — with clean data migration from existing systems and supplier records.",
    outcome: "Month-end closed in 3 days. Live margin visibility per product line. New branch onboarded in under a week.",
  },
  {
    sector: "Operations",
    title: "Workflow automation for internal approvals",
    image: analyticsImg.url,
    problem: "Procurement, leave and expense approvals moved via email and printed forms. Items stalled with no visibility on who was holding them up.",
    solution: "Digital approval workflows with role-based routing, audit trails and reminders. Mobile-friendly for managers on the move.",
    outcome: "Approval turnaround down 70%. Full audit history for every request. Finance receives clean, structured data.",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <p className="eyebrow">Case Studies</p>
          <h1 className="mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl">
            Real operations. Real systems. Real outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            A look at how teams replaced spreadsheets, paper trails and legacy software with
            systems built around the way they actually work.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="space-y-20">
            {CASES.map((c, i) => (
              <article key={c.title} className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={c.image} alt={c.title} loading="lazy" className="aspect-[4/3] w-full rounded-md object-cover" />
                </div>
                <div className="lg:col-span-6">
                  <p className="eyebrow">{c.sector}</p>
                  <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">{c.title}</h2>
                  <dl className="mt-8 space-y-6 border-l border-rule pl-6">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Problem</dt>
                      <dd className="mt-2 text-foreground">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Solution</dt>
                      <dd className="mt-2 text-foreground">{c.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-brand">Outcome</dt>
                      <dd className="mt-2 text-foreground">{c.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 rounded-md border border-rule bg-surface p-10">
            <p className="eyebrow">Coming next</p>
            <h3 className="mt-3 text-2xl text-foreground">Yano · Jungle Pepper</h3>
            <p className="mt-2 max-w-2xl text-ink-soft">
              Two new case studies in production. We'll publish detailed write-ups once the systems
              are live and the teams have measured the impact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl text-background sm:text-5xl">
              Have a system that's holding your team back?
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background/90">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
