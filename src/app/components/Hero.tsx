export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Subheadline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
            <span className="text-sm tracking-wide text-[#00d4ff]">
              Product-First Creative Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
            We Build Digital
            <br />
            Products That{" "}
            <span className="text-[#00d4ff]">Scale</span>
          </h1>

          {/* Body Text */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Shopify themes, WordPress systems, and SaaS tools — built for speed, 
            performance, and real businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="w-full sm:w-auto bg-[#00d4ff] text-black px-8 py-4 rounded-lg hover:bg-[#00bfe6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]">
              View Our Work
            </button>
            <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d4ff]/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center space-y-2 p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
          <div className="text-5xl text-[#00d4ff]">150+</div>
          <div className="text-white/60">Projects Delivered</div>
        </div>
        <div className="text-center space-y-2 p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
          <div className="text-5xl text-[#00d4ff]">98%</div>
          <div className="text-white/60">Client Satisfaction</div>
        </div>
        <div className="text-center space-y-2 p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
          <div className="text-5xl text-[#00d4ff]">24/7</div>
          <div className="text-white/60">Support Available</div>
        </div>
      </div>
    </section>
  );
}
