/**
 * Credentials — bar admissions, leadership roles, and committee specialties.
 * Editorial timeline-style layout. Reinforces the "unassailable legal authority" claim.
 */
import { useReveal } from "@/hooks/useReveal";
import { GraduationCap, Scale, Users, Gavel } from "lucide-react";

const ABOUT_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/120221426/MLsbjyUgrfc9mwnDpd5w8d/about-portrait-corridor-5qgYSSzVGeb8EMWDWNKnsh.webp";

interface Pillar {
  icon: typeof GraduationCap;
  label: string;
  title: string;
  items: string[];
}

const pillars: Pillar[] = [
  {
    icon: Scale,
    label: "Bar Admissions",
    title: "Authority to Practice",
    items: [
      "United States Supreme Court",
      "State of Connecticut",
      "Commonwealth of Massachusetts",
    ],
  },
  {
    icon: Users,
    label: "Leadership",
    title: "Profession & Community",
    items: [
      "Secretary, Connecticut Bar Association",
      "Board Member, CT Lawyers Concerned for Lawyers",
    ],
  },
  {
    icon: Gavel,
    label: "Capitol Specialties",
    title: "Committee Depth",
    items: [
      "Judiciary Committee",
      "Transportation Committee",
      "Administrative rulemaking & hearings",
    ],
  },
  {
    icon: GraduationCap,
    label: "Foundation",
    title: "Capitol Beginnings",
    items: [
      "Staffer, CT Legislature Judiciary Committee (1998)",
      "Two decades at Gaffney, Bennett & Associates",
      "Law Offices of Jay F. Malcynsky, P.C.",
    ],
  },
];

export default function Credentials() {
  const { ref: rH, isVisible: vH } = useReveal<HTMLDivElement>();

  return (
    <section
      id="credentials"
      className="relative py-24 lg:py-36 bg-[var(--ink-deep)] overflow-hidden"
    >
      {/* Side image — corridor */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden xl:block">
        <div className="absolute inset-0 cinematic-vignette">
          <img
            src={ABOUT_BG}
            alt=""
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--ink-deep)]/70 to-[var(--ink-deep)]" />
      </div>

      <div className="container relative">
        <div
          ref={rH}
          className={`max-w-3xl reveal-up ${vH ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--gold)]">
              &sect; IV
            </span>
            <span className="gold-rule" />
            <span className="kicker-muted">Credentials</span>
          </div>
          <h2 className="display-xl text-foreground">
            Politically astute.{" "}
            <span className="italic text-[var(--gold)]">
              Legally unassailable.
            </span>
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {pillars.map((p, i) => (
            <PillarItem key={p.label} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarItem({
  icon: Icon,
  label,
  title,
  items,
  index,
}: Pillar & { index: number }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal-up flex gap-6 ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Numeric / icon column */}
      <div className="shrink-0 flex flex-col items-center gap-3 pt-1">
        <div className="w-12 h-12 border border-[var(--gold)] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[var(--gold)]" strokeWidth={1.25} />
        </div>
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Content column */}
      <div className="flex-1 pb-8">
        <p className="kicker-muted mb-2">{label}</p>
        <h3 className="font-display text-2xl text-foreground mb-5 leading-tight">
          {title}
        </h3>
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base text-[oklch(0.82_0.008_80)] leading-snug"
            >
              <span className="text-[var(--gold)] mt-2.5 shrink-0">
                <span className="block w-2 h-px bg-[var(--gold)]" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
