// src/pages/Contacto.jsx

import { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contacto", form); // ajusta si estás desplegando
      alert("Mensaje enviado con éxito");
      setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
    } catch (error) {
      alert("Hubo un error. Inténtalo más tarde.");
    }
  };

  return (
    <div className="mt-20">
      {/* Hero */}
      <section className="bg-blue-100 py-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800">Contáctanos</h1>
        <p className="mt-2 text-gray-700">¿Tienes dudas o necesitas una cotización? Estamos para ayudarte.</p>
      </section>

      {/* Formulario + Datos */}
      <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            required
            className="w-full p-3 border rounded"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            required
            className="w-full p-3 border rounded"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className="w-full p-3 border rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Escribe tu mensaje..."
            required
            className="w-full p-3 border rounded h-32"
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto */}
        <div className="bg-gray-50 p-6 shadow rounded space-y-6 text-gray-800">
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="mt-1 text-blue-600" />
            <div>
              <p className="font-semibold">Teléfono</p>
              <a href="tel:624417886" className="text-sm text-blue-700">
                624 417 886
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaWhatsapp className="mt-1 text-green-600" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <a
                href="https://wa.me/34624417886"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-700"
              >
                Escríbenos
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="mt-1 text-red-600" />
            <div>
              <p className="font-semibold">Ubicación</p>
              <p className="text-sm">Madrid, Comunidad de Madrid</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="mt-1 text-yellow-600" />
            <div>
              <p className="font-semibold">Horario</p>
              <p className="text-sm">Lunes a Domingo – 9:00 a 21:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
