import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Mail, Phone, MapPin, Linkedin, Facebook, Check, ArrowRight, ArrowLeft, MessageCircle,
  Warehouse, Truck, Utensils, ShoppingBag, Fuel, Egg, GraduationCap, HeartPulse, Building2,
  FileSpreadsheet, Boxes, RefreshCw, Workflow, ServerCog, Sparkles,
  Clock3, Users, CalendarClock, Loader2, AlertCircle,
} from "lucide-react";

import sideImg from "@/assets/analytics.jpg.asset.json";
import { submitContactForm } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Operon Systems" },
      { name: "description", content: "Tell us about your operations in a few quick questions. We'll come back within one business day to set up a working conversation." },
      { property: "og:title", content: "Book a Consultation — Operon Systems" },
      { property: "og:description", content: "A short, guided intake. No pitch — just a working conversation about your operations." },
    ],
  }),
  component: ContactPage,
});

type Answers = {
  industry: string;
  challenge: string;
  current: string;
  size: string;
  timeline: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  notes: string;
};

const INDUSTRIES = [
  { icon: Warehouse, label: "Warehousing & Distribution" },
  { icon: Truck, label: "Logistics & Transport" },
  { icon: Utensils, label: "Hospitality & Restaurants" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Fuel, label: "Fuel Operations" },
  { icon: Egg, label: "Poultry & Agriculture" },
  { icon: GraduationCap, label: "Schools & Institutions" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building2, label: "Something else" },
];

const CHALLENGES = [
  { icon: Boxes, label: "Build a new operational system", desc: "Inventory, POS, ERP, or a workflow our business depends on." },
  { icon: Workflow, label: "Digitize manual processes", desc: "Move paperwork, approvals, and spreadsheets into one connected system." },
  { icon: RefreshCw, label: "Replace an outdated system", desc: "Modernize legacy software and migrate existing data." },
  { icon: ServerCog, label: "Hosting, support & maintenance", desc: "Ongoing managed services for systems already in place." },
  { icon: Sparkles, label: "Not sure yet — we want guidance", desc: "Walk through what's possible with someone who's done it." },
];

const CURRENT = [
  { icon: FileSpreadsheet, label: "Spreadsheets and paperwork" },
  { icon: Boxes, label: "A mix of separate tools" },
  { icon: ServerCog, label: "An older custom system" },
  { icon: RefreshCw, label: "Off-the-shelf software we've outgrown" },
];

const SIZES = ["1–10", "11–50", "51–200", "200+"];
const TIMELINES = ["As soon as possible", "Within 1–3 months", "This quarter", "Just exploring"];

const STEPS = ["Industry", "Goal", "Current systems", "Team & timing", "Your details"] as const;

function ContactPage() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [a, setA] = useState<Answers>({
    industry: "", challenge: "", current: "", size: "", timeline: "",
    name: "", company: "", role: "", email: "", phone: "", notes: "",
  });

  const canNext = useMemo(() => {
    if (step === 0) return !!a.industry;
    if (step === 1) return !!a.challenge;
    if (step === 2) return !!a.current;
    if (step === 3) return !!a.size && !!a.timeline;
    if (step === 4) return !!a.name && !!a.company && !!a.email;
    return false;
  }, [step, a]);

  const progress = ((step + (sent ? 1 : 0)) / STEPS.length) * 100;

  function set<K extends keyof Answers>(key: K, value: Answers[K]) {
    setA((p) => ({ ...p, [key]: value }));
  }

  async function next() {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitting(true);
      setSubmitError(null);
      try {
        await submitContactForm({
          industry: a.industry,
          challenge: a.challenge,
          current_systems: a.current,
          team_size: a.size,
          timeline: a.timeline,
          name: a.name,
          company: a.company,
          role: a.role,
          email: a.email,
          phone: a.phone,
          notes: a.notes,
        });
        setSent(true);
      } catch (error) {
        console.error("Failed to submit form:", error);
        setSubmitError("Something went wrong. Please try again or contact us directly.");
      } finally {
        setSubmitting(false);
      }
    }
  }

  return (
    <>
      {/* Intro */}
      <section className="border-b border-rule bg-surface">
        <div className="container-page py-12 sm:py-16 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Book a Consultation</p>
              <h1 className="mt-4 max-w-3xl text-4xl text-foreground sm:text-5xl lg:text-6xl">
                Five short questions. <span className="italic text-brand">Then we talk.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-ink-soft">
                Tell us a little about your operations so the first conversation is useful from
                minute one. No pitch decks, no sales script — a working session with someone who's
                built systems like yours before.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-flex items-center gap-3 rounded-full border border-rule bg-background px-4 py-2 text-xs text-ink-soft">
                <span className="grid h-2 w-2 place-items-center"><span className="h-2 w-2 rounded-full bg-brand" /></span>
                Replies within one business day
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section>
        <div className="container-page grid gap-10 py-16 lg:grid-cols-12 lg:gap-14 lg:py-20">
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="overflow-hidden rounded-md border border-rule">
                <img src={sideImg.url} alt="Operations team reviewing reporting dashboards" className="h-56 w-full object-cover" />
                <div className="border-t border-rule bg-background p-6">
                  <p className="text-xs uppercase tracking-widest text-ink-soft">What happens next</p>
                  <ol className="mt-4 space-y-4 text-sm text-foreground">
                    <Stepline n="1" title="We review your answers" desc="A real person — not a chatbot." />
                    <Stepline n="2" title="We schedule a 30-minute call" desc="Within one business day." />
                    <Stepline n="3" title="We map your workflows together" desc="You leave with a clear next step." />
                  </ol>
                </div>
              </div>

              <blockquote className="border-l-2 border-brand pl-5">
                <p className="font-serif text-lg italic leading-snug text-foreground">
                  "They listened first, then designed the system around how we already work."
                </p>
                <footer className="mt-3 text-xs uppercase tracking-widest text-ink-soft">
                  Operations Director · Hospitality Group
                </footer>
              </blockquote>
            </div>
          </aside>

          {/* Wizard panel */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-md border border-rule bg-background">
              {/* Progress */}
              <div className="border-b border-rule px-6 py-5 lg:px-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-ink-soft">
                  <span>{sent ? "Complete" : `Step ${step + 1} of ${STEPS.length}`}</span>
                  <span>{sent ? STEPS[STEPS.length - 1] : STEPS[step]}</span>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface">
                  <div className="h-full bg-foreground transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <ol className="mt-4 hidden grid-cols-5 gap-2 text-[11px] sm:grid">
                  {STEPS.map((s, i) => (
                    <li key={s} className={`flex items-center gap-2 ${i <= step || sent ? "text-foreground" : "text-ink-soft"}`}>
                      <span className={`grid h-5 w-5 place-items-center rounded-full border ${i < step || sent ? "border-brand bg-brand text-background" : i === step ? "border-foreground text-foreground" : "border-rule"}`}>
                        {i < step || sent ? <Check className="h-3 w-3" /> : i + 1}
                      </span>
                      <span className="truncate">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Body */}
              <div className="px-6 py-10 lg:px-10 lg:py-12">
                {sent ? (
                  <SentView a={a} />
                ) : (
                  <>
                    {step === 0 && (
                      <StepLayout title="Which best describes your industry?" subtitle="We've built systems across many — pick the closest fit.">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {INDUSTRIES.map((opt) => (
                            <OptionCard key={opt.label} icon={opt.icon} label={opt.label}
                              selected={a.industry === opt.label}
                              onClick={() => set("industry", opt.label)} />
                          ))}
                        </div>
                      </StepLayout>
                    )}

                    {step === 1 && (
                      <StepLayout title="What are you trying to accomplish?" subtitle="If a few apply, choose the most pressing.">
                        <div className="grid gap-3">
                          {CHALLENGES.map((opt) => (
                            <OptionRow key={opt.label} icon={opt.icon} label={opt.label} desc={opt.desc}
                              selected={a.challenge === opt.label}
                              onClick={() => set("challenge", opt.label)} />
                          ))}
                        </div>
                      </StepLayout>
                    )}

                    {step === 2 && (
                      <StepLayout title="What are you using today?" subtitle="A rough picture is fine — we'll dig in on the call.">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {CURRENT.map((opt) => (
                            <OptionCard key={opt.label} icon={opt.icon} label={opt.label}
                              selected={a.current === opt.label}
                              onClick={() => set("current", opt.label)} />
                          ))}
                        </div>
                      </StepLayout>
                    )}

                    {step === 3 && (
                      <StepLayout title="Team size & timing" subtitle="Helps us suggest the right starting point.">
                        <div className="space-y-8">
                          <ChoiceGroup icon={Users} label="People in your operation">
                            {SIZES.map((s) => (
                              <Pill key={s} active={a.size === s} onClick={() => set("size", s)}>{s}</Pill>
                            ))}
                          </ChoiceGroup>
                          <ChoiceGroup icon={CalendarClock} label="When would you like to start?">
                            {TIMELINES.map((t) => (
                              <Pill key={t} active={a.timeline === t} onClick={() => set("timeline", t)}>{t}</Pill>
                            ))}
                          </ChoiceGroup>
                        </div>
                      </StepLayout>
                    )}

                    {step === 4 && (
                      <StepLayout title="Where can we reach you?" subtitle="One business day reply, from a real person.">
                        <div className="grid gap-5">
                          <div className="grid gap-5 sm:grid-cols-2">
                            <Field label="Full name" value={a.name} onChange={(v) => set("name", v)} required />
                            <Field label="Company" value={a.company} onChange={(v) => set("company", v)} required />
                          </div>
                          <div className="grid gap-5 sm:grid-cols-2">
                            <Field label="Role" value={a.role} onChange={(v) => set("role", v)} placeholder="Operations Manager" />
                            <Field label="Work email" type="email" value={a.email} onChange={(v) => set("email", v)} required />
                          </div>
                          <Field label="Phone (optional)" type="tel" value={a.phone} onChange={(v) => set("phone", v)} />
                          <div>
                            <label className="text-sm font-medium text-foreground">Anything else we should know?</label>
                            <textarea
                              rows={4}
                              value={a.notes}
                              onChange={(e) => set("notes", e.target.value)}
                              placeholder="Optional — context, links, or a specific question."
                              className="mt-2 w-full rounded-md border border-rule bg-background px-3 py-3 text-sm text-foreground placeholder:text-ink-soft/70 focus:border-foreground focus:outline-none"
                            />
                          </div>
                          <p className="text-xs text-ink-soft">
                            By submitting, you agree we may contact you about your enquiry. We don't share your details.
                          </p>
                        </div>
                      </StepLayout>
                    )}

                    {/* Footer controls */}
                    <div className="mt-10 flex items-center justify-between border-t border-rule pt-6">
                      <button
                        type="button"
                        onClick={() => setStep(Math.max(0, step - 1))}
                        disabled={step === 0 || submitting}
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-ink-soft hover:text-foreground disabled:opacity-40"
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </button>
                      <div className="flex flex-col items-end gap-2">
                        {submitError && (
                          <div className="flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle className="h-4 w-4" />
                            <span>{submitError}</span>
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={next}
                          disabled={!canNext || submitting}
                          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              {step === STEPS.length - 1 ? "Submit" : "Continue"} <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Direct contact */}
            <div className="mt-10 grid gap-6 rounded-md border border-rule bg-surface p-6 sm:grid-cols-4 lg:p-8">
              <DirectItem icon={Mail} label="Email" value="hello@operonsystems.com" href="mailto:hello@operonsystems.com" />
              <DirectItem icon={Phone} label="Phone" value="+265 882 575 364" href="tel:+265882575364" />
              <DirectItem icon={MessageCircle} label="WhatsApp" value="+265 993 693 215" href="https://wa.me/265993693215" />
              <DirectItem icon={MapPin} label="Office" value="Lilongwe, Malawi" />
              <div className="sm:col-span-4 flex items-center justify-between border-t border-rule pt-5">

                <p className="text-xs uppercase tracking-widest text-ink-soft">Follow</p>
                <div className="flex gap-2">
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                    className="grid h-9 w-9 place-items-center rounded-md border border-rule bg-background hover:bg-surface">
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"
                    className="grid h-9 w-9 place-items-center rounded-md border border-rule bg-background hover:bg-surface">
                    <Facebook className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- bits ---------- */

function Stepline({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-rule font-serif text-xs text-foreground">{n}</span>
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-xs text-ink-soft">{desc}</p>
      </div>
    </li>
  );
}

function StepLayout({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-ink-soft">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function OptionCard({ icon: Icon, label, selected, onClick }: { icon: any; label: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className={`group flex items-center gap-3 rounded-md border p-4 text-left transition-all ${
        selected ? "border-foreground bg-surface ring-1 ring-foreground" : "border-rule bg-background hover:border-ink-soft"
      }`}
    >
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-md ${selected ? "bg-foreground text-background" : "bg-surface text-brand"}`}>
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <span className="text-sm font-medium text-foreground">{label}</span>
      {selected && <Check className="ml-auto h-4 w-4 text-foreground" />}
    </button>
  );
}

function OptionRow({ icon: Icon, label, desc, selected, onClick }: { icon: any; label: string; desc: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className={`flex items-start gap-4 rounded-md border p-5 text-left transition-all ${
        selected ? "border-foreground bg-surface ring-1 ring-foreground" : "border-rule bg-background hover:border-ink-soft"
      }`}
    >
      <span className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-md ${selected ? "bg-foreground text-background" : "bg-surface text-brand"}`}>
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="mt-1 text-sm text-ink-soft">{desc}</p>
      </div>
      <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full border ${selected ? "border-foreground bg-foreground text-background" : "border-rule"}`}>
        {selected && <Check className="h-3 w-3" />}
      </span>
    </button>
  );
}

function ChoiceGroup({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon className="h-4 w-4 text-brand" strokeWidth={1.5} />
        {label}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active ? "border-foreground bg-foreground text-background" : "border-rule bg-background text-foreground hover:bg-surface"
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }:
  { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">
        {label}{required && <span className="text-brand"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full rounded-md border border-rule bg-background px-3 text-sm text-foreground placeholder:text-ink-soft/70 focus:border-foreground focus:outline-none"
      />
    </div>
  );
}

function DirectItem({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 text-brand" strokeWidth={1.5} />
      <div>
        <p className="text-xs uppercase tracking-widest text-ink-soft">{label}</p>
        <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{inner}</a> : <div>{inner}</div>;
}

function SentView({ a }: { a: Answers }) {
  const firstName = a.name.split(" ")[0] || "there";

  const waMessage = [
    `Hi Operon Systems — I just submitted a consultation request.`,
    ``,
    `Name: ${a.name}`,
    a.role ? `Role: ${a.role}` : null,
    `Company: ${a.company}`,
    `Email: ${a.email}`,
    a.phone ? `Phone: ${a.phone}` : null,
    ``,
    `Industry: ${a.industry}`,
    `Goal: ${a.challenge}`,
    `Current systems: ${a.current}`,
    `Team size: ${a.size}`,
    `Timeline: ${a.timeline}`,
    a.notes ? `` : null,
    a.notes ? `Notes: ${a.notes}` : null,
  ].filter(Boolean).join("\n");
  const waHref = `https://wa.me/265993693215?text=${encodeURIComponent(waMessage)}`;

  return (
    <div>
      <div className="rounded-md border border-brand/20 bg-brand-soft px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-background sm:h-12 sm:w-12">
            <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-brand">Request received</p>
            <h2 className="mt-2 text-xl text-foreground sm:text-3xl">Thank you, {firstName}.</h2>
            <p className="mt-3 text-sm text-foreground/80 sm:text-base">
              Your consultation request is in. We'll review the details and reply to{" "}
              <span className="font-medium text-foreground break-words">{a.email}</span> within one business day.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">What happens next</p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-4">
          <NextStep n="1" title="We review your answers" desc="A real person reads through your context — no auto-replies." />
          <NextStep n="2" title="We schedule a 30-min call" desc="You'll get an email with two or three time options." />
          <NextStep n="3" title="We map your workflows" desc="You leave the call with a clear, costed next step." />
        </ol>
      </div>

      <div className="mt-6 rounded-md border border-rule bg-surface p-5 sm:mt-8 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Your summary</p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <Summary label="Industry" value={a.industry} />
          <Summary label="Goal" value={a.challenge} />
          <Summary label="Current systems" value={a.current} />
          <Summary label="Team size" value={a.size} />
          <Summary label="Timeline" value={a.timeline} />
          <Summary label="Company" value={a.company} />
        </dl>
      </div>

      <div className="mt-6 rounded-md border border-accent-warm/30 bg-accent-soft p-5 sm:mt-8 sm:p-6">
        <div className="flex items-start gap-3">
          <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-warm" strokeWidth={1.75} />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Want a faster reply?</p>
            <p className="mt-1 text-sm text-ink-soft">
              Send your summary straight to us on WhatsApp — we'll pick it up sooner.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background hover:opacity-90 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} /> Continue on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-rule pt-6 sm:mt-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm text-ink-soft">
          <Clock3 className="h-4 w-4 text-brand" strokeWidth={1.5} />
          Typical reply time: within one business day.
        </div>
        <a
          href="mailto:hello@operonsystems.com"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-rule bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface sm:w-auto"
        >
          <Mail className="h-4 w-4" strokeWidth={1.5} /> Email us directly
        </a>
      </div>
    </div>
  );
}

function NextStep({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <li className="rounded-md border border-rule bg-background p-5">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-background font-serif text-sm">{n}</span>
      <p className="mt-3 text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm text-ink-soft">{desc}</p>
    </li>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-ink-soft">{label}</dt>
      <dd className="mt-1 text-sm text-foreground">{value || "—"}</dd>
    </div>
  );
}
