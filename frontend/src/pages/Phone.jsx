import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
    const phoneNumber = "+919876543210";
    const whatsappNumber = "919876543210";
    const msg = "Hello! I have a query about your services.";
    const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    return (
        <div className="fixed bottom-12 right-5 z-[9999] flex flex-col gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="h-14 w-14 rounded-full grid place-items-center shadow-lg hover:-translate-y-0.5 transition bg-[#25D366] text-white animate-bounce [animation-duration:2s] [animation-delay:1s]">
                <FaWhatsapp className="text-2xl" />
            </a>
            <a href={`tel:${phoneNumber}`} aria-label="Call us"
                className="h-14 w-14 rounded-full grid place-items-center shadow-lg hover:-translate-y-0.5 transition bg-[#0b72ff] text-white animate-bounce [animation-duration:2s] [animation-delay:1s]">
                <FaPhone className="text-2xl" />
            </a>
        </div>
    );
}