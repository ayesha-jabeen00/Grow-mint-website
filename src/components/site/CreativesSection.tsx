import { useState } from "react";
import { ExternalLink, Eye, X, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Creative = {
  name: string;
  url: string;
  image?: string;
  gradient: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
};

const creatives: Creative[] = [
  {
    name: "Veevibe Creative",
    url: "https://www.canva.com/design/DAG0iunSy9w/B3fptxMnY-29CyttHQeshA/view",
    gradient: "from-slate-800 via-slate-900 to-black",
    category: "Branding",
    description:
      "A bold branding concept designed to establish a strong visual identity through cohesive color systems, typography, and marketing creatives.",
    tags: ["Brand Identity", "Canva", "Social Media"],
    year: "2024",
  },
  {
    name: "VOATFolio",
    url: "https://www.canva.com/design/DAGyoWr5LSo/MI5--00i-3y6C1p3CUY4Zg/view",
    gradient: "from-purple-500 via-violet-600 to-indigo-700",
    category: "Portfolio",
    description:
      "A clean and modern portfolio design showcasing projects, case studies, and creative storytelling for a digital-first brand.",
    tags: ["Portfolio Design", "UI", "Canva"],
    year: "2024",
  },
  {
    name: "DGP Event",
    url: "https://www.canva.com/design/DAG12cpIsvU/ZGfDBQDrOqf-J0al9PIpkw/view",
    gradient: "from-amber-200 via-orange-300 to-rose-300",
    category: "Event Design",
    description:
      "Event creatives designed to drive engagement, featuring posters, banners, and social media assets for promotions.",
    tags: ["Event Posters", "Marketing", "Creatives"],
    year: "2023",
  },
  {
    name: "Creative Gallery",
    url: "https://www.canva.com/design/DAG5Yh4Pluw/GxApzMz46N8jr-H19Z90lA/view",
    gradient: "from-rose-700 via-red-800 to-slate-900",
    category: "Marketing",
    description:
      "A curated gallery of marketing creatives crafted to enhance brand reach and visual storytelling across platforms.",
    tags: ["Marketing Design", "Campaigns", "Visuals"],
    year: "2024",
  },
];

export function CreativesSection() {
  const [selected, setSelected] = useState<Creative | null>(null);

  const open = (c: Creative) => {
    setSelected(c);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setSelected(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Creative Work
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Graphic{" "}
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              Creativity
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Visual designs and creative assets crafted to elevate brand identity
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {creatives.map((creative) => (
            <article
              key={creative.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Preview */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${creative.gradient}`}
                />
                <div className="absolute inset-0 grid place-items-center p-6 text-center">
                  <div>
                    <p className="font-display text-2xl font-bold text-white/95 drop-shadow">
                      {creative.name}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-white/70">
                      {creative.category}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Button
                    onClick={() => open(creative)}
                    variant="outline"
                    size="sm"
                    className="bg-background/90 text-xs md:text-sm"
                  >
                    <Eye className="mr-1.5 h-4 w-4" />
                    View Details
                  </Button>
                  <Button asChild size="sm" className="text-xs md:text-sm">
                    <a href={creative.url} target="_blank" rel="noopener noreferrer">
                      View on Canva
                      <ExternalLink className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-muted-foreground">{creative.year}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{creative.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {creative.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {creative.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => open(creative)}
                  className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  View Creative
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground/80 transition-colors hover:bg-background"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className={`relative h-48 bg-gradient-to-br ${selected.gradient} md:h-60`}>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="font-display text-3xl font-bold text-white drop-shadow">
                    {selected.name}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/80">
                    {selected.category}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{selected.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {selected.category} • {selected.year}
                  </p>
                </div>
                <Button asChild size="sm">
                  <a href={selected.url} target="_blank" rel="noopener noreferrer">
                    View on Canva
                    <ExternalLink className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/80">
                {selected.description}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Creative Tools & Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
