// src/pages/Nosotros.jsx

export default function Nosotros() {
  return (
    <div className="mt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">Sobre Nosotros</h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-700">
          Comprometidos con tu confort. Más de 10 años instalando, reparando y manteniendo sistemas de climatización con profesionalismo y cercanía.
        </p>
      </section>

      {/* Historia / Filosofía */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Nuestra historia</h2>
        <p className="text-gray-700 leading-relaxed">
          En <strong>ASClima</strong> comenzamos con una meta clara: ofrecer soluciones confiables y eficientes en climatización para hogares y empresas en toda la Comunidad de Madrid.
          Con el tiempo, hemos evolucionado sin perder nuestra esencia: atención personalizada, rapidez y calidad en cada instalación o reparación.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Nos diferencia nuestra capacidad de adaptarnos a cada cliente, usando tecnología de última generación y personal altamente cualificado.
        </p>
      </section>

      {/* Valores / Ventajas */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">🔧 Profesionalidad</h3>
            <p className="text-gray-600 text-sm">Técnicos certificados y en formación continua para darte el mejor servicio.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">📞 Atención 24/7</h3>
            <p className="text-gray-600 text-sm">Estamos disponibles todos los días para atender urgencias y resolver dudas.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700 mb-2">🏆 Garantía y Confianza</h3>
            <p className="text-gray-600 text-sm">Todas nuestras instalaciones están garantizadas por escrito.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold">¿Te gustaría trabajar con nosotros?</h2>
        <p className="mt-2 text-sm">Contáctanos y recibe asesoramiento personalizado para tu climatización.</p>
        <a
          href="/contacto"
          className="mt-4 inline-block bg-yellow-400 text-black py-2 px-6 rounded hover:bg-yellow-300 transition"
        >
          ¡Contáctanos!
        </a>
      </section>
    </div>
  );
}
