export default function FloatingButtons() {
  return (
    <>
      <a
        href="tel:624417886"
        className="fixed bottom-20 right-4 bg-blue-500 p-3 rounded-full shadow-lg z-50"
      >
        <img src="https://img.icons8.com/ios-filled/30/ffffff/phone.png" alt="Llamar" />
      </a>
      <a
        href="https://wa.me/34624417886"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-50"
      >
        <img src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png" alt="WhatsApp" />
      </a>
    </>
  );
}
