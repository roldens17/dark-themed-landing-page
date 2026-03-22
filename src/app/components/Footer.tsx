import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="mb-6">
              <span className="text-3xl tracking-tight">KlickSpark Media</span>
            </div>
            <p className="mb-8 max-w-sm text-muted-foreground">
              KlickSpark Media is a digital studio creating sharper Shopify experiences, stronger SaaS interfaces, and cleaner WordPress systems.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90"
            >
              Start a Project
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground transition-colors duration-200 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            © 2026 KlickSpark Media. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-white">
              Cookie Policy
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex h-10 w-10 items-center justify-center rounded-lg border bg-white/[0.05] transition-all duration-300 hover:border-white hover:bg-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white transition-colors group-hover:text-black" />
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </footer>
  );
}
