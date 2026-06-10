import { useState } from "react";
import { ExternalLink, Eye, X, ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import veevibeImg from "@/assets/veevibe.png";
import voatImg from "@/assets/voat.png";
import manahireImg from "@/assets/manahire.png";
import skyrydrImg from "@/assets/skyrydr.png";
import skyLogisticsImg from "@/assets/sky-logistics.png";

type Website = {
  name: string;
  url: string;
  image: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  overview: string;
  skillsDescription: string;
};

const websites: Website[] = [
  {
    name: "VeeVibes",
    url: "https://veevibes.netlify.app/",
    image: veevibeImg,
    category: "Events",
    year: "2023",
    description:
      "A modern event management platform built for seamless event creation, ticketing, and attendee engagement.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    overview:
      "VeeVibes is an end-to-end event management platform designed to help organizers create, promote, and manage events effortlessly. It supports event listings, secure ticket payments, and attendee tracking in real time.",
    skillsDescription:
      "The project required strong frontend skills using React for UI, Node.js for backend APIs, MongoDB for flexible event data storage, and Stripe integration for secure online payments.",
  },
  {
    name: "VOAT Network",
    url: "https://voatnetwork.com",
    image: voatImg,
    category: "Agency",
    year: "2023",
    description:
      "A digital agency website showcasing services, portfolio, and brand credibility.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    overview:
      "VOAT Network is a high-performance agency website focused on conversions and brand storytelling. It highlights services, case studies, and client trust through a modern and responsive design.",
    skillsDescription:
      "This project demonstrates expertise in Next.js for SEO-optimized pages, Tailwind CSS for scalable UI design, Framer Motion for smooth animations, and Contentful for easy content management.",
  },
  {
    name: "ManaHire",
    url: "https://manahire.com",
    image: manahireImg,
    category: "HR Tech",
    year: "2022",
    description:
      "An HR platform that simplifies hiring, onboarding, and employee management.",
    tags: ["React", "NestJS", "PostgreSQL", "AWS"],
    overview:
      "ManaHire streamlines the hiring lifecycle by managing job postings, candidate tracking, onboarding workflows, and employee records through a centralized dashboard.",
    skillsDescription:
      "Built using React for an interactive frontend, NestJS for scalable backend architecture, PostgreSQL for relational data integrity, and AWS for cloud hosting and security.",
  },
  {
    name: "Skyrydr",
    url: "https://skyrydr.com",
    image: skyrydrImg,
    category: "Transportation",
    year: "2023",
    description:
      "A ride-sharing platform connecting users with fast and reliable transportation.",
    tags: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    overview:
      "Skyrydr is a ride-sharing solution focused on real-time location tracking, ride booking, and driver-rider coordination across urban areas.",
    skillsDescription:
      "This project showcases mobile app development using React Native, backend services with Node.js, MongoDB for real-time ride data, and Google Maps API for navigation and tracking.",
  },
  {
    name: "Sky Logistics Hub",
    url: "https://www.skylogisticshub.com",
    image: skyLogisticsImg,
    category: "Logistics",
    year: "2022",
    description: "A logistics management system with real-time shipment tracking.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    overview:
      "Sky Logistics Hub provides businesses with tools to manage shipments, track deliveries, and optimize logistics operations through a centralized dashboard.",
    skillsDescription:
      "Developed using Vue.js for a responsive frontend, Django for backend processing, PostgreSQL for data accuracy, and Docker for scalable deployment.",
  },
];

export const PortfolioSection = () => {
  const [selected, setSelected] = useState<Website | null>(null);

  const open = (site: Website) => {
    setSelected(site);
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  };

  const close = () => {
    setSelected(null);
    if (typeof document !== "undefined") document.body.style.overflow = "auto";
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Briefcase className="h-3.5 w-3.5" />
            Our Work
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Explore our diverse range of projects, each crafted with precision and innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((site) => (
            <article
              key={site.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Preview */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={site.image}
                  alt={site.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Button
                    onClick={() => open(site)}
                    variant="outline"
                    size="sm"
                    className="bg-background/90 text-xs md:text-sm"
                  >
                    <Eye className="mr-1.5 h-4 w-4" />
                    View Details
                  </Button>
                  {site.url && (
                    <Button asChild size="sm" className="text-xs md:text-sm">
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-1.5 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-muted-foreground">{site.year}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{site.name}</h3>
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                  {site.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {site.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent/15 px-2.5 py-1 text-xs font-medium text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => open(site)}
                  className="group/btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                >
                  View Project
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
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground/80 transition-colors hover:bg-background"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{selected.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {selected.category} • {selected.year}
                  </p>
                </div>
                {selected.url && (
                  <Button asChild size="sm">
                    <a href={selected.url} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/80">
                {selected.description}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Technologies Used
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

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Project Overview
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {selected.overview}
              </p>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Skills & Approach
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {selected.skillsDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
