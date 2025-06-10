export default function Ofertas() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Oferta: Carga de Gas</h1>
      <div className="p-6 border shadow-lg rounded bg-blue-50">
        <p className="text-lg font-medium">CARGA DE GAS AIRE ACONDICIONADO</p>
        <p className="text-5xl font-bold my-4 text-blue-600">80€</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Revisión</li>
          <li>Carga de gas (todo tipo de gases)</li>
          <li>Garantía 2 años</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">LLÁMANOS</button>
      </div>
    </div>
  );
}
