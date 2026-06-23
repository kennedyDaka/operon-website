import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/workflow-digitization")({
  head: () => ({
    meta: [
      { title: "Workflow Digitization — Operon Systems" },
      {
        name: "description",
        content:
          "Application, recruitment, admissions, approvals and onboarding systems that replace paper and email.",
      },
      { property: "og:title", content: "Workflow Digitization — Operon Systems" },
      { property: "og:description", content: "Move workflows off paper, email and spreadsheets." },
    ],
  }),
  component: WorkflowPage,
});

const FLOW = [
  { step: "01", title: "Capture", body: "Structured intake forms replace email and paper." },
  { step: "02", title: "Route", body: "Approvals follow your real org chart, not a generic template." },
  { step: "03", title: "Decide", body: "Reviewers act in one place with full context attached." },
  { step: "04", title: "Record", body: "Outcomes feed downstream systems automatically." },
];

const SYSTEMS = [
  "Application systems",
  "Recruitment systems",
  "Admissions systems",
  "Approvals and onboarding",
];

function WorkflowPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Workflow Digitization"
        title="From paper, email and spreadsheets to a single auditable flow."
        lede="We rebuild the operational processes that touch the most people — applications, approvals and onboarding — as systems your team actually wants to use."
      />

      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
          Systems we build
        </h2>
        <div className="mt-8 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {SYSTEMS.map((s) => (
            <div key={s} className="bg-white p-8">
              <p className="font-serif text-xl font-light text-[#0a1424]">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
            Process flow
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-3xl font-light text-[#0a1424]">
            Every digitized workflow follows the same four stages.
          </p>

          <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            {FLOW.map((f, i) => (
              <div key={f.step} className="contents">
                <article className="flex flex-col gap-3 border border-slate-200 bg-white p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
                    {f.step}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-[#0a1424]">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{f.body}</p>
                </article>
                {i < FLOW.length - 1 ? (
                  <div className="flex items-center justify-center text-[#1f4e79]">
                    <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
