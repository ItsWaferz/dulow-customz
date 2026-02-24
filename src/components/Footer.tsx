import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoImage from "/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <a href="#hero">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16 border-4 border-yellow-400 rounded-full overflow-hidden shadow-2xl shadow-yellow-400/50">
                <img
                  src={logoImage}
                  alt="DuLow Customz Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black">
                  Du<span className="text-yellow-400">Low</span>
                </h3>
                <p className="text-yellow-400 text-xs font-bold">CUSTOMZ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Insonorizare profesională și sisteme audio premium pentru mașina
              ta.
            </p>
          </a>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Link-uri</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 hover:translate-x-1 transition-all duration-300"
                >
                  Informații STP
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-yellow-400 hover:translate-x-1 transition-all duration-300"
                >
                  Calculator Preț
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-yellow-400 hover:translate-x-1 transition-all duration-300"
                >
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="transition-all duration-300 hover:text-yellow-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a target="_blank" href="tel:0729293003">
                  +40 729 293 003
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-yellow-400 flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a target="_blank" href="mailto:duluks@yahoo.com">
                  duluks@yahoo.com
                </a>
              </li>
              <li className="transition-all duration-300 hover:text-yellow-400 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/DuLow+Customz/@44.1705842,28.6076614,17.39z/data=!4m6!3m5!1s0x40bae50de5a44a6f:0x312b9df66ff9476d!8m2!3d44.1694233!4d28.6089443!16s%2Fg%2F11jg089gln?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
                >
                  Strada Cumpenei, 900000 Constanța
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Urmărește-ne</h4>
            <div className="flex gap-3">
              <a
                target="_blank"
                href="https://www.facebook.com/dulowcustomz"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dulowcustomz/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-sm">Program</h5>
              <p className="text-gray-400 text-xs">
                Luni - Vineri: 09:00 - 18:00
                <br />
                Sâmbătă: 10:00 - 14:00
                <br />
                Duminică: Închis
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 DuLow Customz. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
