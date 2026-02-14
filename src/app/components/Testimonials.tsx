import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      company: "SaaS Platform",
      content: "KlickSparkMedia transformed our vision into a scalable SaaS platform. Their technical expertise and product thinking were invaluable. We saw 3x growth in our first quarter.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, LuxeRetail",
      company: "E-Commerce",
      content: "The Shopify store they built for us isn't just beautiful—it converts. Our checkout completion rate increased by 45% and revenue doubled within 6 months.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Lead, DataCorp",
      company: "Enterprise",
      content: "Working with KlickSparkMedia felt like having an in-house product team. They understood our users, anticipated challenges, and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "David Park",
      role: "CTO, HealthTech Inc",
      company: "Healthcare",
      content: "Their attention to performance and security was impressive. They built a HIPAA-compliant platform that our users love and our team can maintain easily.",
      rating: 5
    },
    {
      name: "Jessica Martinez",
      role: "Marketing Director, BrandCo",
      company: "Marketing Agency",
      content: "From strategy to execution, KlickSparkMedia delivered a WordPress system that scales with our clients. The admin experience is phenomenal.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "VP Product, FinanceApp",
      company: "FinTech",
      content: "They don't just code—they solve problems. The web app they built handles millions of transactions with zero downtime. Incredible work.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
            <span className="text-sm tracking-wide text-[#00d4ff]">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            Trusted by <span className="text-[#00d4ff]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-white/60">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00d4ff] text-[#00d4ff]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-6">
                <div className="font-medium text-white mb-1">{testimonial.name}</div>
                <div className="text-sm text-white/60">{testimonial.role}</div>
                <div className="text-sm text-[#00d4ff] mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
            <div className="text-4xl text-[#00d4ff] mb-2">4.9/5</div>
            <div className="text-white/60">Average Rating</div>
          </div>
          <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
            <div className="text-4xl text-[#00d4ff] mb-2">100%</div>
            <div className="text-white/60">Client Retention</div>
          </div>
          <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
            <div className="text-4xl text-[#00d4ff] mb-2">50+</div>
            <div className="text-white/60">5-Star Reviews</div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
