import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Work() {
  const projects = [
    {
      title: "LuxeShop",
      category: "E-Commerce",
      description: "Premium Shopify store with custom checkout experience",
      image: "https://images.unsplash.com/photo-1687524690542-2659f268cde8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc3MTA0ODg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Shopify", "React", "Custom Theme"]
    },
    {
      title: "FlowTask",
      category: "SaaS Platform",
      description: "Project management tool for distributed teams",
      image: "https://images.unsplash.com/photo-1649442746245-f51f4b76963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2Vic2l0ZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzExMDczMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "UrbanFit",
      category: "Mobile App",
      description: "Fitness tracking app with AI-powered coaching",
      image: "https://images.unsplash.com/photo-1760225529221-841ebb8e7867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzExMDczMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "AI/ML", "Firebase"]
    },
    {
      title: "DataViz Pro",
      category: "Web Application",
      description: "Analytics dashboard for enterprise clients",
      image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxMDcwMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "D3.js", "AWS"]
    }
  ];

  return (
    <section id="work" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
            <span className="text-sm tracking-wide text-[#00d4ff]">OUR PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            Featured <span className="text-[#00d4ff]">Work</span>
          </h2>
          <p className="text-xl text-white/60">
            Real projects. Real results. See how we've helped businesses scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-[#00d4ff]/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#00d4ff]/10 to-transparent">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-[#00d4ff] mb-2">{project.category}</div>
                    <h3 className="text-3xl mb-2">{project.title}</h3>
                    <p className="text-white/60">{project.description}</p>
                  </div>
                  <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00d4ff] hover:border-[#00d4ff] transition-all duration-300 group/btn">
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:text-black transition-colors" />
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm border border-white/10 rounded-full bg-white/[0.02]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="border border-[#00d4ff] text-[#00d4ff] px-8 py-4 rounded-lg hover:bg-[#00d4ff] hover:text-black transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
