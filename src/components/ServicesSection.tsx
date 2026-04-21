import { useState } from "react";
import ServiceInquiryModal from "./ServiceInquiryModal";

const services = [
  { num: "01", title: "Celebrity Photography", desc: "Iconic portraits and editorial sittings for artists, actors, and public figures.", tag: "Portrait & Editorial" },
  { num: "02", title: "Event Cinematography", desc: "Cinematic full-coverage films for award nights, galas, launches, and private celebrations.", tag: "Events & Functions" },
  { num: "03", title: "Brand Campaign Films", desc: "High-end commercial photography and videography for luxury and premium brands.", tag: "Commercial & Brand" },
  { num: "04", title: "Red Carpet Coverage", desc: "Professional and discreet photo and video coverage of high-profile arrivals and media events.", tag: "Red Carpet & Press" },
  { num: "05", title: "Cinematic Video Editing", desc: "Premium post-production — colour grading, music scoring, and narrative editing.", tag: "Post-Production" },
  { num: "06", title: "Custom Packages", desc: "Multi-day shoots, international projects, and full media production packages by arrangement.", tag: "By Consultation Only" },
  { num: "07", title: "Wedding Photography & Film", desc: "Cinematic wedding photography and films crafted to capture every emotion, detail, and moment with elegance. From intimate ceremonies to grand celebrations — including social media highlight clips and luxury storytelling edits.", tag: "Wedding & Celebrations" },
];

const ServicesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleCardClick = (title: string) => {
    setSelectedService(title);
    setModalOpen(true);
  };

  return (
    <>
      <section id="services" className="section-padding bg-background">
        <div className="max-w-[1200px] mx-auto text-center" data-aos="fade-up">
          <p className="label-text">What We Offer</p>
          <h2 className="heading-display mt-4">Services</h2>
          <div className="wine-line mx-auto" />
          <p className="body-text max-w-[520px] mx-auto">
            Every service is a private commission. Pricing is bespoke — shared only after consultation.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border" data-aos="fade-up" data-aos-delay="200">
          {services.map((s) => (
            <div
              key={s.num}
              onClick={() => handleCardClick(s.title)}
              className="bg-background p-10 border border-border hover:border-t-2 hover:border-t-wine hover:bg-cream transition-all duration-300 group cursor-pointer"
            >
              <span className="font-display text-[40px] italic leading-none" style={{ color: "hsl(var(--wine) / 0.12)" }}>
                {s.num}
              </span>
              <h3 className="font-body text-[12px] uppercase tracking-[3px] text-text-black mt-5 font-normal">
                {s.title}
              </h3>
              <p className="font-body text-[13px] font-light text-text-gray leading-[1.8] mt-3">
                {s.desc}
              </p>
              <span
                className="inline-block font-body text-[9px] uppercase tracking-[2px] text-wine-medium border border-border px-3 py-[5px] mt-5"
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ServiceInquiryModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        serviceName={selectedService}
      />
    </>
  );
};

export default ServicesSection;
