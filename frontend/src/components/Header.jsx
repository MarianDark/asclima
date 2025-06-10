import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-blue-700 font-bold text-xl">ASClima</h1>
        <nav className="space-x-4 text-sm sm:text-base">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/instalaciones">Instalaciones</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
