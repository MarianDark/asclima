// frontend/src/pages/Home.jsx
import heroImg from "../assets/hero.jpg"; // puedes usar una imagen de tu elección
import marcas from "../assets/marcas.jpg"; // imagen con logos si tienes

export default function Home() {
  return (
    <div className="mt-20">
      {/* Hero principal */}
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="bg-white/80 p-6 rounded-lg shadow max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Servicio Técnico Aire Acondicionado en Madrid</h1>
          <p className="mt-2 text-blue-700 font-semibold text-lg">OFERTA CARGA DE GAS <span className="text-black">80€</span></p>
          <a href="tel:624417886" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            📞 624 417 886
          </a>
        </div>
      </section>

      {/* Sección de marcas */}
      <section className="py-10 px-4 bg-white text-center">
        <h2 className="text-xl font-semibold mb-4">Trabajamos con <span className="text-blue-700">todas las marcas</span></h2>
        <img src={marcas} alt="Marcas de aire acondicionado" className="mx-auto max-w-4xl w-full" />
        <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-600">
          ASClima es una empresa autorizada de instalación, mantenimiento y reparación para todos los modelos y marcas de aire acondicionado: Split, Cassette, Conductos, etc.
        </p>
        <a href="/contacto" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
          Contactar
        </a>
      </section>

      {/* Servicio Urgente */}
      <section className="bg-gray-100 py-10 px-4 text-center">
        <h2 className="text-xl font-semibold text-blue-700 mb-6">Servicio <span className="text-black">Urgente</span></h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto text-left">
          <div className="bg-white p-6 rounded shadow w-full sm:w-1/2">
            <h3 className="font-bold text-lg">✅ Servicio 48 horas</h3>
            <p className="text-sm text-gray-700 mt-2">Funcionando correctamente en menos de 48 horas.</p>
          </div>
          <div className="bg-white p-6 rounded shadow w-full sm:w-1/2">
            <h3 className="font-bold text-lg">🚨 Servicio de Urgencias</h3>
            <p className="text-sm text-gray-700 mt-2">Para toda la Comunidad de Madrid. Reparación o recarga de gas urgente.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-8 px-4 text-center">
        <h2 className="text-xl font-semibold">¡Llámanos Ahora!</h2>
        <p className="mt-2">Contacto con Técnico de Aire Acondicionado en Madrid</p>
        <a href="tel:624417886" className="mt-4 inline-block bg-yellow-400 text-black py-2 px-6 rounded hover:bg-yellow-300 transition">
          📞 624 417 886
        </a>
      </section>
    </div>
  );
}
