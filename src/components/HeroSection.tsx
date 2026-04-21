const CameraIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-background pt-[72px] lg:pt-0">
      {/* Left - Photo placeholder */}
      <div
        className="w-full lg:w-[58%] h-[50vh] lg:h-screen flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(180deg, #1a0508, #0d0d0d)" }}
      >
        <CameraIcon />
        <span
          className="font-body text-[10px] uppercase mt-4"
          style={{ letterSpacing: "6px", color: "rgba(255,255,255,0.2)" }}
        >
          Harry Malik
        </span>
      </div>

      {/* Right - Content */}
      <div
        className="w-full lg:w-[42%] flex items-center"
        style={{ animation: "slideInRight 0.6s ease-out 0.3s both" }}
      >
        <div className="px-8 md:px-[60px] py-16 lg:py-0">
          <p className="label-text mb-6">Celebrity · Events · Brand · Film</p>

          <h1 className="font-display text-[36px] md:text-[58px] leading-[1.15] text-text-black">
            Visuals That
            <br />
            <em>Define Legacy.</em>
          </h1>

          <div className="w-14 h-[1.5px] bg-wine my-7" />

          <p className="body-text max-w-[380px]">
            Exclusive photography and cinematography for celebrities, luxury brands, and high-profile
            events. Each project is a private commission — crafted for those who demand nothing less
            than extraordinary.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <a href="#contact" className="btn-primary">Request a Consultation</a>
            <a href="#portfolio" className="btn-outline">View Portfolio</a>
          </div>

          <div className="flex items-center gap-3 mt-7">
            <span className="w-6 h-[1px] bg-wine" />
            <span className="font-body text-[11px]" style={{ color: "#888888" }}>
              Trusted by 50+ Celebrity & High-Profile Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
