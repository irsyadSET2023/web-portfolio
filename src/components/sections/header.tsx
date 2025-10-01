import { useState, useEffect, useRef, useCallback } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrolled(scrollY > 10);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      closeMenu();
    },
    [closeMenu]
  );

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              <span className="text-3xl">I</span>rsyad.
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleSmoothScroll(e, href)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-4 py-4 border-t border-border">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleSmoothScroll(e, href)}
                  className="block py-2 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors duration-300 font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="block py-2 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 text-center"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
