import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP_NUMBER = "919997800473";

interface ServiceInquiryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
}

const ServiceInquiryModal = ({ open, onOpenChange, serviceName }: ServiceInquiryModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputClass =
    "w-full border border-border px-[18px] py-[14px] font-body text-[13px] text-text-black bg-background focus:outline-none focus:border-wine transition-colors duration-300 rounded-none";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Build WhatsApp message
    const waMessage = `New Service Inquiry:\nService: ${serviceName}\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || "N/A"}\nMessage: ${formData.message || "N/A"}`;
    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(waMessage)}`;

    // Send to Formspree
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          service: serviceName,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          _subject: `Service Inquiry: ${serviceName} — HarryMalik.com`,
        }),
      });
    } catch {
      // Email send failed silently, WhatsApp still works
    }

    // Open WhatsApp
    window.open(waUrl, "_blank");

    setSubmitted(true);
    setSubmitting(false);
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", email: "", message: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[520px] bg-background border-border p-0 rounded-none">
        <div className="p-8 md:p-10">
          <DialogHeader className="mb-6">
            <DialogDescription className="label-text text-center">Service Inquiry</DialogDescription>
            <DialogTitle className="font-display text-[24px] md:text-[28px] text-text-black text-center mt-2 leading-tight">
              {serviceName}
            </DialogTitle>
            <div className="wine-line mx-auto" />
          </DialogHeader>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-12 h-[1.5px] mb-6 bg-wine" />
              <p className="font-display italic text-[18px] leading-[1.7] text-wine">
                Thank you for your interest. We'll get back to you within 24 hours.
              </p>
              <div className="w-12 h-[1.5px] mt-6 bg-wine" />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  value={serviceName}
                  disabled
                  className={`${inputClass} bg-cream opacity-70`}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address (optional)"
                className={`${inputClass} mb-4`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="Tell us about your vision..."
                className={`${inputClass} min-h-[100px] resize-none mb-4`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-wine text-primary-foreground font-body text-[12px] uppercase tracking-[3px] font-medium py-[18px] hover:bg-wine-medium transition-colors duration-300 rounded-none disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceInquiryModal;
