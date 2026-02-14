import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Shopify Development", href: "#services" },
      { name: "WordPress Systems", href: "#services" },
      { name: "SaaS Products", href: "#services" },
      { name: "Web Applications", href: "#services" },
      { name: "UI/UX Design", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#work" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "#work" },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl tracking-tight">
                KlickSpark<span className="text-[#00d4ff]">Media</span>
              </span>
            </div>
            <p className="text-white/60 mb-8 max-w-sm">
              Building digital products that scale. We're a product-first creative agency 
              specializing in Shopify, WordPress, and SaaS solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-white/80 hover:text-[#00d4ff]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#00d4ff] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16 p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-[#00d4ff]/5 to-transparent backdrop-blur-sm">
          <div className="max-w-2xl">
            <h3 className="text-2xl mb-2">Stay Updated</h3>
            <p className="text-white/60 mb-6">
              Get the latest insights on digital products, design trends, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg focus:border-[#00d4ff] focus:outline-none transition-colors text-white"
              />
              <button className="bg-[#00d4ff] text-black px-8 py-3 rounded-lg hover:bg-[#00bfe6] transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm">
            © 2026 KlickSparkMedia. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-[#00d4ff] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[#00d4ff] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-[#00d4ff] transition-colors">
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center hover:bg-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-[#00d4ff] group-hover:text-black transition-colors" />
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"></div>
    </footer>
  );
}
