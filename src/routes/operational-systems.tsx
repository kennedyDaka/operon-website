import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";
import { Boxes, Warehouse, Truck, ScanBarcode, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/operational-systems")({
  head: () => ({
    meta: [
      { title: "Operational Systems" },
      {
        name: "description",
        content:
          "Custom operational systems built around real workflows: inventory, warehouse, fleet, POS and reporting.",
      },
      { property: "og:title", content: "Operational Systems" },
      { property: "og:description", content: "Software built around your workflows." },
    ],
  }),
  component: OpSystemsPage,
});

const EXAMPLES = [
  { icon: Boxes, title: "Inventory Management", body: "Stock control across branches, with audit trails and reorder logic." },
  { icon: Warehouse, title: "Warehouse Operations", body: "Receiving, putaway, picking and dispatch on mobile devices." },
  { icon: Truck, title: "Fleet Management", body: "Vehicles, drivers, trips, fuel and maintenance in one record." },
  { icon: ScanBarcode, title: "POS Systems", body: "Branch sales, payments and shift reconciliation tied to inventory." },
  { icon: BarChart3, title: "Reporting Dashboards", body: "Executive views built from the same data your operators capture." },
];

function OpSystemsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Operational Systems"
        title="Custom systems built around workflows, not generic software."
        lede="Generic ERP forces your team to adapt. We build the inverse: systems shaped by how your operation already runs, then standardized for scale."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
          Common modules
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="flex flex-col gap-4 border border-slate-200 bg-white p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#1f4e79]/20 bg-[#1f4e79]/5 text-[#1f4e79]">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-light text-[#0a1424]">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
