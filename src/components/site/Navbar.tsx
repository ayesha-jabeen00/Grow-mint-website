import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/site/SearchBar";
import logo from "@/assets/images/growmintlogo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const PHONE_DISPLAY = "+91 77997 70919";
const PHONE_HREF = "tel:+917799770919";

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
      <div className="container-page flex h-24 items-center justify-between gap-4 md:h-28">
        <Link to="/" className="flex items-center shrink-0" aria-label="Hash Orbit home">
          <img
  src={logo}
  alt="GrowMint Logo"
  className="h-8 w-auto md:h-15 object-contain"
/>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
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

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-md justify-end">
          <SearchBar className="w-full max-w-xs" />
          <Button asChild variant="brand" size="sm" className="shrink-0">
            <a href={PHONE_HREF} aria-label={`Call us at ${PHONE_DISPLAY}`}>
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">Call Us</span>
            </a>
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
          <div className="container-page flex flex-col gap-2 py-3">
            <SearchBar onNavigate={() => setOpen(false)} />
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
            <Button asChild variant="brand" className="mt-1">
              <a href={PHONE_HREF} onClick={() => setOpen(false)}>
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
