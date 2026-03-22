import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Work() {
  const projects = [
    {
      title: "U Street Project",
      category: "Creative Brand Site",
      description: "A polished brand-driven web experience with a stronger visual system, clearer layout structure, and a more intentional front-end presentation.",
      image: "/projects/u-street-project.png",
      tags: ["Brand Site", "UI System", "Frontend"]
    },
    {
      title: "Donel & D Plumbing",
      category: "Service Business Website",
      description: "A direct-response local service landing page focused on trust, clarity, fast contact paths, and lead generation for a plumbing business.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Service Site", "Lead Gen", "Conversion"]
    }
  ];

  return (
    <section id="work" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background mb-6">
            <span className="text-sm tracking-wide text-muted-foreground">SELECTED WORK</span>
          </div>
          <h2 className="mb-6 text-4xl tracking-tight md:text-6xl">
            Enough proof to show the <span className="text-white/75">direction</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Two representative examples are enough here. The goal is confidence, not a giant portfolio wall.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border bg-background/70 backdrop-blur-sm transition-all duration-500 hover:border-white/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-white/[0.06] to-transparent">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="mb-2 text-sm text-white/55">{project.category}</div>
                    <h3 className="text-3xl mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                  <button className="group/btn flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:border-white">
                    <ArrowUpRight className="w-5 h-5 transition-colors group-hover/btn:text-black" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full border bg-white/[0.02] px-3 py-1 text-sm text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute top-1/2 right-0 -z-10 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]"></div>
    </section>
  );
}
