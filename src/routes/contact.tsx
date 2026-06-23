import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell, PageHero } from "@/components/site-shell";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { submitContactForm } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation" },
      {
        name: "description",
        content:
          "Tell us about your operations in a short guided consultation. Operon Systems will respond within one business day.",
      },
      { property: "og:title", content: "Book a Consultation" },
      {
        property: "og:description",
        content: "A short guided consultation to scope your project.",
      },
    ],
  }),
  component: ContactPage,
});

const PHONE = "0882575364";
const PHONE_INTL = "+265882575364";
const WHATSAPP = "0993693215";
const WHATSAPP_INTL_DIGITS = "265993693215";
const EMAIL = "hello@operonsystems.com";

type FormState = {
  industry: string;
  size: string;
  challenge: string;
  timeline: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  notes: string;
};

const INITIAL: FormState = {
  industry: "",
  size: "",
  challenge: "",
  timeline: "",
  name: "",
  organization: "",
  email: "",
  phone: "",
  notes: "",
};

const INDUSTRIES = [
  "Logistics and Transport",
  "Hospitality",
  "Retail and Distribution",
  "Manufacturing",
  "Financial Services",
  "Public Sector / NGO",
  "Other",
];

const SIZES = [
  "1 – 20 staff",
  "21 – 100 staff",
  "101 – 500 staff",
  "500+ staff",
];

const CHALLENGES = [
  "Paper / spreadsheet workflows",
  "Disconnected systems",
  "Outdated ERP or legacy software",
  "New system from scratch",
  "Process automation",
  "Not sure yet, exploring",
];

const TIMELINES = [
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Just exploring",
];

function ContactPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const steps = [
    { key: "industry", label: "Industry", options: INDUSTRIES },
    { key: "size", label: "Organization size", options: SIZES },
    { key: "challenge", label: "Primary challenge", options: CHALLENGES },
    { key: "timeline", label: "Timeline", options: TIMELINES },
  ] as const;

  const totalSteps = steps.length + 1;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = (k: keyof FormState, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const canAdvance = useMemo(() => {
    if (step < steps.length) {
      const k = steps[step].key as keyof FormState;
      return Boolean(form[k]);
    }
    return Boolean(form.name && form.email);
  }, [step, form, steps]);

  const handleSubmit = async () => {
    if (!canAdvance) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      await submitContactForm({
        industry: form.industry,
        challenge: form.challenge,
        current_systems: "",
        team_size: form.size,
        timeline: form.timeline,
        name: form.name,
        company: form.organization,
        role: "",
        email: form.email,
        phone: form.phone,
        notes: form.notes,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <SiteShell>
        <ConfirmationScreen form={form} />
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Consultation"
        title="Let's Scope Your Project"
        lede="Four quick questions, then your contact details. Takes under two minutes. We respond within one business day."
      />

      <section className="mx-auto max-w-[860px] px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            <span>
              Step {step + 1} of {totalSteps}
            </span>
            <span>
              {step < steps.length ? steps[step].label : "Your Details"}
            </span>
          </div>
          <div className="mt-3 h-[3px] w-full bg-slate-200">
            <div
              className="h-full bg-[#1f4e79] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="border border-slate-200 bg-white p-6 shadow-[0_2px_20px_rgba(15,23,42,0.04)] sm:p-10">
          {step < steps.length ? (
            <ChoiceStep
              question={questionFor(steps[step].key)}
              options={[...steps[step].options]}
              value={form[steps[step].key as keyof FormState]}
              onSelect={(v) =>
                update(steps[step].key as keyof FormState, v)
              }
            />
          ) : (
            <DetailsStep form={form} update={update} />
          )}

          {submitError && (
            <div className="mt-4 border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {submitError}
            </div>
          )}

          {/* Nav */}
          <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-[#0a1424] disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
            {step < totalSteps - 1 ? (
              <button
                type="button"
                onClick={() => canAdvance && setStep((s) => s + 1)}
                disabled={!canAdvance}
                className="inline-flex items-center justify-center gap-2 bg-[#1f4e79] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#16395a] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canAdvance || submitting}
                className="inline-flex items-center justify-center gap-2 bg-[#1f4e79] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#16395a] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {submitting ? "Submitting..." : "Submit Consultation"} <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Alternate channels */}
        <div className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
          <a
            href={`tel:${PHONE_INTL}`}
            className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-[#0a1424] transition-colors hover:border-[#1f4e79]"
          >
            <Phone className="h-4 w-4 text-[#1f4e79]" /> {PHONE}
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_INTL_DIGITS}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-[#0a1424] transition-colors hover:border-[#1f4e79]"
          >
            <MessageCircle className="h-4 w-4 text-[#1f4e79]" /> WhatsApp {WHATSAPP}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 border border-slate-200 bg-white p-4 text-[#0a1424] transition-colors hover:border-[#1f4e79]"
          >
            <Mail className="h-4 w-4 text-[#1f4e79]" /> {EMAIL}
          </a>
        </div>
      </section>
    </SiteShell>
  );
}

function questionFor(key: string) {
  switch (key) {
    case "industry":
      return "Which industry best describes your organization?";
    case "size":
      return "How large is your organization?";
    case "challenge":
      return "What is the primary challenge you want to solve?";
    case "timeline":
      return "When would you like to begin?";
    default:
      return "";
  }
}

function ChoiceStep({
  question,
  options,
  value,
  onSelect,
}: {
  question: string;
  options: string[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-light leading-snug text-[#0a1424] sm:text-3xl">
        {question}
      </h2>
      <div className="mt-6 grid gap-2.5">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={`flex items-center justify-between border px-4 py-4 text-left text-sm transition-colors sm:px-5 ${
                active
                  ? "border-[#1f4e79] bg-[#1f4e79]/5 text-[#0a1424]"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#1f4e79]/50"
              }`}
            >
              <span>{opt}</span>
              {active ? (
                <CheckCircle2 className="h-4 w-4 text-[#1f4e79]" />
              ) : (
                <span className="h-4 w-4 rounded-full border border-slate-300" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DetailsStep({
  form,
  update,
}: {
  form: FormState;
  update: (k: keyof FormState, v: string) => void;
}) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-light leading-snug text-[#0a1424] sm:text-3xl">
        How can we reach you?
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        We'll prepare a short scoping note based on your answers and respond
        within one business day.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          label="Full name *"
          value={form.name}
          onChange={(v) => update("name", v)}
        />
        <Field
          label="Organization"
          value={form.organization}
          onChange={(v) => update("organization", v)}
        />
        <Field
          label="Email *"
          type="email"
          value={form.email}
          onChange={(v) => update("email", v)}
        />
        <Field
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
        />
      </div>
      <Field
        label="Anything else we should know?"
        multiline
        value={form.notes}
        onChange={(v) => update("notes", v)}
      />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  multiline?: boolean;
}) {
  const cls =
    "mt-2 w-full border border-slate-200 bg-white px-4 py-3 text-sm text-[#0a1424] outline-none transition-colors focus:border-[#1f4e79]";
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </span>
      {multiline ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </label>
  );
}

function buildWhatsAppMessage(f: FormState) {
  const lines = [
    "Hello Operon Systems,",
    "",
    "I just submitted a consultation request:",
    `• Name: ${f.name}`,
    f.organization ? `• Organization: ${f.organization}` : "",
    `• Email: ${f.email}`,
    f.phone ? `• Phone: ${f.phone}` : "",
    `• Industry: ${f.industry}`,
    `• Size: ${f.size}`,
    `• Challenge: ${f.challenge}`,
    `• Timeline: ${f.timeline}`,
    f.notes ? `• Notes: ${f.notes}` : "",
    "",
    "Looking forward to your response.",
  ].filter(Boolean);
  return lines.join("\n");
}

function ConfirmationScreen({ form }: { form: FormState }) {
  const waUrl = `https://wa.me/${WHATSAPP_INTL_DIGITS}?text=${encodeURIComponent(
    buildWhatsAppMessage(form),
  )}`;

  const summary: Array<[string, string]> = [
    ["Industry", form.industry],
    ["Size", form.size],
    ["Challenge", form.challenge],
    ["Timeline", form.timeline],
    ["Name", form.name],
    ["Organization", form.organization || "N/A"],
    ["Email", form.email],
    ["Phone", form.phone || "N/A"],
  ];

  return (
    <section className="mx-auto max-w-[860px] px-5 py-12 sm:px-6 sm:py-20 md:px-10">
      <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1f4e79]">
        <span className="h-px w-10 bg-[#1f4e79]" />
        Consultation Received
      </div>
      <h1 className="mt-5 font-serif text-3xl font-light leading-tight text-[#0a1424] sm:text-5xl">
        Thank you, {form.name.split(" ")[0] || "there"}.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Your consultation request has been recorded. A member of the Operon
        Systems team will review your answers and respond within one business
        day at <span className="text-[#0a1424]">{form.email}</span>.
      </p>

      <div className="mt-10 border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 sm:px-6">
          Summary
        </div>
        <dl className="divide-y divide-slate-200">
          {summary.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[120px_1fr] gap-4 px-5 py-3 text-sm sm:grid-cols-[180px_1fr] sm:px-6"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {k}
              </dt>
              <dd className="text-[#0a1424]">{v}</dd>
            </div>
          ))}
          {form.notes ? (
            <div className="grid grid-cols-[120px_1fr] gap-4 px-5 py-3 text-sm sm:grid-cols-[180px_1fr] sm:px-6">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Notes
              </dt>
              <dd className="text-[#0a1424]">{form.notes}</dd>
            </div>
          ) : null}
        </dl>
      </div>

      <div className="mt-10">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f4e79]">
          What happens next
        </h2>
        <ol className="mt-5 space-y-4">
          {[
            "We review your answers and prepare a short scoping note.",
            "We email you within one business day to schedule a 30-minute call.",
            "Together we agree on scope, timeline and next steps, no obligation.",
          ].map((t, i) => (
            <li key={i} className="flex gap-4 text-sm text-slate-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#1f4e79] text-[11px] font-semibold text-[#1f4e79]">
                {i + 1}
              </span>
              <span className="pt-1">{t}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 border border-[#1f4e79]/30 bg-[#0a1424] p-6 text-white sm:p-8">
        <h3 className="font-serif text-xl font-light sm:text-2xl">
          Want a faster response?
        </h3>
        <p className="mt-2 text-sm text-white/75">
          Send your summary to us on WhatsApp, the message is prefilled with
          your answers.
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-3 bg-white px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0a1424] transition-colors hover:bg-[#9fc1de]"
        >
          <MessageCircle className="h-4 w-4" />
          Send via WhatsApp ({WHATSAPP})
        </a>
      </div>

      <div className="mt-10 grid gap-3 text-sm sm:grid-cols-2">
        <Channel icon={Phone} label="Call" value={PHONE} href={`tel:${PHONE_INTL}`} />
        <Channel icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
        <Channel icon={Globe} label="Website" value="www.operonsystems.com" />
        <Channel icon={MapPin} label="Location" value="Blantyre CBD, Malawi" />
        <Channel icon={Linkedin} label="LinkedIn" value="linkedin.com/company/operon-systems" />
        <Channel icon={Facebook} label="Facebook" value="facebook.com/operonsystems" />
      </div>

      <div className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1f4e79] hover:text-[#16395a]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  );
}

function Channel({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 border border-slate-200 bg-white p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1f4e79]/20 bg-[#1f4e79]/5 text-[#1f4e79]">
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {label}
        </div>
        <div className="mt-0.5 truncate text-sm text-[#0a1424]">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-colors hover:[&_div:first-child]:border-[#1f4e79]">
      {inner}
    </a>
  ) : (
    inner
  );
}
