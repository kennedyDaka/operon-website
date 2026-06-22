import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes, Workflow, RefreshCw, ServerCog, ArrowRight, Check,
  Warehouse, Truck, Utensils, ShoppingBag, Fuel, Egg, GraduationCap, HeartPulse,
} from "lucide-react";
import heroImg from "@/assets/inventory.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Operon Systems — Show us your workflows. We digitize them." },
      { name: "description", content: "Custom operational systems, workflow automation, and software modernization built around how your organization actually works." },
      { property: "og:title", content: "Operon Systems" },
      { property: "og:description", content: "Custom operational systems, workflow automation, and software modernization built around how your organization actually works." },
    ],
  }),
  component: Home,
});

const SOLUTIONS = [
  { icon: Boxes, title: "Operational Systems", desc: "Inventory, warehouse, logistics, POS and workflow systems." },
  { icon: Workflow, title: "Workflow Digitization", desc: "Applications, approvals, onboarding and internal processes." },
  { icon: RefreshCw, title: "System Modernization", desc: "Rebuild outdated systems and migrate existing data." },
  { icon: ServerCog, title: "Managed Services", desc: "Hosting, monitoring, backups and support." },
];

const INDUSTRIES = [
  { icon: Warehouse, name: "Warehousing & Distribution" },
  { icon: Truck, name: "Logistics & Transport" },
  { icon: Utensils, name: "Hospitality & Restaurants" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Fuel, name: "Fuel Operations" },
  { icon: Egg, name: "Poultry & Agriculture" },
  { icon: GraduationCap, name: "Schools & Institutions" },
  { icon: HeartPulse, name: "Healthcare" },
];

const WHY = [
  { title: "Built Around Your Workflows", desc: "We map how your team actually operates before writing a single line of code." },
  { title: "Not Generic Software", desc: "Every system is shaped to the rules, roles, and reports your business already relies on." },
  { title: "Designed To Grow With You", desc: "Add departments, branches, and processes without starting over." },
  { title: "Long-Term Support", desc: "We stay involved — hosting, monitoring, and adjusting the system as you change." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-rule bg-brand-soft/40">
        <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow">Operations Software, Built To Fit</p>
            <h1 className="mt-4 text-4xl leading-[1.08] text-foreground sm:text-6xl lg:text-7xl">
              Show us your workflows. <span className="italic text-brand">We digitize them.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-ink-soft sm:mt-6 sm:text-lg">
              Custom operational systems, workflow automation, and software modernization built
              around how your organization actually works — not how a generic product expects you to.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/solutions" className="inline-flex items-center justify-center gap-2 rounded-md border border-rule bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-surface">
                View Solutions
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={heroImg.url}
                alt="Warehouse operator counting stock against a written tally sheet"
                className="aspect-[4/5] w-full rounded-md object-cover"
                loading="eager"
              />
              <div className="absolute -right-4 -top-4 -z-10 hidden h-32 w-32 rounded-md bg-accent-warm/80 sm:block" aria-hidden />
              <div className="absolute -bottom-6 -left-6 hidden max-w-[260px] rounded-md border border-rule bg-background p-5 shadow-sm sm:block">
                <p className="text-xs uppercase tracking-widest text-ink-soft">In production</p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  Restaurant operations system handling daily tickets across multiple outlets.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-rule bg-surface">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">The Problem</p>
              <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">
                Most businesses outgrow their systems.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-ink-soft">
                As businesses grow, spreadsheets, paperwork, and disconnected tools become difficult
                to manage. Operations get harder to track. Reporting becomes unreliable. Decisions
                slow down.
              </p>
              <p className="mt-4 text-lg text-ink-soft">
                We help organizations modernize and simplify the way they operate — replacing
                stitched-together workflows with systems built for the way your team works today.
              </p>

              <div className="mt-10 grid items-center gap-4 rounded-md border border-rule bg-background p-6 sm:grid-cols-[1fr_auto_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-soft">Before</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    <li>Spreadsheets across email</li>
                    <li>Manual stock counts</li>
                    <li>Paper approvals</li>
                    <li>Reports built by hand</li>
                  </ul>
                </div>
                <ArrowRight className="hidden h-5 w-5 text-ink-soft sm:block" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand">After</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    <li className="flex gap-2"><Check className="h-4 w-4 text-brand" /> One connected system</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-brand" /> Live inventory & sales</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-brand" /> Digital approvals</li>
                    <li className="flex gap-2"><Check className="h-4 w-4 text-brand" /> Reports on demand</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Solutions</p>
              <h2 className="mt-4 max-w-xl text-4xl text-foreground sm:text-5xl">
                Four ways we help operations teams run better.
              </h2>
            </div>
            <Link to="/solutions" className="text-sm font-medium text-foreground underline underline-offset-4">
              View all solutions →
            </Link>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map(({ icon: Icon, title, desc }, i) => {
              const tones = ["bg-brand-soft text-brand", "bg-accent-soft text-accent-warm", "bg-brand-soft text-brand", "bg-accent-soft text-accent-warm"];
              return (
                <div key={title} className="bg-background p-8 transition-colors hover:bg-surface">
                  <span className={`grid h-11 w-11 place-items-center rounded-md ${tones[i % tones.length]}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-xl text-foreground">{title}</h3>
                  <p className="mt-3 text-sm text-ink-soft">{desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b border-rule bg-surface">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Industries</p>
              <h2 className="mt-4 text-4xl text-foreground sm:text-5xl">
                Built for operationally heavy industries.
              </h2>
              <p className="mt-5 text-ink-soft">
                The teams we work with all share one thing — physical operations that depend on
                accurate, real-time information.
              </p>
              <Link to="/industries" className="mt-6 inline-flex text-sm font-medium text-foreground underline underline-offset-4">
                Explore industries →
              </Link>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-md border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-2">
                {INDUSTRIES.map(({ icon: Icon, name }) => (
                  <div key={name} className="flex items-center gap-4 bg-background p-5">
                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <p className="eyebrow">Why Operon</p>
          <h2 className="mt-4 max-w-2xl text-4xl text-foreground sm:text-5xl">
            We work the way your operations actually run.
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <div key={w.title} className="border-t border-foreground pt-6">
                <p className="font-serif text-2xl text-brand">0{i + 1}</p>
                <h3 className="mt-3 text-lg text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-background/60">Let's talk</p>
              <h2 className="mt-4 max-w-2xl text-4xl text-background sm:text-5xl">
                Let's talk about your operations.
              </h2>
              <p className="mt-5 max-w-xl text-background/70">
                Whether you're replacing an old system or starting from scratch, we'll help you
                understand your options — no pitch, just a working conversation.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background/90">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
