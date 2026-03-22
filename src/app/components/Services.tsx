import { Globe, Rocket, ShoppingCart } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Shopify Builds",
      description: "Conversion-focused Shopify themes, storefront UX, and custom commerce features built to move fast and sell cleanly."
    },
    {
      icon: Globe,
      title: "WordPress Systems",
      description: "Structured WordPress setups for editorial teams, marketing sites, service brands, and content operations that need control."
    },
    {
      icon: Rocket,
      title: "SaaS Products",
      description: "Product strategy, interface systems, and full-stack SaaS execution for founders and teams shipping real software."
    },
  ];

  return (
    <section id="services" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background mb-6">
            <span className="text-sm tracking-wide text-muted-foreground">WHAT WE DO</span>
          </div>
          <h2 className="mb-6 text-4xl tracking-tight md:text-6xl">
            Focused around <span className="text-white/75">three core lanes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            KlickSpark Media is most useful when the work sits at the intersection of product thinking, interface design, and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border bg-background/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border bg-white/[0.03] transition-all duration-300 group-hover:bg-white/[0.07]">
                  <Icon className="w-7 h-7 text-white/85" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]"></div>
    </section>
  );
}
