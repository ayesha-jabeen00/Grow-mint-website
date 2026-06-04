export type SearchEntry = {
  title: string;
  description: string;
  category: "Page" | "Service" | "Portfolio";
  to: string;
  hash?: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  // Pages
  { title: "Home", description: "Performance marketing agency homepage", category: "Page", to: "/" },
  { title: "About", description: "Our story, team and values", category: "Page", to: "/about" },
  { title: "Services", description: "SEO, paid ads, content, web and automation", category: "Page", to: "/services" },
  { title: "Portfolio", description: "Selected client work and case studies", category: "Page", to: "/portfolio" },
  { title: "Contact", description: "Book a free audit or get in touch", category: "Page", to: "/contact" },

  // Services
  { title: "SEO", description: "Technical, on-page and link strategies that compound for years.", category: "Service", to: "/services" },
  { title: "Google Ads", description: "Search, Shopping, Performance Max — built for blended ROAS.", category: "Service", to: "/services" },
  { title: "Meta Ads", description: "Creative-first scaling on Facebook, Instagram and Reels.", category: "Service", to: "/services" },
  { title: "Social Media", description: "Native organic content systems that build affinity.", category: "Service", to: "/services" },
  { title: "Content Marketing", description: "Editorial that ranks and converts.", category: "Service", to: "/services" },
  { title: "Video Marketing", description: "UGC, ad creative and YouTube growth.", category: "Service", to: "/services" },
  { title: "Performance Marketing", description: "Full-funnel attribution and CRO.", category: "Service", to: "/services" },
  { title: "Brand Strategy", description: "Positioning, story and visual identity.", category: "Service", to: "/services" },
  { title: "Marketing Automation", description: "HubSpot, Klaviyo and Customer.io builds.", category: "Service", to: "/services" },
  { title: "Email Marketing", description: "Flows and campaigns people actually open.", category: "Service", to: "/services" },
  { title: "Website Development", description: "Fast, SEO-friendly sites that convert.", category: "Service", to: "/services" },
  { title: "Funnel Building", description: "Lead magnets, landers and nurture.", category: "Service", to: "/services" },

  // Portfolio
  { title: "Lumen Skincare", description: "E-commerce — 5.8× ROAS in 90 days", category: "Portfolio", to: "/portfolio" },
  { title: "Nordia Realty", description: "Real Estate — 412% organic leads", category: "Portfolio", to: "/portfolio" },
  { title: "Vesta Clinic", description: "Healthcare — $28 cost per booking", category: "Portfolio", to: "/portfolio" },
  { title: "Halcyon Studio", description: "Branding — Series A landed", category: "Portfolio", to: "/portfolio" },
  { title: "Beacon Coffee", description: "Local — +184% foot traffic", category: "Portfolio", to: "/portfolio" },
  { title: "Quanta SaaS", description: "B2B SaaS — 3.2k MQLs/quarter", category: "Portfolio", to: "/portfolio" },
  { title: "Orbital Fitness", description: "DTC — $1.2M Q4 revenue", category: "Portfolio", to: "/portfolio" },
  { title: "Pinecrest Schools", description: "Education — 1,800 enrollments", category: "Portfolio", to: "/portfolio" },
  { title: "Northstar Bank", description: "Finance — $11M deposits", category: "Portfolio", to: "/portfolio" },
];

export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const scored = SEARCH_INDEX.map((entry) => {
    const hay = `${entry.title} ${entry.description} ${entry.category}`.toLowerCase();
    let score = 0;
    for (const t of tokens) {
      if (!hay.includes(t)) return { entry, score: -1 };
      if (entry.title.toLowerCase().includes(t)) score += 3;
      if (entry.title.toLowerCase().startsWith(t)) score += 2;
      if (entry.description.toLowerCase().includes(t)) score += 1;
    }
    return { entry, score };
  })
    .filter((s) => s.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry);
  return scored;
}
