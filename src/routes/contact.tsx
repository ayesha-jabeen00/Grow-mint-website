import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GROWMINT | Let's Build Your Brand" },
      {
        name: "description",
        content:
          "Ready to transform your digital presence? Contact GROWMINT for web development, digital marketing, branding, and growth solutions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setIsSubmitting(true);
  setSuccessMessage("");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c0103624-17db-4df5-ba37-3b7762761461",
        subject: "New Contact Form Submission - GROWMINT",

        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Submission failed");
    }

    setSuccessMessage(
      "Thank you! Your message has been received. Our team will contact you shortly."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  } catch (error) {
    setSuccessMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi GROWMINT! I'm interested in your services."
    );

    window.open(
      `https://wa.me/918688376662?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get in Touch
          </span>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Build Your <span className="text-gradient">Brand!</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Ready to transform your digital presence? Let's discuss your
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h2>

            {successMessage && (
              <div className="mb-4 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
               <input
    type="hidden"
    name="access_key"
    value="c0103624-17db-4df5-ba37-3b7762761461"
  />
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>

                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Message
                </label>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="brand"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-glow">
              <h2 className="font-display text-2xl font-bold mb-3">
                Quick Response Guaranteed
              </h2>

              <p className="mb-6 text-sm opacity-90">
                Prefer WhatsApp? Click below for instant communication with our
                team.
              </p>

              <Button
                onClick={handleWhatsApp}
                className="w-full bg-white text-primary hover:bg-white/90"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>

            <InfoCard
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Email Us"
              value="Growmintdigitals@gmail.com"
            />

            <InfoCard
              icon={<Phone className="h-5 w-5 text-primary" />}
              title="Call Us"
              value=" +91 8688376662"
            />

            <InfoCard
              icon={<MapPin className="h-5 w-5 text-primary" />}
              title="Location"
              value="Visakhapatnam, Andhra Pradesh, India"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}