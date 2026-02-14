import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.scrollTo({ top: 0, behavior: "smooth" }); 
              }}
              className="text-2xl tracking-tight cursor-pointer"
            >
              KlickSpark<span className="text-[#00d4ff]">Media</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hidden md:block bg-[#00d4ff] text-black px-6 py-3 rounded-lg hover:bg-[#00bfe6] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
          >
            Start a Project
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-6">
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-lg cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }
                }}
                className="bg-[#00d4ff] text-black px-6 py-3 rounded-lg hover:bg-[#00bfe6] transition-all duration-200 text-left"
              >
                Start a Project
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
