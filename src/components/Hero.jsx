"use client";

import { motion } from "framer-motion";
import { Clock, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hospital-colonia.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
            <Clock size={16} />
            <span>Atención las 24 horas — los 365 días</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Tu salud en las{" "}
          <span className="text-blue-400">mejores manos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hospital Colonia ASSE — Dr. Samuel Bertón. Instalaciones modernas,
          tecnología de vanguardia y un equipo médico comprometido con la atención
          humana y profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:45236819"
            className="inline-flex items-center justify-center gap-2 bg-medical-blue hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-blue-900/30 hover:scale-105"
          >
            Llamar a Emergencias
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/25"
          >
            Ver Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={28} className="text-white/60" />
      </motion.div>
    </section>
  );
}
