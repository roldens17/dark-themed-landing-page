import { Target, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Product-First Thinking",
      description: "We shape every build around what the business needs to sell, communicate, or operate better, not just what looks modern."
    },
    {
      icon: TrendingUp,
      title: "Built to Hold Up",
      description: "KlickSpark Media focuses on maintainable systems, clear content architecture, and UI patterns that survive iteration."
    }
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background mb-6">
            <span className="text-sm tracking-wide text-muted-foreground">ABOUT KLICKSPARK MEDIA</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            A digital studio for <span className="text-white/75">Shopify, SaaS, and WordPress</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            KlickSpark Media is a product-minded studio building brand sites, storefronts, SaaS interfaces, and content systems with a sharper editorial and engineering standard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border bg-background/70 p-8 backdrop-blur-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border bg-white/[0.03]">
                  <Icon className="w-7 h-7 text-white/85" />
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -z-10 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]"></div>
    </section>
  );
}
