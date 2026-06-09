import { Instagram, BadgeCheck, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import veevibeAsset from "@/assets/veevibe.png.asset.json";
import skyLogisticsAsset from "@/assets/sky-logistics.png.asset.json";
import skyrydrAsset from "@/assets/skyrydr.png.asset.json";

type Client = {
  name: string;
  handle: string;
  url: string;
  logo?: string;
  initials: string;
  gradient: string;
  testimonial: string;
  rating: number;
  industry: string;
};

const clients: Client[] = [
  {
    name: "Veevibe Events",
    handle: "@veevibe_events",
    url: "https://www.instagram.com/veevibe_events/",
    logo: veevibeAsset.url,
    initials: "VE",
    gradient: "from-pink-500 to-rose-500",
    testimonial: "Hash Orbit boosted our event bookings by 150% with powerful digital marketing.",
    rating: 4,
    industry: "Event Management",
  },
  {
    name: "Veevibe Sports",
    handle: "@veevibesports",
    url: "https://www.instagram.com/veevibesports/",
    initials: "VS",
    gradient: "from-orange-500 to-amber-500",
    testimonial: "Our engagement rates skyrocketed thanks to their creativity and expertise.",
    rating: 4,
    industry: "Sports & Entertainment",
  },
  {
    name: "Sky Logistics",
    handle: "@sky_travels_and_logistics",
    url: "https://www.instagram.com/sky_travels_and_logistics/",
    logo: skyLogisticsAsset.url,
    initials: "SL",
    gradient: "from-sky-500 to-blue-600",
    testimonial: "Our operations improved by 40% with their efficient logistics system.",
    rating: 5,
    industry: "Logistics & Transportation",
  },
  {
    name: "Skyrydr",
    handle: "@skyrydr_",
    url: "https://www.instagram.com/skyrydr_/",
    logo: skyrydrAsset.url,
    initials: "SR",
    gradient: "from-indigo-500 to-violet-600",
    testimonial: "Their mobile app transformed our ride-sharing user experience.",
    rating: 4,
    industry: "Transportation Tech",
  },
  {
    name: "Navya Developers",
    handle: "@navyadevelopers.official",
    url: "https://www.instagram.com/navyadevelopers.official/",
    initials: "ND",
    gradient: "from-emerald-500 to-teal-600",
    testimonial: "Working with Hash Orbit elevated our brand perception significantly.",
    rating: 5,
    industry: "Real Estate",
  },

];

const Rating = ({ stars }: { stars: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 md:h-4 md:w-4 ${
          i < stars ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
        }`}
      />
    ))}
  </div>
);

export function ClientsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all");
  const [filteredClients, setFilteredClients] = useState<Client[]>(clients);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredClients(clients);
    } else {
      setFilteredClients(clients.filter((c) => c.rating === 5));
    }
  }, [activeFilter]);

  const startDragging = (e: React.MouseEvent) => {
    if (!scrollContainer.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };
  const stopDragging = () => setIsDragging(false);
  const onDragging = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainer.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainer.current;
    if (!container) return;
    container.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      {/* decorative bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            Trusted Partners
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl"
          >
            Our Valued Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-muted-foreground md:text-lg"
          >
            Trusted by innovative brands and growing businesses across various industries
          </motion.p>

          {/* filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 md:px-5 md:py-2 md:text-sm ${
                activeFilter === "all"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-accent/10 text-foreground/80 hover:bg-accent/20"
              }`}
            >
              All Clients
            </button>
            <button
              onClick={() => setActiveFilter("featured")}
              className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 md:gap-2 md:px-5 md:py-2 md:text-sm ${
                activeFilter === "featured"
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-accent/10 text-foreground/80 hover:bg-accent/20"
              }`}
            >
              <Star className="h-3.5 w-3.5 fill-current" />
              Featured (5★)
            </button>
          </div>
        </div>

        {/* scroll controls */}
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={() => scroll("left")}
            className="rounded-full border border-border bg-background p-2 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-foreground"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="hidden text-xs text-muted-foreground md:inline">
            Swipe or use buttons to navigate
          </span>
          <button
            onClick={() => scroll("right")}
            className="rounded-full border border-border bg-background p-2 text-foreground/70 transition-colors hover:bg-accent/20 hover:text-foreground"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* carousel */}
        <div
          ref={scrollContainer}
          onMouseDown={startDragging}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}
          onMouseMove={onDragging}
          className={`mt-6 flex gap-5 overflow-x-auto pb-6 scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredClients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative w-[290px] flex-shrink-0 select-none rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:w-[320px]"
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-14 w-14 rounded-xl object-cover ring-2 ring-border"
                      draggable={false}
                    />
                  ) : (
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${client.gradient} font-display text-lg font-bold text-white ring-2 ring-border`}
                    >
                      {client.initials}
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-background">
                    <BadgeCheck className="h-5 w-5 fill-primary text-primary-foreground" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold leading-tight">{client.name}</h3>
                  <p className="truncate text-xs text-muted-foreground">{client.handle}</p>
                  <p className="mt-1 inline-block rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-foreground/70">
                    {client.industry}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Rating stars={client.rating} />
              </div>

              <blockquote className="mt-3 line-clamp-4 text-sm leading-relaxed text-foreground/80">
                "{client.testimonial}"
              </blockquote>

              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Instagram className="h-4 w-4" />
                Follow on Instagram
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
