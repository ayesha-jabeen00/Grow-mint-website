import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Search, Megaphone, Target, Share2, PenLine, Video,
  TrendingUp, Sparkles, Zap, Mail, Globe, GitBranch, ArrowRight, X,
  Send, Loader2,
} from "lucide-react";
import { Rocket } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { useState } from "react";

const WEBSITE_CATEGORIES = [
  "All Websites",
  "E-Commerce",
  "Real Estate",
  "Logistics",
  "Healthcare",
  "Portfolio",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SEO, Paid Ads, Web & More | Northwind" },
      { name: "description", content: "Twelve services across SEO, paid media, content, web and automation — engineered as one integrated growth engine." },
      { property: "og:title", content: "Services | Northwind" },
      { property: "og:description", content: "Full-stack growth services for ambitious brands." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Search, name: "SEO", desc: "Technical, on-page and link strategies that compound for years." },
  { icon: Target, name: "Google Ads", desc: "Search, Shopping, Performance Max — built for blended ROAS." },
  { icon: Megaphone, name: "Meta Ads", desc: "Creative-first scaling on Facebook, Instagram and Reels." },
  { icon: Share2, name: "Social Media", desc: "Native organic content systems that build affinity." },
  { icon: PenLine, name: "Content Marketing", desc: "Editorial that ranks and converts." },
  { icon: Video, name: "Video Marketing", desc: "UGC, ad creative and YouTube growth." },
  { icon: TrendingUp, name: "Performance Marketing", desc: "Full-funnel attribution and CRO." },
  { icon: Sparkles, name: "Brand Strategy", desc: "Positioning, story and visual identity." },
  { icon: Globe, name: "Website Development", desc: "Fast, SEO-friendly sites that convert." },
];

const DEMO_WEBSITES = [
  {
    id: 1,
    name: "Luxury Furniture Store",
    category: "E-Commerce",
    description: "Premium online furniture store with modern shopping experience and secure checkout.",
    tags: ["React", "Stripe", "Tailwind"],
    imagePlaceholder: "🛋️",
  },
  {
    id: 2,
    name: "Fashion Hub",
    category: "E-Commerce",
    description: "Online clothing store designed for high conversions and mobile shoppers.",
    tags: ["Next.js", "SEO", "E-Commerce"],
    imagePlaceholder: "👕",
  },
  {
    id: 3,
    name: "Dream Homes Realty",
    category: "Real Estate",
    description: "Modern property listing website with lead generation features.",
    tags: ["React", "CRM", "Lead Generation"],
    imagePlaceholder: "🏠",
  },
  {
    id: 4,
    name: "Prime Properties",
    category: "Real Estate",
    description: "Luxury real estate website showcasing premium residential projects.",
    tags: ["SEO", "Listings", "UI/UX"],
    imagePlaceholder: "🏢",
  },
  {
    id: 5,
    name: "Sky Logistics",
    category: "Logistics",
    description: "Corporate logistics and fleet management website.",
    tags: ["React", "Booking", "Transport"],
    imagePlaceholder: "✈️",
  },
  {
    id: 6,
    name: "Fast Cargo Solutions",
    category: "Logistics",
    description: "Freight and cargo transportation website for enterprise clients.",
    tags: ["Tracking", "Logistics", "SEO"],
    imagePlaceholder: "🚚",
  },
  {
    id: 7,
    name: "MediCare Plus",
    category: "Healthcare",
    description: "Hospital and clinic website with appointment booking system.",
    tags: ["Healthcare", "Booking", "React"],
    imagePlaceholder: "🏥",
  },
  {
    id: 8,
    name: "Dental Care Center",
    category: "Healthcare",
    description: "Professional dental clinic website focused on patient acquisition.",
    tags: ["SEO", "Appointments", "Healthcare"],
    imagePlaceholder: "🦷",
  },
  {
    id: 9,
    name: "Creative Designer Portfolio",
    category: "Portfolio",
    description: "Modern portfolio website for freelancers and creative professionals.",
    tags: ["Portfolio", "Animation", "React"],
    imagePlaceholder: "🎨",
  },
  {
    id: 10,
    name: "Digital Agency Portfolio",
    category: "Portfolio",
    description: "Agency showcase website highlighting services and case studies.",
    tags: ["Agency", "Branding", "UI/UX"],
    imagePlaceholder: "✨",
  },
];

// Updated Pricing Modal Component
interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
  onSubmit: (data: PricingFormData) => void;
  isLoading: boolean;
}

interface PricingFormData {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  instagramHandle: string;
  requirements: string;
}

function PricingModal({ isOpen, onClose, selectedPackage, onSubmit, isLoading }: PricingModalProps) {
  const [formData, setFormData] = useState<PricingFormData>({
    fullName: '',
    phone: '',
    email: '',
    businessName: '',
    instagramHandle: '',
    requirements: '',
  });
  const [errors, setErrors] = useState<Partial<PricingFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<PricingFormData> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof PricingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-green-100 dark:border-green-900/30 p-6 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 mb-3">
                <span className="text-xs font-medium text-green-700 dark:text-green-300">Selected Package</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Get Started With {selectedPackage}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Fill in your details and we'll contact you with a customized strategy and package details.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Full Name - Required */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.fullName 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-green-500'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Phone Number - Required */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-green-500'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              placeholder="+91 12345 67890"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Email Address - Required */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-300 dark:border-gray-700 focus:border-green-500'
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/20`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Business Name - Optional */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Business Name <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => handleChange('businessName', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/20"
              placeholder="Your Business Name"
            />
          </div>

          {/* Instagram Handle - Optional */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Instagram Handle <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
              <input
                type="text"
                value={formData.instagramHandle}
                onChange={(e) => handleChange('instagramHandle', e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/20"
                placeholder="yourbrand"
              />
            </div>
          </div>

          {/* Project Requirements - Optional */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Requirements <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <textarea
              value={formData.requirements}
              onChange={(e) => handleChange('requirements', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:border-green-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none"
              placeholder="Tell us about your project requirements, goals, and expectations..."
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-full border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30 transition-all duration-300"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Continue To WhatsApp
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Websites");
  const [selectedWebsite, setSelectedWebsite] = useState<typeof DEMO_WEBSITES[0] | null>(null);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedPricingPackage, setSelectedPricingPackage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredWebsites =
    activeCategory === "All Websites"
      ? DEMO_WEBSITES
      : DEMO_WEBSITES.filter(
          (site) => site.category === activeCategory
        );

  const handleWhatsAppClick = (siteName: string) => {
    const message = `Hi, I want a website similar to ${siteName}. Please share pricing and details.`;
    const whatsappUrl = `https://wa.me/918688376662?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePricingButtonClick = (packageName: string) => {
    console.log("Opening modal for:", packageName); // Debug log
    setSelectedPricingPackage(packageName);
    setIsPricingModalOpen(true);
  };

  const handlePricingFormSubmit = async (formData: PricingFormData) => {
    setIsLoading(true);
    
    // Simulate loading state for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Create the pre-filled WhatsApp message
    const message = `Hi GrowMint Team,

I am interested in the ${selectedPricingPackage}.

My Details:

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Business: ${formData.businessName || 'Not specified'}
Instagram: ${formData.instagramHandle ? '@' + formData.instagramHandle : 'Not specified'}

Requirements:
${formData.requirements || 'No specific requirements mentioned yet'}

Please share:
• Package details
• Content strategy
• Timeline
• Payment process

Thank you.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918688376662?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Close modal and reset loading
    setIsLoading(false);
    setIsPricingModalOpen(false);
  };

  return (
    <>
      <section className="container-page py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Services
        </div>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight md:text-6xl">
          One team. <span className="text-gradient">Every channel that matters.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Pick a single service or run your entire growth function with us — most clients start with two and add more as they scale.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.name} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild variant="brand" size="lg" className="rounded-full">
            <Link to="/contact">Get a custom proposal <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
{/* Pricing Packages Section - Redesigned with Modal */}
<section className="relative overflow-hidden py-24">
  {/* Background effects */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-green-500/20 blur-[100px] dark:bg-green-500/10" />
    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-600/20 blur-[120px] dark:bg-green-600/10" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-green-400/10 blur-[100px]" />
  </div>

  <div className="container-page">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center rounded-full border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/30 backdrop-blur-sm px-4 py-1.5 mb-4">
        <span className="text-xs font-medium uppercase tracking-wider text-green-600 dark:text-green-400">Packages</span>
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
        GROWMINT PACKAGES
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
        Content That Connects. Strategy That Grows.
      </p>
    </div>

    {/* Pricing Cards Grid */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-items-center">
      
      {/* Starter Package */}
      <div className="group relative w-full max-w-sm h-full">
        <div className="relative rounded-3xl bg-white dark:bg-gray-900 border-2 border-green-400/60 dark:border-green-500/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg hover:shadow-green-500/20 flex flex-col h-full">
          <div className="relative flex-1 flex flex-col">
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-500/40 bg-green-50 dark:bg-green-950/30">
                <Rocket className="h-10 w-10 text-green-600 dark:text-green-400" strokeWidth={2.5} />
              </div>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-center mb-1 text-gray-900 dark:text-white">STARTER</h3>
            <h4 className="font-display text-xl font-semibold text-center mb-2 text-gray-700 dark:text-gray-300">PACKAGE</h4>
            
            {/* Green Header Strip */}
            <div className="mb-4 bg-green-600 dark:bg-green-700 rounded-lg p-2 text-center">
              <p className="text-xs font-medium text-white uppercase tracking-wide">
                Perfect For Startups & Small Businesses
              </p>
            </div>
            
            {/* Price Section - Poster Style */}
            <div className="mb-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold text-red-500 line-through">₹20,000</span>
                <span className="text-xs text-muted-foreground">/month</span>
              </div>
              
              <div className="mt-1">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">LIMITED TIME OFFER</span>
              </div>
            </div>
            
            {/* Green Price Box */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 shadow-lg shadow-green-500/30">
                <div className="text-center">
                  <span className="text-3xl font-bold text-white">₹18,000</span>
                  <span className="text-sm text-green-100 ml-1">/month</span>
                </div>
                <div className="mt-1 text-center">
                  <span className="text-xs font-semibold text-green-100 bg-white/20 px-3 py-0.5 rounded-full">
                    NOW ONLY
                  </span>
                </div>
              </div>
            </div>
            
            {/* Features with Dividers */}
            <ul className="space-y-3 flex-1">
              {[
                "12 Reels / Month",
                "Festival Creative Covers",
                "Content Creation",
                "Editing",
                "1 Day Shoot Session",
                "Monthly Content Calendar"
              ].map((feature, index) => (
                <li key={index}>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex-shrink-0 rounded-full bg-green-500 p-1">
                      <div className="h-3 w-3 text-white">✓</div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                  {index < 5 && (
                    <div className="mt-3 border-t border-gray-200 dark:border-gray-700" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <Button
            onClick={() => handlePricingButtonClick("Starter Package")}
            className="relative z-20 mt-6 w-full rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            Choose Starter
          </Button>
        </div>
      </div>

      {/* Growth Package - Most Popular */}
      <div className="group relative w-full max-w-sm h-full lg:-mt-4">
        <div className="relative rounded-3xl bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl shadow-green-500/25 border-4 border-green-500 dark:border-green-400 flex flex-col h-full">
          {/* Glowing border effect */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-green-400 via-green-500 to-green-400 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500 -z-10 animate-pulse" />
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-green-400 via-green-500 to-green-400 opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
          
          {/* Most Popular Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="inline-flex animate-pulse items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-green-500/30">
              ⭐ MOST POPULAR
            </span>
          </div>
          
          <div className="relative flex-1 flex flex-col">
            {/* Icon */}
          <div className="mb-4 flex justify-center">
  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-500 bg-gradient-to-b from-green-700 to-green-900 shadow-lg">
    <ChartNoAxesCombined
      className="h-10 w-10 text-white"
      strokeWidth={2.5}
    />
  </div>
</div>
            
            <h3 className="font-display text-2xl font-bold text-center mb-1 text-gray-900 dark:text-white">GROWTH</h3>
            <h4 className="font-display text-xl font-semibold text-center mb-2 text-gray-700 dark:text-gray-300">PACKAGE</h4>
            
            {/* Green Header Strip */}
            <div className="mb-4 bg-green-600 dark:bg-green-700 rounded-lg p-2 text-center">
              <p className="text-xs font-medium text-white uppercase tracking-wide">
                Perfect For Growing Businesses
              </p>
            </div>
            
            {/* Price Section - Poster Style */}
            <div className="mb-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold text-red-500 line-through">₹30,000</span>
                <span className="text-xs text-muted-foreground">/month</span>
              </div>
              
              <div className="mt-1">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">LIMITED TIME OFFER</span>
              </div>
            </div>
            
            {/* Green Price Box */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 shadow-lg shadow-green-500/30">
                <div className="text-center">
                  <span className="text-3xl font-bold text-white">₹26,000</span>
                  <span className="text-sm text-green-100 ml-1">/month</span>
                </div>
                <div className="mt-1 text-center">
                  <span className="text-xs font-semibold text-green-100 bg-white/20 px-3 py-0.5 rounded-full">
                    NOW ONLY
                  </span>
                </div>
              </div>
            </div>
            
            {/* Features with Dividers */}
            <ul className="space-y-3 flex-1">
              {[
                "15 Reels / Month",
                "Festival Creative Covers",
                "Content Creation",
                "Professional Editing",
                "2-Day Shoot Session",
                "Monthly Content Calendar"
              ].map((feature, index) => (
                <li key={index}>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex-shrink-0 rounded-full bg-green-500 p-1">
                      <div className="h-3 w-3 text-white">✓</div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                  {index < 5 && (
                    <div className="mt-3 border-t border-gray-200 dark:border-gray-700" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <Button
            onClick={() => handlePricingButtonClick("Growth Package")}
            className="mt-6 w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Choose Growth
          </Button>
        </div>
      </div>

      {/* Premium Package */}
      <div className="group relative w-full max-w-sm h-full">
        <div className="relative rounded-3xl bg-white dark:bg-gray-900 border-2 border-green-400/60 dark:border-green-500/40 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-lg hover:shadow-green-500/20 flex flex-col h-full">
          <div className="relative flex-1 flex flex-col">
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-500/40 bg-green-50 dark:bg-green-950/30">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-green-600 dark:text-green-400"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
            
            <h3 className="font-display text-2xl font-bold text-center mb-1 text-gray-900 dark:text-white">PREMIUM</h3>
            <h4 className="font-display text-xl font-semibold text-center mb-2 text-gray-700 dark:text-gray-300">PACKAGE</h4>
            
            {/* Green Header Strip */}
            <div className="mb-4 bg-green-600 dark:bg-green-700 rounded-lg p-2 text-center">
              <p className="text-xs font-medium text-white uppercase tracking-wide">
                Perfect For Established Brands
              </p>
            </div>
            
            {/* Price Section - Poster Style */}
            <div className="mb-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-bold text-red-500 line-through">₹35,000</span>
                <span className="text-xs text-muted-foreground">/month</span>
              </div>
              
              <div className="mt-1">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">LIMITED TIME OFFER</span>
              </div>
            </div>
            
            {/* Green Price Box */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 shadow-lg shadow-green-500/30">
                <div className="text-center">
                  <span className="text-3xl font-bold text-white">₹30,000</span>
                  <span className="text-sm text-green-100 ml-1">/month</span>
                </div>
                <div className="mt-1 text-center">
                  <span className="text-xs font-semibold text-green-100 bg-white/20 px-3 py-0.5 rounded-full">
                    NOW ONLY
                  </span>
                </div>
              </div>
            </div>
            
            {/* Features with Dividers */}
            <ul className="space-y-3 flex-1">
              {[
                "20 Reels / Month",
                "Festival Creative Covers",
                "Content Creation",
                "Professional Editing",
                "4-Day Shoot Session",
                "Monthly Content Calendar",
                "Monthly Performance Review"
              ].map((feature, index) => (
                <li key={index}>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex-shrink-0 rounded-full bg-green-500 p-1">
                      <div className="h-3 w-3 text-white">✓</div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                  {index < 6 && (
                    <div className="mt-3 border-t border-gray-200 dark:border-gray-700" />
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <Button
            onClick={() => handlePricingButtonClick("Premium Package")}
            className="relative z-20 mt-6 w-full rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            Choose Premium
          </Button>
        </div>
      </div>
    </div>

    {/* Custom Package CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-950/20 backdrop-blur-sm px-8 py-6">
        <p className="text-lg font-medium text-muted-foreground">
          Need a custom package?
        </p>
        <Button
          onClick={() => handlePricingButtonClick("Custom Package")}
          variant="outline"
          size="lg"
          className="rounded-full border-2 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950/50 hover:border-green-500 transition-all duration-300 hover:scale-105"
        >
          Request Custom Quote
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Demo Website Collection Section */}
      <section className="container-page pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Demo Website Collection</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our handcrafted website examples. Each design is fully customizable for your brand.
          </p>
        </div>

        {/* Category Filter Navbar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {WEBSITE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card hover:bg-[#0F6EF7]/10 hover:text-[#0F6EF7]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Website Cards Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredWebsites.map((site) => (
            <div
              key={site.id}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Screenshot Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#EAF3FF] to-[#0F6EF7]/20 flex items-center justify-center text-6xl">
                {site.imagePlaceholder}
              </div>
              
              <div className="p-6">
                <p className="text-sm text-[#0F6EF7] font-medium">
                  {site.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {site.name}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {site.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0F6EF7]/10 text-[#0F6EF7] px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1 hover:bg-[#0F6EF7] hover:text-white hover:border-[#0F6EF7]"
                    onClick={() => setSelectedWebsite(site)}
                  >
                    View Details
                  </Button>

                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => handleWhatsAppClick(site.name)}
                  >
                    I Want This Website
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWebsites.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No websites found in this category.</p>
          </div>
        )}
      </section>

      {/* Modal for View Details */}
      {selectedWebsite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedWebsite(null)}>
          <div className="bg-card rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
              <h3 className="font-display text-xl font-bold">{selectedWebsite.name}</h3>
              <button 
                onClick={() => setSelectedWebsite(null)}
                className="p-1 rounded-full hover:bg-[#0F6EF7]/10 hover:text-[#0F6EF7] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="h-40 bg-gradient-to-br from-[#EAF3FF] to-[#0F6EF7]/20 flex items-center justify-center text-6xl rounded-xl mb-4">
                {selectedWebsite.imagePlaceholder}
              </div>
              <p className="text-sm text-primary font-medium mb-2">{selectedWebsite.category}</p>
              <p className="text-muted-foreground mb-4">{selectedWebsite.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWebsite.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#0F6EF7]/10 text-[#0F6EF7] px-3 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 hover:bg-[#0F6EF7] hover:text-white hover:border-[#0F6EF7]"
                  onClick={() => setSelectedWebsite(null)}
                >
                  Close
                </Button>
                <Button 
                  className="flex-1 hover:bg-[#0F6EF7] hover:text-white hover:border-[#0F6EF7]"
                  onClick={() => {
                    handleWhatsAppClick(selectedWebsite.name);
                    setSelectedWebsite(null);
                  }}
                >
                  Request This Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Modal */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        selectedPackage={selectedPricingPackage}
        onSubmit={handlePricingFormSubmit}
        isLoading={isLoading}
      />
    </>
  );
}

export default ServicesPage;