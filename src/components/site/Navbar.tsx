import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/hash-orbit-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" aria-label="Hash Orbit home">
          <img
            src={logoAsset.url}
            alt="Hash Orbit"
            width={1200}
            height={675}
            className="h-10 w-auto md:h-12 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild variant="brand" size="sm">
            <Link to="/contact">Book Free Audit</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="brand" className="mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Free Audit</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
