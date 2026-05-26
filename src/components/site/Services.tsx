/**
 * Services — practice areas (legislative advocacy + regulatory/agency affairs)
 * above three areas-of-focus cards.
 * Numbered with display-italic numerals (01, 02) and bordered with hairline gold.
 */
import { useReveal } from "@/hooks/useReveal";
import {
  Landmark,
  ScrollText,
  Truck,
  Scale,
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
    title: "Direct Legislative Advocacy",
    body: "The Connecticut General Assembly is a complex ecosystem. I provide sophisticated legislative strategy, from drafting statutory language and building committee alliances to neutralizing adverse legislation before it gains momentum.",
    bullets: [
      "Statutory drafting and amendment strategy",
      "Committee testimony and coalition building",
      "Particular depth before the Judiciary and Transportation Committees",
    ],
  },
  {
    id: "regulatory",
    index: "02",
    icon: ScrollText,
    title: "Regulatory & Agency Affairs",
    body: "For regulated industries, the executive branch and state agencies matter as much as the Legislature. I help clients engage agencies, shape rulemaking, and stay ahead of regulatory developments before they harden into binding rules.",
    bullets: [
      "Rulemaking advocacy and public-comment strategy",
      "Agency engagement and executive-branch relations",
      "Regulatory monitoring and early-warning analysis",
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
    icon: Scale,
    title: "Civil Justice & the Courts",
    body: "Counsel-grade fluency in the issues that move through the Judiciary Committee: civil justice and liability policy, court rules, and the litigation environment. A depth few non-lawyer advocates can match.",
  },
  {
    icon: Truck,
    title: "Transportation & Infrastructure",
    body: "Strategy on state transportation regulation, infrastructure and bonding, highway user fees, and the policy questions facing logistics, mobility, and transportation firms.",
  },
  {
    icon: Building2,
    title: "Professional & Trade Associations",
    body: "Advocacy for legal, medical, and trade associations on licensure, scope of practice, and the standards that define how their members operate.",
  },
];

export default function Services() {
  const { ref: rH, isVisible: vH } = useReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="section bg-ink overflow-hidden"
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
            <span className="italic text-gold">Relationships first.</span>{" "}
            Statutory craft second. Both, every time.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-2 max-w-3xl">
            I work where the law meets public policy in Connecticut.
            Because clients work directly with me — not a team, not a
            handoff — the work is characterized by personal stewardship,
            sound strategy, and the precision of statutory language
            written by the lawyer who's also at the table.
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
            <span className="kicker">Areas of Focus</span>
            <span className="gold-rule flex-1 max-w-[140px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industries.map((i, idx) => (
              <IndustryCard key={i.title} {...i} delay={idx * 80} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="kicker mb-4">Engagement</p>
            <p className="display-l text-foreground">
              When a legislative or regulatory threat is really a legal
              problem in disguise, you want it in front of someone who can
              see both at once.{" "}
              <span className="italic text-gold">Let's talk.</span>
            </p>
          </div>
          <a href="#contact" className="btn-gold shrink-0 self-start md:self-end">
            Start the Conversation
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
