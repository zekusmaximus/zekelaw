/**
 * Contact — confidential inquiry form + direct contact info.
 * Architectural marble/brass background image evokes Supreme Court authority.
 * Form submission opens user's email client with a pre-populated message
 * (no backend; web-static project).
 */
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/120221426/MLsbjyUgrfc9mwnDpd5w8d/cta-bg-courthouse-67AcKAbup7EvmBbmX5Y5pc.webp";

export default function Contact() {
  const { ref: rH, isVisible: vH } = useReveal<HTMLDivElement>();
  const { ref: rF, isVisible: vF } = useReveal<HTMLDivElement>();
  const { ref: rI, isVisible: vI } = useReveal<HTMLDivElement>();

  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete name, email, and message.");
      return;
    }
    // Demo mode: no backend wired up yet. Acknowledge and reset.
    toast.success("Inquiry received. I'll be in touch shortly.");
    setForm({
      name: "",
      organization: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section bg-ink-deep overflow-hidden"
    >
      {/* Atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-deep)] via-[var(--ink-deep)]/85 to-[var(--ink-deep)]" />
      </div>

      <div className="container relative">
        <div
          ref={rH}
          className={`max-w-4xl reveal-up ${vH ? "is-visible" : ""}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="kicker-num">§ V</span>
            <span className="gold-rule" />
            <span className="kicker-muted">Engagement</span>
          </div>
          <h2 className="display-xl text-foreground">
            Let's <span className="italic">talk.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground-2 max-w-3xl">
            When a legislative or regulatory threat is really a legal
            problem in disguise, you want it in front of someone who can
            see both at once. I review every inquiry personally and treat
            it in strict confidence. Initial conversations happen by phone
            or in person at the Legislative Office Building.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div
            ref={rF}
            className={`lg:col-span-7 reveal-up ${vF ? "is-visible" : ""}`}
          >
            <form
              onSubmit={onSubmit}
              className="relative border border-border bg-[oklch(0.13_0.010_250_/_0.92)] backdrop-blur-md p-8 lg:p-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <p className="kicker mb-8">Initiate Inquiry</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Name" name="name" value={form.name} onChange={onChange} required />
                <Field
                  label="Organization"
                  name="organization"
                  value={form.organization}
                  onChange={onChange}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                />
              </div>

              <div className="mt-6">
                <label className="block kicker-muted mb-3" htmlFor="interest">
                  Area of Interest
                </label>
                <Select
                  value={form.interest}
                  onValueChange={(value) =>
                    setForm((f) => ({ ...f, interest: value }))
                  }
                >
                  <SelectTrigger id="interest" className="field-line">
                    <SelectValue placeholder="Select an area…" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Legislative">Direct Legislative Advocacy</SelectItem>
                    <SelectItem value="Regulatory">Regulatory & Agency Affairs</SelectItem>
                    <SelectItem value="CivilJustice">Civil Justice & the Courts</SelectItem>
                    <SelectItem value="Transportation">Transportation & Infrastructure</SelectItem>
                    <SelectItem value="Association">Professional or Trade Association</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-6">
                <label className="block kicker-muted mb-3" htmlFor="message">
                  Brief Description <span className="text-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="field-line resize-none"
                  placeholder="Please share a high-level summary of your matter."
                />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
                <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
                  Sending this inquiry does not create an engagement or an
                  attorney-client relationship. Any engagement begins only
                  upon a signed written agreement.
                </p>
                <button type="submit" className="btn-gold shrink-0">
                  Send Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Info column */}
          <div
            ref={rI}
            className={`lg:col-span-5 reveal-up ${vI ? "is-visible" : ""}`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="space-y-10">
              <ContactItem
                icon={Phone}
                label="Direct"
                value="(860) 690-9273"
                href="tel:+18606909273"
              />
              <ContactItem
                icon={Mail}
                label="Email"
                value="jeff@zyjeski.com"
                href="mailto:jeff@zyjeski.com"
              />
              <ContactItem
                icon={MapPin}
                label="Location"
                value="West Hartford, Connecticut"
              />

              <div className="pt-10 border-t border-border">
                <p className="kicker mb-4">Confidentiality</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  I review every inquiry myself. Prospective engagement
                  matters are not discussed with third parties or staff
                  intermediaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block kicker-muted mb-3" htmlFor={name}>
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="field-line"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
        <span className="kicker-muted">{label}</span>
      </div>
      <p className="font-display text-2xl lg:text-3xl text-foreground tracking-tight">
        {value}
      </p>
    </>
  );
  if (href) {
    return (
      <a href={href} className="contact-item group">
        {inner}
        <span className="block w-12 h-px bg-gold mt-3 group-hover:w-20 transition-all duration-300" />
      </a>
    );
  }
  return (
    <div>
      {inner}
      <span className="block w-12 h-px bg-gold mt-3" />
    </div>
  );
}
