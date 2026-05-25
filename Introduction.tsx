/**
 * Introduction — first content section after the hero.
 * Editorial two-column treatment with marginalia on the right.
 */
import { useReveal } from "@/hooks/useReveal";

export default function Introduction() {
  const { ref: r1, isVisible: v1 } = useReveal<HTMLDivElement>();
  const { ref: r2, isVisible: v2 } = useReveal<HTMLDivElement>();

  return (
    <section className="section bg-ink">
      {/* Top hairline rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          {/* Section number + label */}
          <div
            ref={r1}
            className={`col-span-12 lg:col-span-3 reveal-up ${
              v1 ? "is-visible" : ""
            }`}
          >
            <div className="flex lg:flex-col gap-4 lg:gap-3 items-baseline">
              <span className="kicker-num">§ I</span>
              <span className="kicker-muted">Statement of Practice</span>
            </div>
          </div>

          {/* Body */}
          <div
            ref={r2}
            className={`col-span-12 lg:col-span-9 reveal-up ${
              v2 ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <p className="display-xl text-foreground max-w-4xl">
              When high-stakes regulatory scrutiny and legislative challenges
              threaten your organization's objectives, you need more than
              a traditional lobbyist
              <span className="text-gold italic">&nbsp;—&nbsp;</span>
              you need a seasoned legal strategist.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
              <p className="text-lg leading-relaxed text-foreground-2">
                The Law Offices of Jeffrey "Zeke" Zyjeski offers
                independent, elite government relations and administrative law
                counsel. After more than two decades as a key figure at one of
                Connecticut's most prominent legacy firms, Zeke brings the
                institutional knowledge of a Capitol heavyweight combined with
                the un-conflicted, focused attention of a solo practitioner.
              </p>
              <p className="text-lg leading-relaxed text-foreground-2">
                Grounded in high-level legal authority — including
                admission to practice before the United States Supreme Court
                — we deliver direct, partner-level advocacy for
                established corporations, trade associations, and highly
                regulated industries in the Connecticut General Assembly and
                Executive Branch.
              </p>
            </div>

            {/* Marginalia row — three small data points */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 max-w-3xl">
              <Stat label="Practicing Since" value="1998" />
              <Stat label="Capitol Relationships" value="Bipartisan" />
              <Stat label="Engagement Model" value="Partner-Direct" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-gold pl-4">
      <p className="kicker-muted mb-2">{label}</p>
      <p className="font-display text-2xl lg:text-3xl text-foreground tracking-tight">
        {value}
      </p>
    </div>
  );
}
