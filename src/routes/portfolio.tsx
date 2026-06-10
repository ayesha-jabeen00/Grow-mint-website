import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PortfolioSection } from "@/components/site/PortfolioSection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected Work | Northwind" },
      { name: "description", content: "Case studies from e-commerce, SaaS, healthcare, real estate and local brands we've scaled." },
      { property: "og:title", content: "Portfolio | Northwind" },
      { property: "og:description", content: "Selected client work and case studies." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PortfolioSection />

      <section className="container-page pb-24 text-center">
        <Button asChild variant="brand" size="lg" className="rounded-full">
          <Link to="/contact">Start your project</Link>
        </Button>
      </section>
    </>
  );
}
