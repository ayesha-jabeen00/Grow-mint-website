import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Search, Megaphone, Target, Share2, PenLine, Video,
  TrendingUp, Sparkles, Zap, Mail, Globe, GitBranch, Check, Star,
  Shield, Users, BarChart3, Lightbulb, DollarSign, Quote,
  Compass, ClipboardList, Rocket, Wrench, ChartLine, Crown,
  Building2, Stethoscope, GraduationCap, ShoppingBag, UtensilsCrossed,
  HardHat, Landmark, Cpu, Store, Linkedin, Plus, Minus,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AreaChart, Area, ResponsiveContainer, XAxis, Tooltip,
  BarChart, Bar,
} from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northwind — Performance Marketing That Compounds" },
      { name: "description", content: "We help ambitious brands scale with SEO, paid media, and conversion-focused creative. Book a free audit today." },
      { property: "og:title", content: "Northwind — Performance Marketing Agency" },
      { property: "og:description", content: "SEO, Google Ads, Meta Ads, web & funnels. 450% average ROAS across 200+ brands." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Stats />
      <Services />
      <Portfolio />
      <CaseStudy />
      <Dashboard />
      <Process />
      <WhyUs />
      <Testimonials />
      <Team />
      <Industries />
      <FaqSection />
      <ContactCta />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="container-page pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now booking Q2 — only 4 retainer spots left
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Performance marketing
            <br />
            that <span className="text-gradient">actually compounds.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We're the growth team behind 8+ brands generating ₹3L+ in tracked revenue. SEO, paid media, and creative — engineered to scale.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="brand" size="lg" className="rounded-full px-7">
              <Link to="/contact">Book Free Consultation <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <Badge icon={<Shield className="h-3.5 w-3.5" />}>Google Partner</Badge>
            <Badge icon={<Crown className="h-3.5 w-3.5" />}>Meta Business Partner</Badge>
            <Badge icon={<Star className="h-3.5 w-3.5" />}>4.9 on Clutch (87 reviews)</Badge>
          </div>
        </div>

        {/* Floating hero stats */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card/80 p-6 shadow-card backdrop-blur md:grid-cols-4 md:p-8">
            <HeroStat label="Average ROAS" value={450} suffix="%" />
            <HeroStat label="Brands scaled" value={8} suffix="+" />
            <HeroStat label="Revenue driven" value={3} prefix="₹" suffix="L+" />
            <HeroStat label="Client retention" value={94} suffix="%" />
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 -z-10 h-40 bg-gradient-brand opacity-30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function Badge({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 backdrop-blur">
      {icon}{children}
    </span>
  );
}

function HeroStat({ label, value, suffix, prefix }: { label: string; value: number; suffix?: string; prefix?: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold md:text-4xl">
        <Counter to={value} suffix={suffix} prefix={prefix} />
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- LOGOS ---------------- */
import veevibeAsset from "@/assets/veevibe.png.asset.json";
import voatAsset from "@/assets/voat.png.asset.json";
import manahireAsset from "@/assets/manahire.png.asset.json";
import skyrydrAsset from "@/assets/skyrydr.png.asset.json";
import skyLogisticsAsset from "@/assets/sky-logistics.png.asset.json";

function Logos() {
  const brands = [
    { name: "VeeVibes", src: veevibeAsset.url },
    { name: "VOAT Network", src: voatAsset.url },
    { name: "ManaHire", src: manahireAsset.url },
    { name: "Skyrydr", src: skyrydrAsset.url },
    { name: "Sky Logistics Hub", src: skyLogisticsAsset.url },
  ];
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-[#6084BE]/30 bg-[#6084BE] py-10">
      <p className="text-center text-xs uppercase tracking-widest text-white/80">
        Trusted by businesses across industries
      </p>
      <div className="group mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused] md:gap-24">
          {row.map((b, i) => (
            <div key={i} className="flex h-16 shrink-0 items-center justify-center px-4 md:h-20">
              <img
                src={b.src}
                alt={b.name}
                loading="lazy"
                className="h-full w-auto max-w-[180px] object-contain opacity-80 transition-opacity hover:opacity-100 md:max-w-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const items = [
    { label: "Leads Generated", value: 800, suffix: "+", note: "Across all clients" },
    { label: "Ad Spend Managed", value: 3, prefix: "₹", suffix: "L+", note: "Last 24 months" },
    { label: "Projects Completed", value: 540, suffix: "+", note: "Since 2018" },
    { label: "Client Retention", value: 94, suffix: "%", note: "Year over year" },
    { label: "Revenue Generated", value: 3, prefix: "₹", suffix: "L+", note: "Tracked attribution" },
  ];
  return (
    <section className="container-page py-24">
      <SectionHeader
        eyebrow="By the numbers"
        title="Results that speak for themselves"
        subtitle="Built on five years of relentless experimentation, hard data, and brutally honest reporting."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3 lg:grid-cols-5">
        {items.map((s) => (
          <div key={s.label} className="bg-card p-8 transition-colors hover:bg-surface">
            <div className="font-display text-4xl font-bold text-gradient">
              {s.value % 1 !== 0 ? (
                <span>{s.prefix ?? ""}{s.value}{s.suffix ?? ""}</span>
              ) : (
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              )}
            </div>
            <div className="mt-3 font-medium">{s.label}</div>
            <div className="text-sm text-muted-foreground">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { icon: Search, name: "SEO", desc: "Win the rankings that drive long-term organic compounding." },
  { icon: Target, name: "Google Ads", desc: "High-intent search & shopping campaigns built for ROAS." },
  { icon: Megaphone, name: "Meta Ads", desc: "Creative-led performance on Facebook, Instagram & Reels." },
  { icon: Share2, name: "Social Media", desc: "Native content systems that grow audience and trust." },
  { icon: PenLine, name: "Content Marketing", desc: "SEO-driven editorial that attracts qualified buyers." },
  { icon: Video, name: "Video Marketing", desc: "Short-form, ad creative, and YouTube growth engines." },
  { icon: TrendingUp, name: "Performance Marketing", desc: "Full-funnel attribution, CRO and channel mixing." },
  { icon: Sparkles, name: "Brand Strategy", desc: "Positioning, narrative & visual systems with bite." },
  { icon: Zap, name: "Marketing Automation", desc: "Lifecycle flows in HubSpot, Klaviyo & Customer.io." },
  { icon: Mail, name: "Email Marketing", desc: "Newsletters and revenue flows people actually open." },
  { icon: Globe, name: "Website Development", desc: "Fast, SEO-friendly websites built to convert." },
  { icon: GitBranch, name: "Funnel Building", desc: "Lead magnets, landers & nurture for predictable pipeline." },
];

function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="What we do"
          title="Twelve services. One growth engine."
          subtitle="Modular by design, integrated in execution. Mix the channels that move your numbers."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.name} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const PROJECTS = [
  { title: "Lumen Skincare", industry: "E-commerce", services: ["Meta Ads", "Email"], result: "5.8x ROAS in 90 days", category: "Meta Ads", color: "from-rose-400 to-orange-400" },
  { title: "Nordia Realty", industry: "Real Estate", services: ["SEO", "Web Dev"], result: "412% organic leads", category: "SEO", color: "from-blue-400 to-cyan-400" },
  { title: "Vesta Clinic", industry: "Healthcare", services: ["Google Ads", "Funnel"], result: "$28 cost per booking", category: "Google Ads", color: "from-emerald-400 to-teal-400" },
  { title: "Halcyon Studio", industry: "Branding", services: ["Brand", "Web Dev"], result: "Series A landed", category: "Branding", color: "from-violet-400 to-fuchsia-400" },
  { title: "Beacon Coffee", industry: "Local", services: ["Social", "Content"], result: "+184% foot traffic", category: "Social Media", color: "from-amber-400 to-orange-500" },
  { title: "Quanta SaaS", industry: "B2B SaaS", services: ["SEO", "Content"], result: "3.2k MQLs/quarter", category: "SEO", color: "from-indigo-400 to-blue-500" },
];
const CATEGORIES = ["All", "SEO", "Meta Ads", "Google Ads", "Social Media", "Branding", "Web Development"];

function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);
  return (
    <section id="portfolio" className="container-page py-24">
      <SectionHeader
        eyebrow="Featured work"
        title="Built. Launched. Scaled."
        subtitle="A small selection of recent engagements. Filter by what you care about."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              filter === c
                ? "border-transparent bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-card">
            <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color} p-6`}>
              <div className="absolute inset-0 opacity-30 mix-blend-overlay [background:radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
              <div className="relative flex h-full flex-col justify-between text-white">
                <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                  {p.industry}
                </span>
                <div className="font-display text-3xl font-bold leading-tight">{p.title}</div>
              </div>
              <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Button variant="brand" size="sm" className="rounded-full">
                  View Case Study <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-1.5">
                {p.services.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">{s}</span>
                ))}
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <span className="text-sm text-muted-foreground">Result</span>
                <span className="font-display text-lg font-semibold text-gradient">{p.result}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CASE STUDY ---------------- */
function CaseStudy() {
  const beforeAfter = [
    { label: "Monthly Revenue", before: "$42k", after: "$268k" },
    { label: "ROAS", before: "1.8x", after: "5.6x" },
    { label: "Cost per Lead", before: "$84", after: "$19" },
    { label: "Email Revenue %", before: "6%", after: "31%" },
  ];
  return (
    <section className="bg-surface py-24">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Featured case study"
            title="How Lumen Skincare hit $3M ARR in 11 months"
            align="left"
            subtitle="A direct-to-consumer skincare brand stuck at $50k/mo. We rebuilt the entire growth stack — and the trajectory."
          />
          <div className="mt-8 space-y-6">
            <CaseBlock title="The challenge" body="Lumen was acquiring customers profitably but couldn't scale past $50k/mo without ROAS collapsing. Email was an afterthought." />
            <CaseBlock title="The strategy" body="Creative-led Meta scaling with 60+ ads per month, a Klaviyo flow rebuild, and a CRO-focused PDP redesign." />
            <CaseBlock title="The execution" body="Weekly creative sprints, daily campaign optimization, and a structured testing roadmap shared in a live dashboard." />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            <Metric value="450%" label="ROAS" />
            <Metric value="3,000" label="Leads / mo" />
            <Metric value="5×" label="Web Traffic" />
            <Metric value="230%" label="Revenue Growth" />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-semibold">Before vs After</h3>
            <span className="text-xs text-muted-foreground">11-month engagement</span>
          </div>
          <div className="mt-6 divide-y divide-border">
            {beforeAfter.map((row) => (
              <div key={row.label} className="grid grid-cols-3 items-center py-4">
                <div className="text-sm text-muted-foreground">{row.label}</div>
                <div className="text-right font-display text-lg font-semibold text-muted-foreground line-through">{row.before}</div>
                <div className="text-right font-display text-2xl font-bold text-gradient">{row.after}</div>
              </div>
            ))}
          </div>
          <Button asChild variant="brand" className="mt-6 w-full rounded-full">
            <Link to="/portfolio">Read the full case study <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent">{title}</div>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 text-center">
      <div className="font-display text-2xl font-bold text-gradient">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */
const trafficData = [
  { m: "Jan", v: 120 }, { m: "Feb", v: 180 }, { m: "Mar", v: 240 },
  { m: "Apr", v: 360 }, { m: "May", v: 480 }, { m: "Jun", v: 620 },
  { m: "Jul", v: 780 }, { m: "Aug", v: 940 },
];
const leadsData = [
  { m: "Jan", v: 40 }, { m: "Feb", v: 62 }, { m: "Mar", v: 88 },
  { m: "Apr", v: 110 }, { m: "May", v: 168 }, { m: "Jun", v: 220 },
  { m: "Jul", v: 290 }, { m: "Aug", v: 360 },
];

function Dashboard() {
  return (
    <section className="container-page py-24">
      <SectionHeader
        eyebrow="Always-on reporting"
        title="A live dashboard, not a monthly PDF"
        subtitle="Every client gets a real-time view of what's working — and what we're shipping next."
      />
      <div className="mt-12 rounded-3xl border border-border bg-card p-4 shadow-card md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Growth overview</div>
            <div className="font-display text-2xl font-bold">Acme Co. · Last 8 months</div>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-medium text-emerald-600 dark:text-emerald-400">● Live</span>
            <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">Updated 2 min ago</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <KPI label="Traffic" value="942k" delta="+184%" />
          <KPI label="Leads" value="3,604" delta="+312%" />
          <KPI label="Conv. Rate" value="4.8%" delta="+1.9pp" />
          <KPI label="Revenue" value="$1.28M" delta="+228%" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <ChartCard title="Organic traffic">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="v" stroke="var(--primary)" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Qualified leads">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={leadsData}>
                <XAxis dataKey="m" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="v" fill="var(--secondary)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </section>
  );
}

function KPI({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">{delta}</div>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">8 mo</div>
      </div>
      <div className="h-56">{children}</div>
    </div>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  { i: Compass, t: "Discovery Call", d: "We learn your business, goals and constraints." },
  { i: ClipboardList, t: "Market Research", d: "Audience, competitors and channel diagnostics." },
  { i: Lightbulb, t: "Strategy Planning", d: "A 90-day roadmap with clear KPIs and bets." },
  { i: Rocket, t: "Campaign Execution", d: "We build, launch and ship — fast." },
  { i: Wrench, t: "Optimization", d: "Daily tuning and weekly creative iteration." },
  { i: ChartLine, t: "Scale Growth", d: "Double down on what wins and exit the rest." },
];

function Process() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader eyebrow="How we work" title="A six-step growth operating system" subtitle="Predictable, repeatable, transparent." />
        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <div key={s.t} className={`grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className={`flex ${i % 2 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="max-w-md rounded-2xl border border-border bg-card p-6 shadow-card">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                        <s.i className="h-5 w-5" />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Step {i + 1}</div>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative h-3 w-3 rounded-full bg-gradient-brand shadow-glow mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
const WHY = [
  { i: BarChart3, t: "Data-Driven Marketing", d: "Every decision backed by attribution and incrementality testing." },
  { i: Shield, t: "Transparent Reporting", d: "Live dashboards. No black boxes. No vanity metrics." },
  { i: Users, t: "Dedicated Team", d: "Senior strategists on your account, not interns and rotations." },
  { i: TrendingUp, t: "Performance Focused", d: "We're measured on the numbers that move your business." },
  { i: Lightbulb, t: "Creative Strategy", d: "Brand and performance, working as one team." },
  { i: DollarSign, t: "Fair Pricing", d: "Flexible engagements, no lock-ins, no surprise invoices." },
];

function WhyUs() {
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="Why Northwind" title="Six reasons clients stay 8+ Months" subtitle="The unsexy fundamentals that compound into outsized results." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WHY.map((w) => (
          <div key={w.t} className="group rounded-2xl border border-border p-6 transition-all hover:border-primary/50 hover:bg-surface">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
              <w.i className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">{w.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const REVIEWS = [
  { n: "Maya Chen", c: "CEO, Lumen Skincare", r: "Northwind rebuilt our entire growth stack in 90 days. We 5x'd revenue and finally have visibility into what's working.", i: "MC" },
  { n: "James O'Connor", c: "Founder, Nordia Realty", r: "The most strategic and responsive agency we've ever worked with. Organic leads doubled in 6 months.", i: "JO" },
  { n: "Dr. Priya Rao", c: "Director, Vesta Clinic", r: "They get healthcare marketing. Our patient bookings are predictable for the first time ever.", i: "PR" },
  { n: "Felix Andersson", c: "CMO, Quanta SaaS", r: "Real strategists, not order-takers. They pushed back on our brief and were 100% right.", i: "FA" },
  { n: "Lena Park", c: "Owner, Beacon Coffee", r: "Local SEO + social changed our business. Lines out the door on weekends now.", i: "LP" },
  { n: "Thomas Reed", c: "VP Marketing, Halcyon", r: "Series A landed on the back of the brand and site they built. Worth every cent.", i: "TR" },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Loved by founders" title="What clients say" subtitle="Real reviews from teams we've worked with for years." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.n} className="relative rounded-2xl border border-border bg-card p-6">
              <Quote className="absolute right-5 top-5 h-6 w-6 text-muted/50" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">"{r.r}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-display text-sm font-semibold text-primary-foreground">
                  {r.i}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.c}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
              <div className="absolute inset-0 grid place-items-center">
                <button className="grid h-14 w-14 place-items-center rounded-full bg-background/90 shadow-glow transition-transform group-hover:scale-110">
                  <div className="ml-1 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-foreground" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <div className="text-sm font-semibold">Client Story #{i}</div>
                <div className="text-xs opacity-80">2 min · video testimonial</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
const TEAM = [
  { n: "Ava Rhodes", r: "Founder & CEO", g: "from-rose-400 to-orange-400" },
  { n: "Daniel Kim", r: "Head of Strategy", g: "from-blue-400 to-cyan-400" },
  { n: "Sofia Martins", r: "Lead SEO Specialist", g: "from-emerald-400 to-teal-400" },
  { n: "Marcus Webb", r: "Paid Media Director", g: "from-violet-400 to-fuchsia-400" },
  { n: "Yuki Tanaka", r: "Design Lead", g: "from-amber-400 to-orange-500" },
  { n: "Omar Haddad", r: "Performance Engineer", g: "from-indigo-400 to-blue-500" },
];

function Team() {
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="The team" title="Senior people on your account" subtitle="No farming, no agency layers. Just specialists who care." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {TEAM.map((m) => (
          <div key={m.n} className="group text-center">
            <div className={`relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${m.g}`}>
              <div className="absolute inset-0 grid place-items-center font-display text-4xl font-bold text-white/90">
                {m.n.split(" ").map((p) => p[0]).join("")}
              </div>
              <a href="#" aria-label="LinkedIn" className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-3 font-display text-sm font-semibold">{m.n}</div>
            <div className="text-xs text-muted-foreground">{m.r}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
const INDUSTRIES = [
  { i: Building2, t: "Real Estate" },
  { i: Stethoscope, t: "Healthcare" },
  { i: GraduationCap, t: "Education" },
  { i: ShoppingBag, t: "E-commerce" },
  { i: UtensilsCrossed, t: "Restaurants" },
  { i: HardHat, t: "Construction" },
  { i: Landmark, t: "Finance" },
  { i: Cpu, t: "Technology" },
  { i: Store, t: "Local Businesses" },
];

function Industries() {
  return (
    <section className="bg-surface py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Industries we serve" title="Specialists, not generalists" subtitle="We've built playbooks for the verticals below — yours might be next." />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {INDUSTRIES.map((it) => (
            <div key={it.t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <it.i className="h-5 w-5" />
              </div>
              <div className="font-display font-semibold">{it.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "How long does SEO take to show results?", a: "Typically 3–6 months for meaningful organic growth, with foundational fixes (technical, on-page) showing within 4–6 weeks. We share progress weekly." },
  { q: "What's a realistic budget for paid ads?", a: "We work with brands starting at $5k/mo in ad spend. Below that, we'll usually recommend SEO or organic social first to maximize ROI." },
  { q: "Do you provide reports?", a: "Better — every client gets a live dashboard updated daily, plus a strategic review call every two weeks." },
  { q: "Can you work with local businesses?", a: "Absolutely. About 30% of our roster is local. We have specific playbooks for GBP, local SEO and geo-targeted paid." },
  { q: "What industries do you serve?", a: "E-commerce, SaaS, healthcare, real estate, education, finance, restaurants and more. If you're unsure, just ask." },
];

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="container-page py-24">
      <SectionHeader eyebrow="FAQ" title="Questions we hear often" subtitle="Still wondering? Book a free 20-minute call." />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card">
        {FAQS.map((f, i) => {
          const open = openIdx === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display font-semibold">{f.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border">
                  {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
              {open && <div className="px-6 pb-6 text-sm text-muted-foreground">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- CONTACT CTA ---------------- */
function ContactCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-24 text-background">
      <div className="absolute inset-0 -z-10 opacity-50 [background:radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--primary)_60%,transparent),transparent_60%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--secondary)_60%,transparent),transparent_60%)]" />
      <div className="container-page grid items-start gap-12 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Free 30-min audit
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
            Let's pressure-test
            <br />your growth plan.
          </h2>
          <p className="mt-5 max-w-md text-background/70">
            Drop the form. We'll review your funnel, channels and creative, then send a no-bullshit teardown within 48 hours.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {["No sales pitch, just insights", "Senior strategist reviews your account", "Walk away with 3+ growth opportunities"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <form className="rounded-3xl border border-background/15 bg-background/5 p-6 backdrop-blur md:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" placeholder="Jane Doe" />
            <Field label="Business name" placeholder="Acme Co." />
            <Field label="Email" type="email" placeholder="jane@acme.com" />
            <Field label="Phone" placeholder="+1 555 000 0000" />
            <SelectField label="Monthly marketing budget" options={["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"]} />
            <SelectField label="Services interested in" options={["SEO", "Google Ads", "Meta Ads", "Web Development", "Full-funnel"]} />
          </div>
          <div className="mt-4">
            <label className="text-xs font-medium uppercase tracking-wider text-background/60">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us a bit about your goals…"
              className="mt-1.5 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/40 outline-none focus:border-accent"
            />
          </div>
          <Button variant="brand" size="lg" className="mt-6 w-full rounded-full">
            Get Free Marketing Audit <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="mt-3 text-center text-xs text-background/50">No spam. Reply within 1 business day.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-background/60">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background placeholder:text-background/40 outline-none focus:border-accent"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-background/60">{label}</label>
      <select className="mt-1.5 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-2.5 text-sm text-background outline-none focus:border-accent">
        <option value="" className="bg-foreground">Select…</option>
        {options.map((o) => <option key={o} className="bg-foreground">{o}</option>)}
      </select>
    </div>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeader({ eyebrow, title, subtitle, align = "center" }: {
  eyebrow: string; title: string; subtitle?: string; align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}

// Silence unused warnings for icons we reference dynamically across mock content
void Accordion; void AccordionContent; void AccordionItem; void AccordionTrigger;
