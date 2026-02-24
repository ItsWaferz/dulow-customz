import { Volume2, Shield, Zap } from "lucide-react";
import logoImage from "/logo.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-black text-white min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-screen py-24 md:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-400/30 rounded-full blur-xl animate-pulse -translate-y-2"></div>
              <div className="relative w-24 h-24 md:w-28 md:h-28 border-4 border-yellow-400 rounded-full overflow-hidden -translate-y-2">
                <img
                  src={logoImage}
                  alt="DuLow Customz Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight">
                Du<span className="text-yellow-400">Low</span>
              </h1>
              <p className="text-yellow-400 text-xl md:text-2xl font-black tracking-widest mt-1 md:mt-0">
                CUSTOMZ
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-6 leading-tight max-w-4xl px-2">
            Insonorizare Profesională,
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Sisteme Audio Premium
            </span>
          </h2>

          <p className="text-sm md:text-xl text-gray-300 mb-12 max-w-2xl px-4">
            Transformăm experiența ta de condus printr-o izolare fonică
            impecabilă și un sistem audio de neegalat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full sm:w-auto px-14">
            <a
              href="#calculator"
              className="bg-yellow-400 text-black px-6 py-4 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg shadow-lg shadow-yellow-400/40 hover:shadow-yellow-400/70 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Calculează Prețul
            </a>
            <a
              href="#about"
              className="border-2 border-yellow-400 text-yellow-400 px-6 py-4 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full sm:w-auto text-center"
            >
              Află Mai Multe
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto w-full px-2">
            <div className="group">
              <div className="bg-yellow-400/5 backdrop-blur w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/10 transition-all duration-300">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs md:text-sm font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                Izolare
                <br />
                Completă
              </p>
            </div>
            <div className="group">
              <div className="bg-yellow-400/5 backdrop-blur w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/10 transition-all duration-300">
                <Volume2 className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs md:text-sm font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                Audio
                <br />
                Premium
              </p>
            </div>
            <div className="group">
              <div className="bg-yellow-400/5 backdrop-blur w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-400/10 transition-all duration-300">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-xs md:text-sm font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                Montaj
                <br />
                Profesional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
