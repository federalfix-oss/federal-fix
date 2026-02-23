import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackLead } from "../lib/tracking";

const PHONE_NUMBER_DISPLAY = "+971 54 300 4006";
const PHONE_NUMBER_RAW = "971543004006";

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 260);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 z-40 flex flex-col gap-3 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <a
        href={`https://wa.me/${PHONE_NUMBER_RAW}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLead("floating_whatsapp_click")}
        className="group fx-sheen inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
        
      </a>

      <a
        href={`tel:${PHONE_NUMBER_DISPLAY.replace(/\s+/g, "")}`}
        onClick={() => trackLead("floating_phone_click")}
        className="group fx-sheen inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#bd1920]/30 bg-[#bd1920] text-white shadow-xl shadow-[#bd1920]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
        aria-label={`Call ${PHONE_NUMBER_DISPLAY}`}
      >
        <Phone className="h-6 w-6" />
        
      </a>
    </div>
  );
};

export default FloatingActionButton;
