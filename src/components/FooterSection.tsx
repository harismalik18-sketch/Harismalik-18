const navLinks = ["Portfolio", "Services", "About", "Testimonials", "Contact"];

const InstagramFooterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
  </svg>
);

const FooterSection = () => (
  <footer className="px-6 py-12 text-center" style={{ background: "#1A1A1A", borderTop: "2px solid hsl(350, 78%, 24%)" }}>
    <div className="flex flex-col items-center gap-6">
      <div>
        <span className="font-display text-[24px] text-primary-foreground">Harry Malik</span>
        <p className="font-body text-[8px] uppercase tracking-[5px] text-wine-medium mt-1">
          Photography & Film
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {navLinks.map((link, i) => (
          <span key={link} className="flex items-center gap-2">
            {i > 0 && <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>}
            <a
              href={`#${link.toLowerCase()}`}
              className="font-body text-[11px] uppercase tracking-[2px] hover:text-primary-foreground transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {link}
            </a>
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/harrymalikproductions_?igsh=eW9ib2d1Y2d2bGtt"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <InstagramFooterIcon />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-body text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
          © 2025 Harry Malik. All Rights Reserved.
        </span>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
        <span className="font-body text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
          harrymalik.com
        </span>
        <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
        <a href="#" className="font-body text-[11px] hover:text-primary-foreground transition-colors duration-300" style={{ color: "rgba(255,255,255,0.25)" }}>
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
