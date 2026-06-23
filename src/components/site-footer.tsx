import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-[#0a1424] text-white">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-12 sm:px-6 sm:py-16 md:grid-cols-4 md:px-10 md:gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-sm bg-white p-2">
              <img src="/operon-logo.png" alt="Operon Systems" className="h-8 w-auto" decoding="async" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em]">
              Operon Systems
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:mt-6">
            Operational systems, workflow digitization and ERP modernization for
            organizations that have outgrown generic software.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50 sm:text-[11px]">
            Company
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80 sm:mt-4">
            <li><Link to="/overview" className="hover:text-white">Overview</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
            <li><Link to="/why-us" className="hover:text-white">Why Operon</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50 sm:text-[11px]">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80 sm:mt-4">
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

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-5 py-5 text-[10px] uppercase tracking-[0.22em] text-white/50 sm:px-6 sm:flex-row sm:items-center md:px-10 md:py-6">
          <span>© {new Date().getFullYear()} Operon Systems</span>
          <span>Capability Statement · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
