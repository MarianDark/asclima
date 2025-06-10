// src/components/FloatingButtons.jsx
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Botón de llamada */}
      <a
        href="tel:604277343"
        className="fixed bottom-28 right-4 bg-blue-500 p-3 rounded-full shadow-lg z-50"
      >
        <FaPhoneAlt className="text-white" />
      </a>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/34604277343"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-4 bg-green-500 p-3 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp className="text-white" />
      </a>

      {/* Botón flecha hacia arriba */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg z-50 border border-gray-300 hover:bg-gray-100"
        aria-label="Subir al inicio"
      >
        <FaArrowUp />
      </button>
    </>
  );
}
