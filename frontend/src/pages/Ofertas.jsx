// src/pages/Ofertas.jsx

import ofertaGas from "../assets/oferta-gas.png"; // usa los nombres de tus imágenes
import ofertaInstalacion from "../assets/oferta-instalacion.jpg";

export default function Ofertas() {
  return (
    <div className="mt-20">
      {/* Hero */}
      <section className="bg-blue-100 py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">Nuestras Ofertas</h1>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Descubre las promociones vigentes en instalación, mantenimiento y carga de gas. ¡Aprovecha precios especiales por tiempo limitado!
        </p>
      </section>

      {/* Bloques de oferta */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Oferta de gas */}
          <div className="bg-gray-50 rounded shadow hover:shadow-lg transition">
            <img src={ofertaGas} alt="Oferta Carga de Gas" className="w-full rounded-t" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Carga de Gas por 80€</h3>
              <p className="text-sm text-gray-700 mb-4">
                Incluye revisión completa del sistema y garantía. Ideal para equipos con pérdida de rendimiento.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Solicitar
              </a>
            </div>
          </div>

          {/* Oferta de instalación */}
          <div className="bg-gray-50 rounded shadow hover:shadow-lg transition">
            <img src={ofertaInstalacion} alt="Oferta Instalación" className="w-full rounded-t" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Instalación desde 199€</h3>
              <p className="text-sm text-gray-700 mb-4">
                Instalación profesional de Split 1x1 incluyendo desplazamiento y materiales básicos. 
              </p>
              <a
                href="/contacto"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Reservar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-yellow-300 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">¡Aprovecha estas ofertas antes de que terminen!</h2>
        <p className="mt-2 text-sm text-gray-700">Contáctanos hoy mismo y asegura tu cita al mejor precio.</p>
        <a
          href="/contacto"
          className="mt-4 inline-block bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
        >
          📞 624 417 886
        </a>
      </section>
    </div>
  );
}
