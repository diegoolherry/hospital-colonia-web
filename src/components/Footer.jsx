import { Phone, MapPin, Clock, Heart } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-medical-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">
                  Hospital Colonia
                </p>
                <p className="text-xs text-gray-500">ASSE</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {hospitalInfo.fullName}. Comprometidos con la salud y el bienestar
              de nuestra comunidad.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-medical-blue shrink-0 mt-0.5" />
                <span>{hospitalInfo.address}</span>
              </li>
              <li>
                <a
                  href={hospitalInfo.phoneLink}
                  className="flex items-center gap-3 hover:text-medical-blue transition-colors"
                >
                  <Phone size={18} className="text-medical-blue shrink-0" />
                  <span>{hospitalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-medical-blue shrink-0" />
                <span>{hospitalInfo.schedule}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Accesos Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Instalaciones", href: "#instalaciones" },
                { label: "Testimonios", href: "#testimonios" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-medical-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} {hospitalInfo.fullName}. Todos los
            derechos reservados.
          </p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-500 fill-red-500" /> para la comunidad
          </p>
        </div>
      </div>
    </footer>
  );
}
