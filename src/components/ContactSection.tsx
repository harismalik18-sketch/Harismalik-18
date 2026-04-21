import { useState } from "react";

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
  </svg>
);

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", projectType: "", date: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          date: formData.date,
          message: formData.message,
          _replyto: formData.email,
          _subject: "New Enquiry from HarryMalik.com",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full border border-border px-[18px] py-[14px] font-body text-[13px] text-text-black bg-background focus:outline-none focus:border-wine transition-colors duration-300 rounded-none";

  return (
    <section id="contact" className="section-padding bg-wine">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left */}
        <div className="flex-1 lg:pr-[60px]" data-aos="fade-up">
          <p className="font-body text-[9px] uppercase tracking-[5px]" style={{ color: "rgba(255,255,255,0.55)" }}>
            Get in Touch
          </p>
          <h2 className="font-display text-[36px] md:text-[44px] text-primary-foreground mt-4 leading-tight">
            Begin Your Project
          </h2>
          <div className="w-12 h-[1.5px] my-7" style={{ background: "rgba(255,255,255,0.3)" }} />
          <p className="font-body text-[15px] font-light leading-[1.9]" style={{ color: "rgba(255,255,255,0.7)" }}>
            We respond within 24 hours to every serious enquiry. All projects are treated with complete
            professionalism and discretion from the first conversation.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a href="tel:+919997800473" className="flex items-center gap-4 group">
              <WhatsAppIcon />
              <span className="font-body text-[13px] text-primary-foreground group-hover:opacity-80 transition-opacity duration-300">+91 9997800473</span>
            </a>
            <a href="mailto:contact@harrymalik.com" className="flex items-center gap-4 group">
              <MailIcon />
              <span className="font-body text-[13px] text-primary-foreground group-hover:opacity-80 transition-opacity duration-300">contact@harrymalik.com</span>
            </a>
            <a href="https://www.instagram.com/harrymalikproductions_?igsh=eW9ib2d1Y2d2bGtt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <InstagramIcon />
              <span className="font-body text-[13px] text-primary-foreground group-hover:opacity-80 transition-opacity duration-300">@harrymalikproductions_</span>
            </a>
          </div>

          <p className="font-body italic text-[12px] mt-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            * Pricing is bespoke and shared only after understanding your project.
          </p>
        </div>

        {/* Right - Form */}
        <div className="w-full lg:w-[520px] flex-shrink-0" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-background p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-12 h-[1.5px] mb-6" style={{ background: "#6B0F1A" }} />
                <p className="font-display italic text-[18px] leading-[1.7]" style={{ color: "#6B0F1A" }}>
                  Thank you for reaching out. Harry will personally respond within 24 hours.
                </p>
                <div className="w-12 h-[1.5px] mt-6" style={{ background: "#6B0F1A" }} />
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_subject" value="New Enquiry from HarryMalik.com" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className={inputClass}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={inputClass}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <select
                    name="projectType"
                    className={inputClass}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    required
                  >
                    <option value="">Project Type</option>
                    <option>Celebrity Portrait Shoot</option>
                    <option>Award Ceremony Coverage</option>
                    <option>Brand Campaign</option>
                    <option>Red Carpet Event</option>
                    <option>Private Event Film</option>
                    <option>Video Editing</option>
                    <option>Custom Package</option>
                  </select>
                  <input
                    type="text"
                    name="date"
                    placeholder="Preferred Date or Timeline"
                    className={inputClass}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision, event, or project in as much detail as possible..."
                  className={`${inputClass} min-h-[120px] resize-none mb-4`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                {error && (
                  <p className="font-body text-[13px] text-red-500 mb-4">
                    Something went wrong. Please email us directly at{" "}
                    <a href="mailto:contact@harrymalik.com" className="underline">contact@harrymalik.com</a>
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-background border-2 border-wine text-wine font-body text-[12px] uppercase tracking-[3px] font-medium py-[18px] hover:bg-cream transition-colors duration-300 rounded-none disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Request a Private Consultation"}
                </button>
              </form>
            )}
          </div>
          <p className="text-center font-body italic text-[11px] mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            * We respond within 24 hours. Serious enquiries only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
