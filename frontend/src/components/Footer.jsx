import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm p-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p>2025 © ASClima</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/politica-privacidad">Política de Privacidad</Link>
          <Link to="/aviso-legal">Aviso Legal</Link>
        </div>
      </div>
      <p className="text-center mt-2 text-yellow-400">
        Diseño y Posicionamiento: <a href="https://mml-website-lovat.vercel.app/" target="_blank" rel="noreferrer">mmlstack.com</a>
      </p>
    </footer>
  );
}
