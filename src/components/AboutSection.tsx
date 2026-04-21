const PersonIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const AboutSection = () => (
  <section id="about" className="section-padding bg-cream">
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
      {/* Left - Photo */}
      <div className="w-full lg:w-[45%] flex-shrink-0 relative" data-aos="fade-up">
        <div
          className="w-full flex items-center justify-center"
          style={{
            aspectRatio: "4/5",
            background: "linear-gradient(180deg, #1a0508, #2d0a10)",
          }}
        >
          <PersonIcon />
        </div>
        {/* Badge */}
        <div className="absolute bottom-6 right-6 bg-wine p-4 px-5 flex flex-col items-center">
          <span className="font-display text-[28px] italic text-primary-foreground leading-none">8+</span>
          <span
            className="font-body text-[9px] uppercase mt-1"
            style={{ letterSpacing: "2px", color: "rgba(255,255,255,0.85)" }}
          >
            Years
          </span>
        </div>
      </div>

      {/* Right - Content */}
      <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
        <p className="label-text">Behind the Lens</p>
        <h2 className="heading-display mt-4">Harry Malik</h2>
        <div className="wine-line" />
        <p className="body-text mb-4">
          With over eight years of experience working alongside India's most celebrated artists and
          brands, Harry Malik has built a reputation for delivering visual work that transcends
          ordinary content.
        </p>
        <p className="body-text mb-8">
          His lens has covered Bollywood premieres, national award ceremonies, luxury brand launches,
          and intimate celebrity commissions — each treated with the same precision, artistry, and
          discretion.
        </p>

        {/* Pull quote */}
        <blockquote className="border-l-2 border-wine pl-6 my-8">
          <p className="font-display italic text-[19px] text-text-black leading-[1.6]">
            "Every frame I create is a permanent record of a moment that will never come again. I do
            not take photographs — I make them."
          </p>
        </blockquote>

        <p className="font-body text-[12px] tracking-[1px]" style={{ color: "#888888" }}>
          Based in India · Available for International Projects
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
