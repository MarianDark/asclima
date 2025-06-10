// src/pages/Servicios.jsx

import { FaTools, FaFan, FaTemperatureLow, FaRegHandshake } from "react-icons/fa";

export default function Servicios() {
  return (
    <div className="mt-20">
      {/* Hero */}
      <section className="bg-blue-100 py-14 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">Nuestros Servicios</h1>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          En ASClima ofrecemos soluciones completas para la instalación, reparación y mantenimiento de sistemas de aire acondicionado y climatización.
        </p>
      </section>

      {/* Servicios principales */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <FaTools className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Instalación</h3>
            <p className="text-sm text-gray-600">Instalamos sistemas Split, por conductos, cassette y más con materiales certificados.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <FaFan className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Reparación</h3>
            <p className="text-sm text-gray-600">Reparamos cualquier marca y modelo, solucionando averías en tiempo récord.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <FaTemperatureLow className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Carga de Gas</h3>
            <p className="text-sm text-gray-600">Ofrecemos recarga de gas con revisión completa del equipo y garantía incluida.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition">
            <FaRegHandshake className="text-blue-600 text-3xl mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Mantenimiento</h3>
            <p className="text-sm text-gray-600">Mantenimientos periódicos para prolongar la vida útil de tu sistema.</p>
          </div>
        </div>
      </section>

      {/* Beneficios adicionales */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">¿Por qué elegirnos?</h2>
        <ul className="max-w-4xl mx-auto text-gray-700 space-y-2 text-sm sm:text-base text-left">
          <li>✅ Servicio 24/7 en Madrid y alrededores.</li>
          <li>✅ Técnicos certificados y con experiencia.</li>
          <li>✅ Garantía en todas nuestras intervenciones.</li>
          <li>✅ Atención personalizada y rápida.</li>
        </ul>
      </section>

      {/* Testimonios de clientes */}
<section className="bg-white py-12 px-4 text-center">
  <h2 className="text-2xl font-bold text-blue-800 mb-8">Lo que dicen nuestros clientes</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Testimonio 1 */}
    <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition text-left">
      <p className="text-gray-700 text-sm mb-4 italic">
        “El técnico llegó puntual y dejó el aire funcionando como nuevo. Muy profesionales.”
      </p>
      <div className="text-sm font-semibold text-blue-800">Carlos G. - Madrid</div>
    </div>

    {/* Testimonio 2 */}
    <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition text-left">
      <p className="text-gray-700 text-sm mb-4 italic">
        “Contraté la instalación para mi oficina. Rápido, limpio y con muy buen trato. Recomendados.”
      </p>
      <div className="text-sm font-semibold text-blue-800">Laura M. - Leganés</div>
    </div>

    {/* Testimonio 3 */}
    <div className="bg-gray-50 p-6 rounded shadow hover:shadow-lg transition text-left">
      <p className="text-gray-700 text-sm mb-4 italic">
        “Me resolvieron una urgencia de fin de semana sin sobrecoste. ¡Volveré a llamarlos!”
      </p>
      <div className="text-sm font-semibold text-blue-800">Sergio T. - Getafe</div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="bg-blue-600 text-white py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold">¿Necesitas un servicio urgente?</h2>
        <p className="mt-2 text-sm">Contáctanos ahora y recibe una solución inmediata.</p>
        <a
          href="/contacto"
          className="mt-4 inline-block bg-yellow-400 text-black py-2 px-6 rounded hover:bg-yellow-300 transition"
        >
          Solicitar servicio
        </a>
      </section>
    </div>
  );
}
