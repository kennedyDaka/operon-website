import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";
import {
  Warehouse,
  Truck,
  UtensilsCrossed,
  Fuel,
  Egg,
  ShoppingBag,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Operon Systems" },
      {
        name: "description",
        content:
          "Industries we serve: warehousing, logistics, hospitality, fuel, poultry, retail, schools and healthcare.",
      },
      { property: "og:title", content: "Industries — Operon Systems" },
      {
        property: "og:description",
        content: "Sectors where our systems are in daily use.",
      },
    ],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  { icon: Warehouse, title: "Warehousing & Distribution", caption: "Inbound, outbound, stock control", image: "/industry-warehouse.jpg" },
  { icon: Truck, title: "Logistics & Transport", caption: "Fleet, dispatch, deliveries", image: "/industry-logistics.jpg" },
  { icon: UtensilsCrossed, title: "Hospitality & Restaurants", caption: "POS, kitchen, inventory", image: "/industry-hospitality.jpg" },
  { icon: Fuel, title: "Fuel Operations", caption: "Forecourt, depot, reconciliation", image: "/industry-fuel.jpg" },
  { icon: Egg, title: "Poultry & Agriculture", caption: "Production, traceability, supply", image: "/industry-poultry.jpg" },
  { icon: ShoppingBag, title: "Retail", caption: "Multi-branch, stock, sales", image: "/industry-retail.jpg" },
  { icon: GraduationCap, title: "Schools & Institutions", caption: "Admissions, records, finance", image: "/industry-schools.jpg" },
  { icon: Stethoscope, title: "Healthcare", caption: "Patient flow, records, billing", image: "/industry-healthcare.jpg" },
];

function IndustriesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Industries"
        title="Sectors where our systems are in daily use."
        lede="We build for operators. Each sector below represents live deployments and reusable patterns."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, title, caption, image }) => (
            <article
              key={title}
              className="flex flex-col border border-slate-200 bg-white transition-colors hover:border-[#1f4e79]/40"
            >
              <div className="relative aspect-[4/3] border-b border-slate-200 bg-slate-100 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex h-10 w-10 items-center justify-center border border-[#1f4e79]/20 bg-[#1f4e79]/5 text-[#1f4e79]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-[#0a1424]">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
