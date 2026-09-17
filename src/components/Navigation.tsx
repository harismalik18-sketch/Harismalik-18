import { useState, useEffect } from "react";

const navLinks = [
  { label: "Portfolios", href: "#portfolios" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] bg-background transition-shadow duration-300 border-b border-border ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : ""
      }`}
      style={{ animation: "fadeIn 0.3s ease-out" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className="font-display text-[22px] text-text-black leading-none">Harry Malik</span>
          <span className="font-body text-[8px] uppercase tracking-[4px] text-wine-medium mt-1">
            Photography & Film
          </span>
        </a>

        {/* Center links - desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA - desktop */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden lg:inline-block btn-primary"
        >
          Book a Consultation
        </a>

        {/* Hamburger - mobile */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-text-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-text-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-text-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="nav-link text-[13px]">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleClick(e, "#contact")} className="btn-primary text-center mt-2">
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
