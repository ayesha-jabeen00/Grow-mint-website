import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logoAsset from "@/assets/hash-orbit-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[#0B1020] text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Hash Orbit home">
              <img
                src={logoAsset.url}
                alt="Hash Orbit"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Building digital success through smart creatives and technology. Your trusted partner for web development, marketing, and creative solutions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="#" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="Twitter"><Twitter className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><Youtube className="h-4 w-4" /></SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/" className="hover:text-white">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-white">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-white">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white">SEO & SMM</Link></li>
              <li><Link to="/services" className="hover:text-white">Video Editing</Link></li>
              <li><Link to="/services" className="hover:text-white">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-white">Branding</Link></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Stay Updated</h4>
            <p className="mt-5 text-sm text-white/70">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-primary"
              />
              <button className="rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Hash Orbit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}
