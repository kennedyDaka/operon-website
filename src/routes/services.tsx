import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";
import { Boxes, Workflow, RefreshCw, Server } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Operon Systems" },
      {
        name: "description",
        content:
          "Operational systems, workflow digitization, legacy modernization and managed services.",
      },
      { property: "og:title", content: "Services — Operon Systems" },
      {
        property: "og:description",
        content: "Four practice areas built around operations.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Boxes,
    title: "Operational Systems",
    body: "ERP, inventory, warehouse, logistics and POS systems built around real-world operations.",
    href: "/operational-systems" as const,
  },
  {
    icon: Workflow,
    title: "Workflow Digitization",
    body: "Applications, onboarding, approvals and internal workflows moved off paper and spreadsheets.",
    href: "/workflow-digitization" as const,
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    body: "Rebuild outdated systems, migrate existing data and extend platforms for new departments.",
    href: "/legacy-modernization" as const,
  },
  {
    icon: Server,
    title: "Managed Services",
    body: "Hosting, backups, monitoring and ongoing support for the systems we build.",
    href: "/managed-services" as const,
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Four practice areas, one operating philosophy."
        lede="We design, build and operate the systems that run day-to-day operations — from the warehouse floor to the back office."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <div className="grid gap-px bg-slate-200 md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, body, href }) => (
            <Link
              key={title}
              to={href}
              className="group flex flex-col gap-6 bg-white p-10 transition-colors hover:bg-slate-50 md:p-12"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-[#1f4e79]/20 bg-[#1f4e79]/5 text-[#1f4e79]">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl font-light text-[#0a1424] md:text-3xl">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">{body}</p>
              <span className="mt-auto text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79] transition-transform group-hover:translate-x-1">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
