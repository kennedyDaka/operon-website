import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

import appCss from "../styles.css?url";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/operon-logo.svg" alt="Operon Systems" className="h-11 w-auto object-contain" />
          <span className="text-base font-semibold tracking-tight">Operon Systems</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-ink-soft transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Book a Consultation
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-rule md:hidden"
          >
            <div className="space-y-1">
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-rule md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-ink-soft hover:bg-surface"
                activeProps={{ className: "rounded-md px-2 py-2 text-sm font-medium text-foreground bg-surface" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src="/operon-logo.svg" alt="Operon Systems" className="h-12 w-auto object-contain" />
              <span className="text-base font-semibold tracking-tight">Operon Systems</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-soft">
              Custom operational systems, workflow automation, and software modernization built
              around how your organization actually works.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li><a href="mailto:hello@operonsystems.com" className="hover:text-foreground">hello@operonsystems.com</a></li>
              <li><a href="tel:+265882575364" className="hover:text-foreground">+265 882 575 364</a></li>
              <li><a href="https://wa.me/265993693215" target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp · +265 993 693 215</a></li>
              <li>Lilongwe, Malawi</li>
            </ul>

          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">Connect</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></li>
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a></li>
              <li><Link to="/contact" className="hover:text-foreground">Book a consultation</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-rule pt-6 text-xs text-ink-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Operon Systems. All rights reserved.</p>
          <p>Built around your workflows.</p>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-ink-soft">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-rule bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-surface">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Operon Systems — Show us your workflows. We digitize them." },
      { name: "description", content: "Operon Systems builds custom operational systems, workflow automation, and software modernization for businesses that have outgrown spreadsheets and disconnected tools." },
      { property: "og:title", content: "Operon Systems" },
      { property: "og:description", content: "Custom operational systems, workflow automation, and software modernization built around how your organization actually works." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
