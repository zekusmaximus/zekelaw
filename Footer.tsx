/**
 * Footer — quiet, editorial, with monogram, quick links, and disclaimer.
 */
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[var(--ink-deep)] border-t border-border">
      {/* Top hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 flex items-center justify-center border border-[var(--gold)]">
                <span
                  className="font-display text-2xl text-[var(--gold)] italic"
                  style={{ lineHeight: 1 }}
                >
                  Z
                </span>
              </div>
              <div>
                <p className="font-display text-lg text-foreground leading-tight">
                  Law Offices of Jeffrey Zyjeski
                </p>
                <p className="kicker-muted mt-1">Attorney &amp; GR Counsel</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Independent government relations and administrative law counsel
              for established corporations, trade associations, and highly
              regulated industries before the Connecticut General Assembly
              and Executive Branch.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="kicker mb-5">Practice</p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Practice Areas", href: "#services" },
                { label: "Credentials", href: "#credentials" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-foreground-2 hover:text-[var(--gold)] transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <p className="kicker mb-5">Direct Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18606909273"
                  className="group flex items-center gap-3 text-foreground hover:text-[var(--gold)] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-[var(--gold)]" strokeWidth={1.5} />
                  <span className="font-mono text-sm tracking-wider">
                    (860) 690-9273
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jeff@zyjeski.com"
                  className="group flex items-center gap-3 text-foreground hover:text-[var(--gold)] transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-[var(--gold)]" strokeWidth={1.5} />
                  <span className="font-mono text-sm tracking-wider">
                    jeff@zyjeski.com
                  </span>
                </a>
              </li>
              <li>
                <p className="kicker-muted mt-6">Hartford, Connecticut</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
            &copy; {year} The Law Offices of Jeffrey Zyjeski. Attorney
            advertising. The information on this website is for general
            informational purposes only. Nothing on this site should be taken
            as legal advice for any individual case or situation. The receipt
            of, or access to, this information does not create an
            attorney-client relationship.
          </p>
          <p className="kicker-muted shrink-0">Hartford &middot; Est. 1998</p>
        </div>
      </div>
    </footer>
  );
}
