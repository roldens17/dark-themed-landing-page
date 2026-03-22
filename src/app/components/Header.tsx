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
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-dashed border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                window.scrollTo({ top: 0, behavior: "smooth" }); 
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                KS
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.22em] text-white/90">
                KlickSpark Media
              </span>
            </a>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="cursor-pointer text-sm text-white/65 transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90 md:block"
          >
            Start a Project
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white md:hidden"
            aria-label="Toggle menu"
          >
            <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 py-6 md:hidden">
            <nav className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/95 p-6 shadow-2xl shadow-black/40">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="cursor-pointer text-lg text-white/80 transition-colors duration-200 hover:text-white"
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
                className="mt-2 rounded-full bg-white px-6 py-3 text-left text-sm font-medium text-black transition-all duration-200 hover:bg-white/90"
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
