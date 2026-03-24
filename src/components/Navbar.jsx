"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalInfo } from "@/data/hospitalData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Instalaciones", href: "#instalaciones" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-medical-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-900 leading-tight">
                Hospital Colonia
              </p>
              <p className="text-xs text-medical-gray">ASSE</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-medical-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Emergency Button */}
          <div className="flex items-center gap-3">
            <a
              href={hospitalInfo.phoneLink}
              className="flex items-center gap-2 bg-medical-blue hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors shadow-lg shadow-medical-blue/25"
            >
              <Phone size={16} className="animate-pulse" />
              <span className="hidden sm:inline">Emergencias:</span>
              <span>{hospitalInfo.phone}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-medical-light hover:text-medical-blue font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
