/**
 * About — Decades of Capitol Experience section.
 * Asymmetric layout: large portrait on the left with gold frame; biography on right.
 */
import { useReveal } from "@/hooks/useReveal";

const HEADSHOT = "/zeke-headshot.png";

export default function About() {
  const { ref: r1, isVisible: v1 } = useReveal<HTMLDivElement>();
  const { ref: r2, isVisible: v2 } = useReveal<HTMLDivElement>();
  const { ref: r3, isVisible: v3 } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="section bg-ink-deep overflow-hidden"
    >
      {/* Subtle ornamental capitol-dome SVG watermark */}
      <DomeWatermark />

      <div className="container relative">
        <div className="grid grid-cols-12 gap-x-8 gap-y-16">
          {/* Section header */}
          <div
            ref={r1}
            className={`col-span-12 reveal-up ${v1 ? "is-visible" : ""}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="kicker-num">§ II</span>
              <span className="gold-rule" />
              <span className="kicker-muted">About the Practice</span>
            </div>
            <h2 className="display-xl max-w-4xl text-foreground">
              Decades of Capitol experience.{" "}
              <span className="italic text-gold">
                A foundation in the law.
              </span>
            </h2>
          </div>

          {/* Portrait */}
          <div
            ref={r2}
            className={`col-span-12 lg:col-span-5 reveal-up ${
              v2 ? "is-visible" : ""
            }`}
          >
            <div className="relative">
              {/* Gold offset frame — extends down-right past the image */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold pointer-events-none" />
              <div className="cinematic-vignette relative overflow-hidden bg-[var(--card)]">
                <img
                  src={HEADSHOT}
                  alt="Jeffrey 'Zeke' Zyjeski outside the Connecticut State Capitol"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
              {/* Caption */}
              <div className="mt-5 flex items-start gap-3">
                <span className="gold-rule mt-2 shrink-0" />
                <div>
                  <p className="font-display text-lg text-foreground leading-tight">
                    Jeffrey "Zeke" Zyjeski
                  </p>
                  <p className="kicker-muted mt-1">
                    Attorney &amp; Government Relations Counsel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div
            ref={r3}
            className={`col-span-12 lg:col-span-7 lg:pl-8 reveal-up ${
              v3 ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="space-y-6 text-lg leading-relaxed text-foreground-2">
              <p className="dropcap">
                My career at the Connecticut Capitol began in 1998 as a staffer
                for the Legislature's Judiciary Committee. That foundational
                experience instilled a deep, procedural understanding of how
                laws are drafted, debated, and enacted in Hartford.
              </p>
              <p>
                For more than two decades, I served as a key figure at Gaffney,
                Bennett &amp; Associates and the Law Offices of Jay F.
                Malcynsky, P.C., representing a vast roster of corporate and
                institutional clients. Now, as an independent practitioner, I
                offer clients a distinct advantage: the strategic depth of a
                large-firm veteran, delivered with the agility and direct
                access of a solo practice.
              </p>
              <p>
                I am not just a government relations professional — I am
                an attorney admitted to practice before the United States
                Supreme Court. My commitment to the legal profession extends
                to my leadership roles, having served as{" "}
                <span className="text-foreground">
                  Secretary of the Connecticut Bar Association
                </span>{" "}
                and as a Board member of{" "}
                <span className="text-foreground">
                  Connecticut Lawyers Concerned for Lawyers
                </span>
                .
              </p>
              <p className="font-display italic text-2xl text-foreground leading-snug pt-4 border-t border-border mt-8">
                "This unique combination of legislative mastery and
                elite legal credentials ensures that my clients receive
                advocacy that is not only politically astute but legally
                unassailable."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomeWatermark() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -right-32 top-1/2 -translate-y-1/2 w-[820px] h-[820px] opacity-[0.04] pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized capitol dome silhouette */}
      <path
        d="M100 12 L102 22 L98 22 Z"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
      <line x1="100" y1="22" x2="100" y2="40" stroke="currentColor" strokeWidth="0.5" />
      <ellipse cx="100" cy="48" rx="14" ry="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path
        d="M82 60 Q82 38 100 38 Q118 38 118 60"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
      />
      <line x1="78" y1="60" x2="122" y2="60" stroke="currentColor" strokeWidth="0.5" />
      <rect x="74" y="62" width="52" height="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="68" y1="70" x2="132" y2="70" stroke="currentColor" strokeWidth="0.5" />
      <rect x="58" y="72" width="84" height="44" stroke="currentColor" strokeWidth="0.5" fill="none" />
      {[...Array(7)].map((_, i) => (
        <line
          key={i}
          x1={64 + i * 12}
          y1="72"
          x2={64 + i * 12}
          y2="116"
          stroke="currentColor"
          strokeWidth="0.4"
        />
      ))}
      <rect x="48" y="118" width="104" height="6" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <line x1="40" y1="126" x2="160" y2="126" stroke="currentColor" strokeWidth="0.5" />
      <line x1="36" y1="130" x2="164" y2="130" stroke="currentColor" strokeWidth="0.5" />
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="JetBrains Mono"
        fontSize="6"
        fill="currentColor"
        letterSpacing="0.3em"
      >
        HARTFORD
      </text>
    </svg>
  );
}
