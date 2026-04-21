import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  client: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Harry has an extraordinary ability to capture what others miss — the emotion behind the moment, the energy before the applause. Our event film was nothing short of cinematic.",
    client: "— Confidential Client",
    role: "Leading Bollywood Actor",
  },
  {
    quote:
      "The brand campaign Harry produced for our launch exceeded every expectation. Professional, discreet, and genuinely world-class in every frame.",
    client: "— Confidential Client",
    role: "Director, National Luxury Brand",
  },
  {
    quote:
      "Working with Harry is an experience in itself. He arrives prepared, works with total precision, and delivers an edit that feels like a feature film. Truly in a class of his own.",
    client: "— Confidential Client",
    role: "Award-Winning Music Artist",
  },
];

const firstColumn = [testimonials[0], testimonials[1], testimonials[2]];
const secondColumn = [testimonials[1], testimonials[2], testimonials[0]];
const thirdColumn = [testimonials[2], testimonials[0], testimonials[1]];

const TestimonialsColumn = ({
  testimonials,
  className = "",
  duration = 15,
}: {
  testimonials: Testimonial[];
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, idx) => (
          <React.Fragment key={idx}>
            {testimonials.map((t, i) => (
              <div
                key={`${idx}-${i}`}
                className="bg-cream border border-border p-7 md:p-9 break-inside-avoid"
              >
                <div className="text-wine text-[14px] tracking-[4px]">
                  ★★★★★
                </div>
                <p className="font-display italic text-[15px] text-text-black leading-[1.8] mt-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="w-full h-[1px] bg-border my-6" />
                <p className="font-body text-[10px] uppercase tracking-[3px] text-text-gray">
                  {t.client}
                </p>
                <p className="font-body text-[12px] mt-1 text-muted-foreground">
                  {t.role}
                </p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-background overflow-hidden">
    <div className="max-w-[1200px] mx-auto text-center" data-aos="fade-up">
      <p className="label-text">Client Words</p>
      <h2 className="heading-display mt-4">What They Say</h2>
      <div className="wine-line mx-auto" />
    </div>

    <div
      className="max-w-[1200px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px]"
      data-aos="fade-up"
      data-aos-delay="200"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <TestimonialsColumn testimonials={firstColumn} duration={18} />
      <TestimonialsColumn
        testimonials={secondColumn}
        className="hidden md:block"
        duration={22}
      />
      <TestimonialsColumn
        testimonials={thirdColumn}
        className="hidden lg:block"
        duration={16}
      />
    </div>
  </section>
);

export default TestimonialsSection;
