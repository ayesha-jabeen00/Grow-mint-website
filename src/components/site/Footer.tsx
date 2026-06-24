import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/images/growmintlogo.png";
export function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917799770919", "_blank");
  };

  return (
    <footer className="bg-[#0B1020] text-white">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Hash Orbit home">
           <img
  src={logo}
  alt="Hash Orbit"
  className="h-20 md:h-24 lg:h-28 w-auto object-contain"
/>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Building digital success through smart creatives and technology. Your trusted partner for web development, marketing, and creative solutions.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href="#" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
              {/* <SocialIcon href="#" label="Twitter"><Twitter className="h-4 w-4" /></SocialIcon>
              <SocialIcon href="#" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon> */}
              <SocialIcon href="#" label="YouTube"><Youtube className="h-4 w-4" /></SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">SEO & SMM</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Video Editing</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Graphic Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Branding</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-display text-lg font-semibold text-white">Get In Touch</h4>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p className="flex flex-col">
                <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+911234567890" className="hover:text-white transition-colors">
                  +91 12345 67890
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:Growmintdigitals@gmail.com" className="hover:text-white transition-colors break-all">
                  Growmintdigitals@gmail.com
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</span>
                <span>Hyderabad, India</span>
              </p>
            </div>
            
            {/* WhatsApp CTA Button */}
            <button
              onClick={handleWhatsAppClick}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Chat On WhatsApp
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Grow Mint . All rights reserved.
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
    >
      {children}
    </a>
  );
}