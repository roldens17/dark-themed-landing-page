import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Shopify Builds", href: "#services" },
      { name: "WordPress Systems", href: "#services" },
      { name: "SaaS Products", href: "#services" },
      { name: "Product Engineering", href: "#services" },
      { name: "Design Systems", href: "#services" }
    ],
    company: [
      { name: "About KlickSpark", href: "#about" },
      { name: "Selected Work", href: "#work" },
      { name: "Capabilities", href: "#services" },
      { name: "Contact", href: "#contact" },
      { name: "Studio Notes", href: "#" }
    ],
    resources: [
      { name: "Case Studies", href: "#work" },
      { name: "Project Inquiry", href: "#contact" },
      { name: "Newsletter", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Support", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl tracking-tight">KlickSpark Media</span>
            </div>
            <p className="mb-8 max-w-sm text-muted-foreground">
              KlickSpark Media is a digital studio creating sharper Shopify experiences, stronger SaaS interfaces, and cleaner WordPress systems.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border bg-white/[0.05] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <Icon className="h-5 w-5 text-white/80" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
