import { Award, Users, Target, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Product-First Mindset",
      description: "We think like product owners, not just developers. Every decision is driven by user needs and business goals."
    },
    {
      icon: TrendingUp,
      title: "Built to Scale",
      description: "Our solutions grow with your business. From MVP to millions of users, we build for the long term."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We're an extension of your team. Regular communication, transparent processes, and shared success."
    },
    {
      icon: Award,
      title: "Quality Over Speed",
      description: "Fast delivery matters, but not at the cost of quality. We deliver excellence, consistently."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
            <span className="text-sm tracking-wide text-[#00d4ff]">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            We're Not Your Average <span className="text-[#00d4ff]">Agency</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            KlickSparkMedia is a product-focused creative agency specializing in digital products 
            that drive real business results. We combine technical excellence with strategic thinking 
            to build solutions that scale.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-[#00d4ff] mb-2">8+</div>
            <div className="text-white/60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-[#00d4ff] mb-2">150+</div>
            <div className="text-white/60">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-[#00d4ff] mb-2">50+</div>
            <div className="text-white/60">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-[#00d4ff] mb-2">25+</div>
            <div className="text-white/60">Team Members</div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#00d4ff]" />
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto p-12 border border-[#00d4ff]/20 rounded-3xl bg-gradient-to-br from-[#00d4ff]/5 to-transparent backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl mb-6">
              Ready to Build Something <span className="text-[#00d4ff]">Amazing?</span>
            </h3>
            <p className="text-xl text-white/60 mb-8">
              Let's talk about your project and how we can help you scale.
            </p>
            <button className="bg-[#00d4ff] text-black px-8 py-4 rounded-lg hover:bg-[#00bfe6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
