import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black mt-8 text-white border-t-4 border-[#b8860b] py-8">
      {/* Versión Mobile: solo iconos */}
      <div className="flex justify-center gap-6 md:hidden">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#b8860b] text-2xl"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#b8860b] text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/tu-numero"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#b8860b] text-2xl"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Versión Desktop: contenido completo */}
      <div className="hidden md:grid max-w-6xl mx-auto px-4 grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Conbell</h2>
          <p className="text-sm">
            Inspirando tus espacios con estilo y personalidad.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3 border-b border-[#b8860b] pb-1">
            Enlaces
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#b8860b] cursor-pointer">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b8860b] cursor-pointer">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b8860b] cursor-pointer">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#b8860b] cursor-pointer">
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3 border-b border-[#b8860b] pb-1">
            Redes Sociales
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#b8860b] cursor-pointer"
              >
                <FaFacebookF /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#b8860b] cursor-pointer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/tu-numero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#b8860b] cursor-pointer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#b8860b] mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Conbell. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
