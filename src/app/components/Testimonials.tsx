import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "SaaS Operations Platform",
      content: "KlickSpark Media helped us move from a vague SaaS concept into a product that actually felt launchable. The interface became clearer, the system cleaner, and the roadmap easier to execute.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Owner",
      company: "Retail Brand",
      content: "Their Shopify work gave us a storefront that finally matched the quality of the brand. Better product storytelling, cleaner merchandising, and a much more confident buying flow.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Marketing Lead",
      company: "Service Company",
      content: "We needed WordPress to stop feeling patched together. KlickSpark Media rebuilt the structure, improved the admin experience, and gave the site a more serious editorial system.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Product Director",
      company: "Workflow Software Team",
      content: "They operate like a focused product studio, not a bloated agency. The decisions were sharper, the design system more disciplined, and implementation moved faster because of it.",
      rating: 5
    },
    {
      name: "Jessica Martinez",
      role: "Head of Growth",
      company: "Consumer Brand",
      content: "The storefront changes were not cosmetic. Navigation, hierarchy, and conversion paths all got stronger. It felt like strategy and execution were finally connected.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Operations Lead",
      company: "Digital Product Team",
      content: "KlickSpark Media was especially strong at turning messy requirements into a coherent product surface. The final system felt intentional, reusable, and much easier to maintain.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background mb-6">
            <span className="text-sm tracking-wide text-muted-foreground">CLIENT SIGNAL</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            Trusted by teams that need <span className="text-white/75">cleaner execution</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The common pattern is clarity: better product decisions, stronger systems, and sharper digital output.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-background/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-white text-white" />
                ))}
              </div>

              <p className="mb-8 leading-relaxed text-white/80">
                "{testimonial.content}"
              </p>

              <div className="border-t border-white/10 pt-6">
                <div className="font-medium text-white mb-1">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="mt-1 text-sm text-white/55">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border bg-background/70 p-8 text-center backdrop-blur-sm">
            <div className="mb-2 text-4xl text-white">Shopify</div>
            <div className="text-muted-foreground">Storefront systems</div>
          </div>
          <div className="rounded-2xl border bg-background/70 p-8 text-center backdrop-blur-sm">
            <div className="mb-2 text-4xl text-white">SaaS</div>
            <div className="text-muted-foreground">Product surfaces</div>
          </div>
          <div className="rounded-2xl border bg-background/70 p-8 text-center backdrop-blur-sm">
            <div className="mb-2 text-4xl text-white">WordPress</div>
            <div className="text-muted-foreground">Content platforms</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]"></div>
    </section>
  );
}
