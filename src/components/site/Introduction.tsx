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
              Relationships earned over 25 years
              <span className="text-gold italic">&nbsp;—&nbsp;</span>
              and a lawyer who drafts the bill himself.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
              <p className="text-lg leading-relaxed text-foreground-2">
                I've worked the Connecticut Capitol since 1998. The
                relationships I rely on were built across both parties, in
                the Legislature and the agencies, the slow way: through
                trust earned session after session, not access rented for a
                single one. That's the foundation of everything I do for
                clients.
              </p>
              <p className="text-lg leading-relaxed text-foreground-2">
                What I build on it sets me apart: I'm also the attorney who
                drafts the bill, the amendment, and the testimony myself.
                Clients get the access and the precision — a strategy
                that's sound the moment it's written, not after outside
                counsel weighs in a week later.
              </p>
            </div>

            {/* Marginalia row — three small data points */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 max-w-3xl">
              <Stat label="At the Capitol Since" value="1998" />
              <Stat label="Capitol Relationships" value="Bipartisan" />
              <Stat label="Engagement Model" value="Principal-Direct" />
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
