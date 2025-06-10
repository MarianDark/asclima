export default function Servicios() {
  const servicios = [
    { titulo: "Instalación de Multisplit", texto: "Difusión personalizada del frío para grandes espacios." },
    { titulo: "Climatizador portátil", texto: "Fácil instalación y ocupación reducida." },
    { titulo: "Sistemas Split", texto: "Para hogares, locales y empresas." }
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Servicios</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {servicios.map((s, i) => (
          <div key={i} className="p-6 border rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600">{s.titulo}</h2>
            <p className="mt-2">{s.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
