import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo1.png"; // Asegúrate de que el path sea correcto

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* LOGO más pequeño */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="ASClima Logo" className="h-20 w-auto object-contain" />
        </Link>

        {/* Menú grande (desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-blue-700">Inicio</Link>
          <Link to="/nosotros" className="hover:text-blue-700">Nosotros</Link>
          <Link to="/servicios" className="hover:text-blue-700">Servicios</Link>
          <Link to="/instalaciones" className="hover:text-blue-700">Instalaciones</Link>
          <Link to="/ofertas" className="hover:text-blue-700">Ofertas</Link>
          <Link to="/contacto" className="hover:text-blue-700">Contacto</Link>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button className="md:hidden text-blue-700 text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3 text-sm">
          <Link to="/" onClick={closeMenu} className="block">Inicio</Link>
          <Link to="/nosotros" onClick={closeMenu} className="block">Nosotros</Link>
          <Link to="/servicios" onClick={closeMenu} className="block">Servicios</Link>
          <Link to="/instalaciones" onClick={closeMenu} className="block">Instalaciones</Link>
          <Link to="/ofertas" onClick={closeMenu} className="block">Ofertas</Link>
          <Link to="/contacto" onClick={closeMenu} className="block">Contacto</Link>
        </div>
      )}
    </header>
  );
}
