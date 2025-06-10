import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Instalaciones from "./pages/Instalaciones";
import Ofertas from "./pages/Ofertas";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
