import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHero } from "@/components/site-shell";
import { Cloud, Activity, DatabaseBackup, RefreshCw, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/managed-services")({
  head: () => ({
    meta: [
      { title: "Managed Services" },
      {
        name: "description",
        content:
          "Hosting, monitoring, backups, updates and support for the systems we build.",
      },
      { property: "og:title", content: "Managed Services" },
      { property: "og:description", content: "Operate with confidence." },
    ],
  }),
  component: ManagedPage,
});

const ITEMS = [
  { icon: Cloud, title: "Hosting", body: "Production hosting on resilient cloud infrastructure." },
  { icon: Activity, title: "Monitoring", body: "Uptime, performance and alerting around the clock." },
  { icon: DatabaseBackup, title: "Backups", body: "Automated, tested and restorable on demand." },
  { icon: RefreshCw, title: "Updates", body: "Security patches and feature rollouts on schedule." },
  { icon: LifeBuoy, title: "Support", body: "Direct line to the engineers who built your system." },
];

function ManagedPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Managed Services"
        title="The system is live. We keep it running."
        lede="Once the build is done, the work shifts. Managed services covers everything required to operate your systems reliably."
      />
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, body }) => (
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
