import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logoAsset from "@/assets/hash-orbit-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center" aria-label="Hash Orbit home">
              <img
                src={logoAsset.url}
                alt="Hash Orbit"
                width={1200}
                height={675}
                className="h-[60px] w-auto md:h-20 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A performance marketing studio building compounding growth engines for ambitious brands across the globe.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary"
              />
              <button className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>

          <FooterCol title="Company" items={[
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Portfolio", to: "/portfolio" },
            { label: "Contact", to: "/contact" },
          ]} />
          <FooterCol title="Services" items={[
            { label: "SEO", to: "/services" },
            { label: "Google Ads", to: "/services" },
            { label: "Meta Ads", to: "/services" },
            { label: "Web Development", to: "/services" },
          ]} />
          <FooterCol title="Legal" items={[
            { label: "Privacy Policy", to: "/" },
            { label: "Terms & Conditions", to: "/" },
            { label: "Cookies", to: "/" },
          ]} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Northwind Agency. All rights reserved.</p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="hover:text-foreground">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
