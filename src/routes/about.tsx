import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Grow Mint Marketing Agency" },
      {
        name: "description",
        content:
          "Meet the team behind 200+ scaled brands. Senior strategists, transparent reporting, and a relentless focus on results.",
      },
      { property: "og:title", content: "About Grow Mint" },
      {
        property: "og:description",
        content: "Meet the team behind 200+ scaled brands.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          About us
        </div>

        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-6xl">
          A studio of <span className="text-gradient">growth operators.</span>
        </h1>

        <div className="mt-6 space-y-4 text-lg text-muted-foreground">
          <p>
            Founded in 2026, Grow Mint helps ambitious brands grow through
            strategy, creative execution, and performance marketing.
          </p>

          <p>
            We're a team of strategists, creatives, and analysts focused on one
            thing: delivering measurable results that help businesses scale with
            confidence.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="brand" size="lg" className="rounded-full">
            <Link to="/contact">Work with us</Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/portfolio">See our work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}