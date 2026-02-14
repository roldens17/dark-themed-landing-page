import { Code2, Palette, Rocket, Zap, Globe, ShoppingCart } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "Custom Shopify themes and apps designed for conversion and performance. We build stores that sell."
    },
    {
      icon: Globe,
      title: "WordPress Systems",
      description: "Enterprise WordPress solutions with custom plugins, advanced workflows, and seamless integrations."
    },
    {
      icon: Rocket,
      title: "SaaS Products",
      description: "Full-stack SaaS development from MVP to scale. We build the tools that power modern businesses."
    },
    {
      icon: Code2,
      title: "Web Applications",
      description: "Custom web apps built with React, Next.js, and modern technologies for speed and reliability."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Product design that converts. Beautiful interfaces backed by data-driven UX research."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed matters. We optimize your digital products for lightning-fast load times and conversions."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
            <span className="text-sm tracking-wide text-[#00d4ff]">WHAT WE DO</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            Services That <span className="text-[#00d4ff]">Drive Results</span>
          </h2>
          <p className="text-xl text-white/60">
            We specialize in building digital products that aren't just beautiful—they're built to perform.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-[#00d4ff]/50 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mb-6 group-hover:bg-[#00d4ff]/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
