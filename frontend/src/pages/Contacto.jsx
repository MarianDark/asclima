import { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacto", form);
    alert("Mensaje enviado correctamente");
    setForm({ nombre: "", telefono: "", email: "", mensaje: "" });
  };

return (
  <>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <input type="text" placeholder="Nombre" required
          value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
        <input type="tel" placeholder="Teléfono" required
          value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
        <input type="email" placeholder="Email" required
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Escribe tu mensaje..." required
          value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Enviar</button>
      </form>
    </div>

    <div className="mt-10 md:mt-0 md:ml-8">
      <h2 className="text-xl font-bold mb-2">Datos de Contacto</h2>
      <p><FaPhoneAlt className="inline mr-2" /> 624 417 886</p>
      <p><FaEnvelope className="inline mr-2" /> info@asclima.com</p>
      <p><FaClock className="inline mr-2" /> 24 horas de lunes a domingo</p>
    </div>
  </>
);
}
