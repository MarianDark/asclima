import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">ASClima</h1>
      <ul className="flex gap-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/instalaciones">Instalaciones</Link></li>
        <li><Link to="/ofertas">Ofertas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
