import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Operon Systems" },
      { name: "description", content: "Operon Systems helps organizations modernize operations through practical technology built around real workflows." },
      { property: "og:title", content: "About Operon Systems" },
      { property: "og:description", content: "We build around workflows, not generic software." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-28">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl lg:text-7xl">
            We build around <span className="italic text-brand">workflows</span>, not generic software.
          </h1>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Our Story</p>
              <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
                Built from the operations floor, not a corporate boardroom.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-lg text-ink-soft">
              <p>
                Operon Systems was founded to solve a specific kind of problem — the gap between
                what off-the-shelf software offers and how real operations actually run.
              </p>
              <p>
                We work with warehouses, restaurants, distributors, fuel operators, schools and
                healthcare teams. The common thread: people who depend on accurate information to
                run a physical business, and have grown out of the tools they started with.
              </p>
              <p>
                Instead of forcing your team into a generic product, we map your workflows first,
                then build (or modernize) the system that fits them. We stay involved long after
                launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-surface">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Mission</p>
              <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">
                Help organizations modernize operations through practical technology.
              </h2>
            </div>
            <div className="space-y-5 text-ink-soft">
              <p>
                We measure success the way our clients do — fewer errors, faster decisions, less
                administrative load, and a system the team genuinely uses every day.
              </p>
              <p>
                We don't sell licenses for software we didn't build. We don't push frameworks for
                their own sake. We design and deliver systems that earn their place in the
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="container-page py-14 sm:py-20 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              {/* Portrait placeholder — replace with real photo when provided */}
              <div
                role="img"
                aria-label="Portrait of Kennedy Daka — photo to be added"
                className="aspect-[4/5] w-full rounded-md border border-dashed border-rule bg-surface"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="eyebrow">Founder</p>
              <h2 className="mt-4 text-3xl text-foreground sm:text-5xl">Kennedy Daka</h2>
              <p className="mt-2 text-ink-soft">Managing Director</p>
              <p className="mt-6 text-base text-ink-soft sm:mt-8 sm:text-lg">
                Kennedy founded Operon Systems to bring the discipline of operations and the craft
                of software engineering into the same conversation. He leads delivery on every
                engagement, working directly with operations leaders to make sure each system
                reflects how their business actually runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="container-page py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl text-background sm:text-5xl">
              Let's talk about your operations.
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
