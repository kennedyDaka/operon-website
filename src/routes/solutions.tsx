import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes, Workflow, RefreshCw, ServerCog,
  Package, Warehouse, ShoppingCart, Truck, Database,
  FileText, UserPlus, ClipboardCheck, Users,
  HardDrive, Save, Activity, LifeBuoy, ArrowRight, Building2,
} from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Operon Systems" },
      { name: "description", content: "Operational systems, workflow digitization, legacy modernization, and managed services for growing organizations." },
      { property: "og:title", content: "Solutions — Operon Systems" },
      { property: "og:description", content: "ERP, inventory, POS, fleet management, workflow automation, modernization and hosting — built around your operations." },
    ],
  }),
  component: SolutionsPage,
});

const SECTIONS = [
  {
    icon: Boxes,
    eyebrow: "01 — Build",
    title: "Operational Systems",
    desc: "Core systems that run the physical, day-to-day side of your business.",
    items: [
      { icon: Building2, name: "ERP", desc: "Finance, operations and reporting in one platform." },
      { icon: Package, name: "Inventory", desc: "Real-time stock across locations and channels." },
      { icon: Warehouse, name: "Warehouse", desc: "Receiving, putaway, picking and dispatch." },
      { icon: ShoppingCart, name: "POS", desc: "Counter, restaurant and multi-outlet sales." },
      { icon: Truck, name: "Fleet Management", desc: "Vehicles, trips, fuel and maintenance." },
    ],
  },
  {
    icon: Workflow,
    eyebrow: "02 — Digitize",
    title: "Workflow Digitization",
    desc: "Turn paper, email and spreadsheet processes into structured digital workflows.",
    items: [
      { icon: FileText, name: "Applications", desc: "Online forms with validation and routing." },
      { icon: Users, name: "Recruitment", desc: "Candidate intake, screening and scheduling." },
      { icon: UserPlus, name: "Onboarding", desc: "Document collection, training and access setup." },
      { icon: ClipboardCheck, name: "Approvals", desc: "Multi-step sign-offs with audit trails." },
    ],
  },
  {
    icon: RefreshCw,
    eyebrow: "03 — Modernize",
    title: "Legacy System Modernization",
    desc: "Replace aging tools without losing the history or rules that run your business.",
    items: [
      { icon: RefreshCw, name: "Rebuild old systems", desc: "Modern, supported replacements for legacy tools." },
      { icon: Database, name: "Data migration", desc: "Clean, accurate moves with no data loss." },
      { icon: Building2, name: "Expansion for new departments", desc: "Extend systems as your structure grows." },
    ],
  },
  {
    icon: ServerCog,
    eyebrow: "04 — Operate",
    title: "Managed Services",
    desc: "We stay in the picture after launch — keeping your systems healthy and reliable.",
    items: [
      { icon: HardDrive, name: "Hosting", desc: "Reliable infrastructure tailored to your load." },
      { icon: Save, name: "Backups", desc: "Automated, verified backups you can restore." },
      { icon: Activity, name: "Monitoring", desc: "Uptime, performance and error tracking." },
      { icon: LifeBuoy, name: "Support", desc: "Response paths your team can count on." },
    ],
  },
];

function SolutionsPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <p className="eyebrow">Solutions</p>
          <h1 className="mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl">
            Practical systems for the way your operations actually work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            From the core systems that run your business, to the workflows your team uses every day,
            to keeping it all running — here's what we build.
          </p>
        </div>
      </section>

      {SECTIONS.map((section, idx) => (
        <section key={section.title} className={`border-b border-rule ${idx % 2 === 1 ? "bg-surface" : ""}`}>
          <div className="container-page py-14 sm:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">{section.title}</h2>
                <p className="mt-5 text-ink-soft">{section.desc}</p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2">
                  {section.items.map(({ icon: Icon, name, desc }) => (
                    <div key={name} className="bg-background p-6">
                      <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                      <h3 className="mt-4 text-base font-semibold text-foreground">{name}</h3>
                      <p className="mt-1.5 text-sm text-ink-soft">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-foreground text-background">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl text-background sm:text-5xl">
              Not sure which solution fits?
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
