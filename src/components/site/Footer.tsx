/**
 * Footer — quiet, editorial, with monogram, quick links, and disclaimer.
 */
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink-deep border-t border-border">
      {/* Top hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 flex items-center justify-center border border-gold">
                <span
                  className="font-display text-2xl text-gold italic"
                  style={{ lineHeight: 1 }}
                >
                  Z
                </span>
              </div>
              <div>
                <p className="font-display text-lg text-foreground leading-tight">
                  [FIRM NAME]
                </p>
                <p className="kicker-muted mt-1">Government Relations — Hartford, CT</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Independent government relations for corporations, trade
              associations, and regulated industries before the Connecticut
              General Assembly and the executive branch — led by a Capitol
              veteran who is also the attorney drafting the language.
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
                    className="text-sm text-foreground-2 hover:text-gold transition-colors duration-200"
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
                  className="group flex items-center gap-3 text-foreground hover:text-gold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="font-mono text-sm tracking-wider">
                    (860) 690-9273
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jeff@zyjeski.com"
                  className="group flex items-center gap-3 text-foreground hover:text-gold transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  <span className="font-mono text-sm tracking-wider">
                    jeff@zyjeski.com
                  </span>
                </a>
              </li>
              <li>
                <p className="kicker-muted mt-6">West Hartford, Connecticut</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <p className="text-xs text-muted-foreground max-w-3xl leading-relaxed">
            © {year} [FIRM NAME]. [FIRM NAME] is a government relations and
            lobbying practice. It does not provide legal services, legal
            advice, or legal representation.
          </p>
          <p className="kicker-muted shrink-0">West Hartford · At the Capitol since 1998</p>
        </div>
      </div>
    </footer>
  );
}
