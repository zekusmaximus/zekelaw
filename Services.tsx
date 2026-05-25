/**
 * Services — "Strategic Advocacy. Rigorous Legal Counsel."
 * Two large primary service blocks above three industry-specialty cards.
 * Numbered with display-italic numerals (01, 02) and bordered with hairline gold.
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Landmark,
  ScrollText,
  Truck,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICES_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/120221426/MLsbjyUgrfc9mwnDpd5w8d/services-bg-chamber-59KmHGkCt9dSMnxanvSQsN.webp";

interface PrimaryService {
  id: string;
  index: string;
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
}

const primary: PrimaryService[] = [
  {
    id: "legislative",
    index: "01",
    icon: Landmark,
    title: "Direct Legislative Lobbying",
    body: "The Connecticut General Assembly is a complex ecosystem. We provide sophisticated legislative strategy — from drafting statutory language and securing committee alliances to neutralizing adverse legislation.",
    bullets: [
      "Statutory drafting & amendment strategy",
      "Committee testimony & coalition building",
      "Specialized depth before Judiciary and Transportation Committees",
    ],
  },
  {
    id: "administrative",
    index: "02",
    icon: ScrollText,
    title: "Administrative Law & Regulatory Counsel",
    body: "For highly regulated industries, the Executive Branch and state agencies are just as critical as the Legislature. We represent clients facing regulatory scrutiny and intervene in agency rulemaking processes.",
    bullets: [
      "Agency rulemaking interventions",
      "Formal representation in administrative hearings",
      "Regulatory scrutiny & enforcement defense",
    ],
  },
];

interface IndustrySpec {
  icon: LucideIcon;
  title: string;
  body: string;
}

const industries: IndustrySpec[] = [
  {
    icon: Truck,
    title: "Transportation Policy",
    body: "Navigating state regulations, infrastructure funding, and highway user fees for logistics and transportation firms.",
  },
  {
    icon: ShieldCheck,
    title: "Consumer Protection",
    body: "Strategic guidance for consumer brands facing regulatory oversight in Connecticut.",
  },
  {
    icon: Building2,
    title: "Professional Associations",
    body: "Advocacy and counsel for legal, medical, and trade associations regarding licensure, scope of practice, and industry standards.",
  },
];

export default function Services() {
  const { ref: rH, isVisible: vH } = useReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="relative py-24 lg:py-36 bg-ink overflow-hidden"
    >
      {/* Background atmospheric image */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)] via-transparent to-[var(--ink)]" />

      <div className="container relative">
        {/* Header */}
        <div
          ref={rH}
          className={`max-w-4xl reveal-up ${vH ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="kicker-num">§ III</span>
            <span className="gold-rule" />
            <span className="kicker-muted">Practice Areas</span>
          </div>
          <h2 className="display-xl text-foreground">
            Strategic advocacy.{" "}
            <span className="italic text-gold">
              Rigorous legal counsel.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-2 max-w-3xl">
            We focus strictly on where the law meets public policy. Because
            clients work directly with a partner-level veteran, our services
            are characterized by high-level strategic advisory and precise
            execution.
          </p>
        </div>

        {/* Primary services — two large numbered blocks */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
          {primary.map((s, idx) => (
            <PrimaryCard key={s.id} {...s} delay={idx * 100} />
          ))}
        </div>

        {/* Industry specialties — three smaller cards */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="kicker">Specialized Industry Expertise</span>
            <span className="gold-rule flex-1 max-w-[140px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((i, idx) => (
              <IndustryCard key={i.title} {...i} delay={idx * 80} />
            ))}
          </div>

          <p className="mt-12 text-sm text-muted-foreground italic max-w-2xl font-display">
            Additional counsel available in Criminal Law and Landlord/Tenant
            matters.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="kicker mb-4">Engagement</p>
            <p className="display-l text-foreground">
              Discuss your regulatory needs in a{" "}
              <span className="italic text-gold">
                confidential consultation.
              </span>
            </p>
          </div>
          <a href="#contact" className="btn-gold shrink-0 self-start md:self-end">
            Begin the Conversation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PrimaryCard({
  index,
  icon: Icon,
  title,
  body,
  bullets,
  delay,
}: PrimaryService & { delay: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`service-card service-card--lg reveal-up ${
        isVisible ? "is-visible" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="display-numeral">{index}</span>
        <Icon
          className="w-6 h-6 text-gold mt-3"
          strokeWidth={1.25}
        />
      </div>
      <h3 className="display-l text-foreground mb-5">{title}</h3>
      <p className="text-base leading-relaxed text-foreground-2 mb-8">
        {body}
      </p>
      <ul className="space-y-3">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <span className="text-gold mt-1.5 shrink-0">
              <span className="block w-3 h-px bg-gold" />
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustryCard({
  icon: Icon,
  title,
  body,
  delay,
}: IndustrySpec & { delay: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`service-card reveal-up ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Icon
        className="w-7 h-7 text-gold mb-6"
        strokeWidth={1.25}
      />
      <h4 className="font-display text-2xl text-foreground mb-3 leading-tight">
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
