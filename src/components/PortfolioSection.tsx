const portfolioItems = [
  { title: "Celebrity Portrait", category: "Portrait & Editorial", span: "row-span-2" },
  { title: "Award Ceremony Film", category: "Events & Functions", span: "" },
  { title: "Brand Campaign", category: "Commercial & Brand", span: "" },
  { title: "Red Carpet Coverage", category: "Red Carpet & Press", span: "" },
  { title: "Behind the Scenes", category: "Documentary", span: "" },
  { title: "Cinematic Reel", category: "Film & Motion", span: "" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="max-w-[1200px] mx-auto text-center" data-aos="fade-up">
      <p className="label-text">Selected Work</p>
      <h2 className="heading-display mt-4">The Portfolio</h2>
      <div className="wine-line mx-auto" />
      <p className="body-text max-w-[520px] mx-auto text-center">
        A curated selection from years of exclusive commissions. Full portfolio available upon request.
      </p>
    </div>

    <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-[3px]" data-aos="fade-up" data-aos-delay="200">
      {portfolioItems.map((item, i) => (
        <div
          key={i}
          className={`relative group overflow-hidden cursor-pointer ${
            item.span || ""
          } ${i === 0 ? "min-h-[400px] md:min-h-0" : "min-h-[250px]"}`}
          style={{
            background: i === 0
              ? "linear-gradient(180deg, #1a0508, #0d0508)"
              : "linear-gradient(180deg, #1a0508, #0d0d0d)",
          }}
        >
          {/* Default label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-body text-[10px] uppercase"
              style={{ letterSpacing: "3px", color: "rgba(255,255,255,0.3)" }}
            >
              {item.title}
            </span>
          </div>

          {/* Hover overlay */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-out"
            style={{ background: "rgba(107,15,26,0.88)" }}
          >
            <span className="font-display text-[18px] italic text-primary-foreground">{item.title}</span>
            <span
              className="font-body text-[10px] uppercase mt-2"
              style={{ letterSpacing: "2px", color: "rgba(255,255,255,0.65)" }}
            >
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
      <a href="#portfolio" className="btn-outline inline-block">
        View Full Portfolio →
      </a>
    </div>
  </section>
);

export default PortfolioSection;
