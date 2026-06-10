import { MessageCircle } from "lucide-react";

type Props = {
  position?: "fixed" | "absolute";
};

export function WhatsAppButton({ position = "fixed" }: Props) {
  const phoneNumber = "7799770919";
  const message = "Hello! I have a question about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }}
      className={`${
        position === "fixed"
          ? "fixed bottom-6 right-6 md:bottom-8 md:right-8"
          : "absolute top-6 right-6 md:top-8 md:right-8"
      } z-50 flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-xl`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 md:h-7 md:w-7" />
    </a>
  );
}
