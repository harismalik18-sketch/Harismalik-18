import { useEffect, useRef, useState } from "react";

const clientTypes = [
  "Bollywood and Film Industry Artists",
  "National and International Award Ceremonies",
  "Luxury and Premium Brand Campaigns",
  "High-Profile Corporate and Private Events",
  "Music Artists and Entertainment Professionals",
];

const stats = [
  { value: 8, suffix: "+", label: "Years of Excellence", duration: 1500 },
  { value: 200, suffix: "+", label: "Projects Delivered", duration: 2000 },
  { value: 50, suffix: "+", label: "Celebrity Clients", duration: 1800 },
  { value: 100, suffix: "%", label: "Client Satisfaction", duration: 2000 },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;
    const startTime = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return count;
}

const StatItem = ({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) => {
  const count = useCountUp(stat.value, stat.duration, inView);
  const showSuffix = inView && count === stat.value;

  return (
    <div
      className="flex flex-col items-center justify-center py-8"
      style={{
        borderRight: index % 2 === 0 ? "1px solid rgba(255,255,255,0.15)" : "none",
        borderBottom: index < 2 ? "1px solid rgba(255,255,255,0.15)" : "none",
      }}
    >
      <span className="font-display text-[52px] italic text-primary-foreground leading-none">
        {count}{showSuffix ? stat.suffix : ""}
      </span>
      <span
        className="font-body text-[10px] uppercase mt-3 text-center"
        style={{ letterSpacing: "2px", color: "rgba(255,255,255,0.55)" }}
      >
        {stat.label}
      </span>
    </div>
  );
};

const ClienteleSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        <div className="flex-1" data-aos="fade-up">
          <p className="label-text">Clientele</p>
          <h2 className="heading-display mt-4 text-[32px] md:text-[42px]">
            Crafted for Those Who Command Attention
          </h2>
          <div className="wine-line" />
          <p className="body-text mb-4">
            We work exclusively with celebrities, public figures, luxury brands, and organisers of
            high-profile events. Our work is not for everyone — and that is precisely the point.
          </p>
          <p className="body-text mb-8">
            If you understand that visuals are not content but legacy — and if you refuse to settle for
            anything less than cinematic excellence — then we should speak.
          </p>
          <ul className="space-y-4">
            {clientTypes.map((type) => (
              <li key={type} className="flex items-start gap-3 pb-4 border-b border-border">
                <span className="w-[5px] h-[5px] bg-wine mt-[6px] flex-shrink-0" />
                <span className="font-body text-[13px] text-text-black">{type}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-[420px] flex-shrink-0" data-aos="fade-up" data-aos-delay="200">
          <div ref={cardRef} className="bg-wine p-12 grid grid-cols-2 gap-0">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
