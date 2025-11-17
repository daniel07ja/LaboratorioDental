import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Music, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Dental Alfaden Logo"
              className="h-16 w-16 object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Laboratorio Dental dedicado al flujo digital. Fusionamos las
              innovadoras técnicas de diseño digital con el arte manual de
              nuestros acabados.
            </p>
          </div>

          {/* Enlaces de interés */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-400">
              Enlaces de interés
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm block"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Protocolo"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm block"
                >
                  Protocolo
                </Link>
              </li>
              <li>
                <a
                  href="#works"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm block"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm block"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-400">Redes Sociales</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/people/Laboratorio-Dental-Alfaden/61581161378663/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/51942633807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center space-x-2"
                >
                  <Music className="w-5 h-5" />
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyan-400">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">📞</span>
                <span>942 633 807</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">📧</span>
                <a
                  href="mailto:admind@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  admind@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">📍</span>
                <span className="leading-relaxed">
                  C.p Monte Alegre Neshuya Sector 2, Junta Vecinal Mariscal Andres Avelino Caceres
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          {/* Ubicación en mapa */}
          <div className="text-center mb-6">
            <a
              href="https://maps.app.goo.gl/cxP6HdfFPfsv9WyaA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm inline-flex items-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Ver ubicación en Google Maps</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Dental Alfaden. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;