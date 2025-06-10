// frontend/src/pages/Instalaciones.jsx
import heroInstalacion from "../assets/instalacion.png"; // imagen del encabezado

export default function Instalaciones() {
  return (
    <div className="mt-20">
      {/* Hero de instalaciones */}
      <section
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${heroInstalacion})` }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Instalaciones Profesionales de Aire Acondicionado</h1>
        </div>
      </section>

      {/* Bloque explicativo */}
      <section className="py-12 px-4 bg-white max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">Nos encargamos de TODO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded shadow text-center">
            <img src="https://img.icons8.com/ios-filled/50/f59e0b/contract.png" className="mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Estudio Técnico</h3>
            <p className="text-gray-600 mt-2 text-sm">Visitamos el lugar, te asesoramos y calculamos la mejor opción.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow text-center">
            <img src="https://img.icons8.com/?size=100&id=yFi4egqICrpB&format=png&color=000000" className="mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Instalación Completa</h3>
            <p className="text-gray-600 mt-2 text-sm">Instalación por técnicos autorizados con materiales de calidad.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow text-center">
            <img src="https://img.icons8.com/ios-filled/50/f59e0b/approval.png" className="mx-auto mb-4" />
            <h3 className="font-semibold text-lg">Certificación y Garantía</h3>
            <p className="text-gray-600 mt-2 text-sm">Entrega de certificado de instalación + garantía legal y técnica.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-yellow-300 py-10 px-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">¿Necesitas una instalación rápida y profesional?</h2>
        <p className="mt-2 text-sm text-gray-700">Llámanos ahora o solicita tu presupuesto sin compromiso.</p>
        <a
          href="tel:624417886"
          className="mt-4 inline-block bg-blue-700 text-white py-2 px-6 rounded hover:bg-blue-800 transition"
        >
          📞 624 417 886
        </a>
      </section>
    </div>
  );
}
