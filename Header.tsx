/**
 * "Hartford After Dark" Header
 * - Charcoal background, gold accent, mono nav links with underline draw-in
 * - Initial monogram JZ in display serif as logo mark
 */
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Practice", href: "#services" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[oklch(0.10_0.008_250_/_0.92)] backdrop-blur-md border-b border-border"
          : "bg-transparent",
      ].join(" ")}
      style={{ transitionTimingFunction: "var(--ease-out-cinematic)" }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo / Monogram */}
          <a
            href="#top"
            className="flex items-center gap-3 group"
            aria-label="Law Offices of Jeffrey Zyjeski"
          >
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center border border-[var(--gold)] transition-colors duration-300 group-hover:bg-[var(--gold)]">
              <span
                className="font-display text-xl lg:text-2xl text-[var(--gold)] group-hover:text-[var(--ink-deep)] transition-colors duration-300 italic"
                style={{ lineHeight: 1 }}
              >
                Z
              </span>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-base lg:text-lg tracking-tight">
                Jeffrey Zyjeski
              </span>
              <span
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground"
                style={{ marginTop: 2 }}
              >
                Attorney &mdash; Counsel
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link font-mono uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+18606909273"
              className="flex items-center gap-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span className="font-mono tracking-wider">(860) 690-9273</span>
            </a>
            <a href="#contact" className="btn-gold btn-gold--sm">
              Consult
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        style={{ transitionTimingFunction: "var(--ease-out-cinematic)" }}
      >
        <div className="container pb-8 pt-2 border-t border-border bg-[oklch(0.10_0.008_250_/_0.96)] backdrop-blur-md">
          <nav className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 font-mono text-sm tracking-wider uppercase text-muted-foreground hover:text-[var(--gold)] transition-colors border-b border-border"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="tel:+18606909273"
              className="flex items-center gap-2 text-sm text-muted-foreground py-2"
            >
              <Phone className="w-4 h-4 text-[var(--gold)]" />
              <span className="font-mono tracking-wider">(860) 690-9273</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-gold justify-center"
            >
              Schedule Consultation
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
