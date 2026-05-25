/**
 * Hero — "Hartford After Dark"
 * - Full-bleed cinematic photograph of CT Capitol at dusk
 * - Lower-third title treatment, left-aligned
 * - Gold kicker rule above headline
 * - Slow Ken Burns drift on the background image
 * - Headline word-stagger reveal
 */
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/120221426/MLsbjyUgrfc9mwnDpd5w8d/hero-capitol-dusk-8gbAPivaDp67KXrgyuB374.png";

const headlineLine1 = ["Elite", "Government", "Relations."];
const headlineLine2 = ["Unassailable", "Legal", "Authority."];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 60);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] flex flex-col overflow-hidden bg-ink-deep"
    >
      {/* Background photograph */}
      <div className="absolute inset-0">
        <div className="ken-burns absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Connecticut State Capitol at dusk"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="split-tone-overlay" />
        <div className="film-grain" />
        {/* Vertical gold rule on far left */}
        <div className="hidden md:block absolute left-6 lg:left-10 top-32 bottom-32 w-px bg-gold opacity-50" />
      </div>

      {/* Top spacer for fixed header */}
      <div className="h-20 lg:h-24 shrink-0" aria-hidden="true" />

      {/* Lower-third content block */}
      <div className="relative flex-1 flex items-end pb-16 lg:pb-24">
        <div className="container w-full">
          <div className="max-w-5xl">
            {/* Kicker */}
            <div
              className={[
                "flex items-center gap-4 mb-6 transition-all duration-700",
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ].join(" ")}
              style={{
                transitionDelay: "120ms",
                transitionTimingFunction: "var(--ease-out-cinematic)",
              }}
            >
              <span className="gold-rule" />
              <span className="kicker">
                Government Relations &amp; Administrative Law — West Hartford, CT
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-xxl text-foreground mb-3">
              <span className="block">
                {headlineLine1.map((word, i) => (
                  <span
                    key={`l1-${i}`}
                    className="inline-block overflow-hidden mr-[0.25em] pb-[0.18em]"
                    style={{ verticalAlign: "top" }}
                  >
                    <span
                      className="inline-block transition-all"
                      style={{
                        transform: mounted
                          ? "translate3d(0,0,0)"
                          : "translate3d(0,110%,0)",
                        opacity: mounted ? 1 : 0,
                        transitionDuration: "900ms",
                        transitionDelay: `${260 + i * 90}ms`,
                        transitionTimingFunction: "var(--ease-out-cinematic)",
                      }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </span>
              <span className="block italic text-gold">
                {headlineLine2.map((word, i) => (
                  <span
                    key={`l2-${i}`}
                    className="inline-block overflow-hidden mr-[0.25em] pb-[0.18em]"
                    style={{ verticalAlign: "top" }}
                  >
                    <span
                      className="inline-block transition-all"
                      style={{
                        transform: mounted
                          ? "translate3d(0,0,0)"
                          : "translate3d(0,110%,0)",
                        opacity: mounted ? 1 : 0,
                        transitionDuration: "900ms",
                        transitionDelay: `${540 + i * 90}ms`,
                        transitionTimingFunction: "var(--ease-out-cinematic)",
                      }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="max-w-2xl mt-8 text-lg lg:text-xl text-foreground-2 leading-relaxed font-light transition-all duration-1000"
              style={{
                transitionDelay: "900ms",
                transitionTimingFunction: "var(--ease-out-cinematic)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,16px,0)",
              }}
            >
              Navigating the intersection of law, regulation, and public
              policy in Connecticut — representing established
              corporations, trade associations, and highly regulated
              industries before the General Assembly and Executive Branch.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12 transition-all duration-1000"
              style={{
                transitionDelay: "1100ms",
                transitionTimingFunction: "var(--ease-out-cinematic)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,16px,0)",
              }}
            >
              <a href="#contact" className="btn-gold">
                Schedule a Confidential Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="btn-ghost">
                The Practice
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right metadata block — admissions */}
      <div
        className="hidden lg:block absolute right-10 bottom-24 z-10 transition-all duration-1000"
        style={{
          transitionDelay: "1300ms",
          transitionTimingFunction: "var(--ease-out-cinematic)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,16px,0)",
        }}
      >
        <div className="border-l border-gold pl-5 py-2 max-w-[300px]">
          <p className="kicker-muted mb-3">Admitted</p>
          <ul className="font-display text-base leading-snug text-foreground space-y-1">
            <li>Connecticut</li>
            <li>Massachusetts</li>
            <li>U.S. Supreme Court</li>
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000"
        style={{
          transitionDelay: "1500ms",
          opacity: mounted ? 0.7 : 0,
        }}
      >
        <span className="kicker-muted text-[10px]">Scroll</span>
        <ChevronDown
          className="w-4 h-4 text-gold animate-bounce"
          style={{ animationDuration: "2.5s" }}
        />
      </div>
    </section>
  );
}
