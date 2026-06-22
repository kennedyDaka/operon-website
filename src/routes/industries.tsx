import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck, Utensils, Fuel, Egg, ShoppingBag, GraduationCap, HeartPulse, Warehouse, ArrowRight,
} from "lucide-react";
import logisticsImg from "@/assets/logistics.jpg.asset.json";
import hospitalityImg from "@/assets/hospitality-pos.jpg.asset.json";
import fuelImg from "@/assets/fuel.jpg.asset.json";
import agricultureImg from "@/assets/agriculture.jpg.asset.json";
import retailImg from "@/assets/retail.jpg.asset.json";
import inventoryImg from "@/assets/inventory.jpg.asset.json";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Operon Systems" },
      { name: "description", content: "Systems built for warehousing, logistics, hospitality, fuel, agriculture, retail, schools and healthcare." },
      { property: "og:title", content: "Industries — Operon Systems" },
      { property: "og:description", content: "We work with operationally heavy industries that depend on accurate, real-time information." },
    ],
  }),
  component: IndustriesPage,
});

const INDUSTRIES = [
  {
    icon: Truck,
    name: "Logistics & Transport",
    image: logisticsImg.url,
    challenges: "Manual dispatch, fuel leakage, paperwork-heavy trip records.",
    systems: "Fleet management, trip sheets, fuel tracking, driver portals.",
    benefits: "Visibility on every trip, lower fuel cost, faster billing.",
  },
  {
    icon: Utensils,
    name: "Hospitality & Restaurants",
    image: hospitalityImg.url,
    challenges: "Disconnected POS, kitchen and stock systems across outlets.",
    systems: "Multi-outlet POS, kitchen display, recipe and stock control.",
    benefits: "Accurate margins, faster service, consistent reporting.",
  },
  {
    icon: Fuel,
    name: "Fuel Operations",
    image: fuelImg.url,
    challenges: "Tank reconciliation, shift handovers and cash variances.",
    systems: "Pump-to-tank reconciliation, shift reports, customer accounts.",
    benefits: "Tight controls, fewer variances, audit-ready records.",
  },
  {
    icon: Egg,
    name: "Poultry & Agriculture",
    image: agricultureImg.url,
    challenges: "Tracking flocks, feed, mortality and yields across sites.",
    systems: "Production tracking, feed inventory, sales and dispatch.",
    benefits: "Better yield visibility, lower waste, clearer profitability.",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
    image: retailImg.url,
    challenges: "Stock mismatches between branches and shrinkage.",
    systems: "Multi-branch POS, central inventory, supplier and pricing.",
    benefits: "Right stock at the right branch, fewer stockouts, healthier margins.",
  },
  {
    icon: GraduationCap,
    name: "Schools & Institutions",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    challenges: "Paper applications, fragmented student and fee records.",
    systems: "Admissions, student records, fees and staff workflows.",
    benefits: "Faster admissions, transparent fees, less administrative load.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    challenges: "Patient records, billing and inventory across departments.",
    systems: "Patient management, billing, pharmacy and lab workflows.",
    benefits: "Better continuity of care, accurate billing, fewer errors.",
  },
  {
    icon: Warehouse,
    name: "Warehousing & Distribution",
    image: inventoryImg.url,
    challenges: "Stock counts, picking errors and slow dispatch.",
    systems: "Warehouse management, barcode picking, dispatch and returns.",
    benefits: "Faster turnaround, fewer errors, real-time stock visibility.",
  },
];

function IndustriesPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <p className="eyebrow">Industries</p>
          <h1 className="mt-4 max-w-3xl text-5xl text-foreground sm:text-6xl">
            Operationally heavy. Detail-driven. Built to scale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            The teams we serve all run physical operations where accurate, real-time information
            makes the difference between a good day and a costly one.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            {INDUSTRIES.map(({ icon: Icon, name, image, challenges, systems, benefits }) => (
              <article key={name} className="overflow-hidden rounded-md border border-rule bg-background">
                <img src={image} alt={`${name} operations`} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                    <h2 className="text-2xl text-foreground">{name}</h2>
                  </div>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Challenges</dt>
                      <dd className="mt-1.5 text-foreground">{challenges}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Typical systems</dt>
                      <dd className="mt-1.5 text-foreground">{systems}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-brand">Benefits</dt>
                      <dd className="mt-1.5 text-foreground">{benefits}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl text-background sm:text-5xl">
              Industry not listed? We've probably built something close.
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-background/90">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
