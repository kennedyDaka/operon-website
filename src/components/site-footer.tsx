import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#0a1424] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-sm bg-white p-2">
              <img src="/operon-logo.svg" alt="Operon Systems" className="h-8 w-auto" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">
              Operon Systems
            </span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            Operational systems, workflow digitization and ERP modernization for
            organizations that have outgrown generic software.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/overview" className="hover:text-white">Overview</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
            <li><Link to="/why-us" className="hover:text-white">Why Operon</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>hello@operonsystems.com</li>
            <li>
              <a href="tel:+265882575364" className="hover:text-white">
                +265 882 575 364
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/265993693215"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp +265 993 693 215
              </a>
            </li>
            <li>Blantyre CBD, Malawi</li>
            <li><Link to="/contact" className="hover:text-white">Book a consultation →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-6 py-6 text-[11px] uppercase tracking-[0.22em] text-white/50 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Operon Systems</span>
          <span>Capability Statement · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
