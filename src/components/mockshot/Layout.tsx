import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  // { label: "Pricing", href: "/#pricing" },
  // { label: "Roadmap", href: "/#roadmap" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHero = pathname === "/";
  const lightNav = onHero && !scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        lightNav
          ? "bg-transparent"
          : "border-b border-gray-100 bg-white/96 shadow-sm backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/logo/app_icon.png"
            alt="MockPixel"
            className="h-8 w-8 rounded-[10px] shadow-sm"
            width={32}
            height={32}
          />
          <span
            className={cn(
              "font-display text-[17px] font-bold tracking-tight",
              lightNav ? "text-white" : "text-gray-900",
            )}
          >
            MockPixel
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                lightNav
                  ? "text-blue-100 hover:text-white"
                  : "text-gray-600 hover:text-gray-900",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className={cn(
              "hidden text-sm font-medium transition-colors md:inline",
              lightNav ? "text-blue-100 hover:text-white" : "text-gray-500 hover:text-gray-900",
            )}
          >
            Contact
          </a>
          <a
            href="/#cta"
            className={cn(
              "inline-flex items-center gap-2 rounded-[10px] px-4 py-2 text-sm font-semibold shadow-sm transition-all hover:shadow-md",
              lightNav
                ? "bg-white text-blue-700 hover:bg-blue-50"
                : "bg-gray-900 text-white hover:bg-gray-800",
            )}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.609 1.814 13.792 12 3.61 22.186a1.978 1.978 0 0 1-.237-.95V2.764c0-.35.087-.68.237-.95zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.81 2.306 1.335c.73.422.73 1.476 0 1.898l-2.306 1.335L15.206 12l2.492-1.113zM5.864 2.658 16.8 8.99l-2.302 2.302L5.864 2.658z" />
            </svg>
            Get on Play
          </a>
          <button
            type="button"
            className={cn(
              "p-2 transition-colors md:hidden",
              lightNav ? "text-white hover:text-blue-100" : "text-gray-600 hover:text-gray-900",
            )}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-3 border-t border-gray-100 bg-white/98 px-6 py-4 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  const cols = [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        // { label: "Roadmap", href: "/#roadmap" },
        { label: "How it Works", href: "/#how-it-works" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Contact", href: "/#contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    {
      heading: "Support",
      links: [
        { label: "Email us", href: "mailto:support@MockPixel.app" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-gray-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link to="/" className="mb-5 flex items-center gap-2.5">
              <img
                src="/logo/app_icon.png"
                alt="MockPixel"
                className="h-8 w-8 rounded-[10px]"
                width={32}
                height={32}
              />
              <span className="font-display text-[17px] font-bold tracking-tight text-white">
                MockPixel
              </span>
            </Link>
            <p className="mb-7 max-w-[260px] text-sm leading-relaxed text-gray-500">
              The mobile-first platform for creating professional App Store screenshots and device
              mockups — from your pocket.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="/#contact"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-gray-500 transition-all hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <div className="mb-5 text-[10.5px] font-bold uppercase tracking-widest text-gray-600">
                {col.heading}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-500 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <div className="text-xs font-medium text-gray-700">
            © 2026 MockPixel. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-gray-700 transition-colors hover:text-gray-400">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-gray-700 transition-colors hover:text-gray-400">
              Terms
            </Link>
            <a
              href="mailto:support@MockPixel.app"
              className="text-xs text-gray-700 transition-colors hover:text-gray-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-gray-900">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
