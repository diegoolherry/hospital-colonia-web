"use client";

import { motion } from "framer-motion";
import {
  Siren,
  Pill,
  Scissors,
  Stethoscope,
  Syringe,
  BedDouble,
} from "lucide-react";
import { services } from "@/data/hospitalData";

const iconMap = {
  Siren,
  Pill,
  Scissors,
  Stethoscope,
  Syringe,
  BedDouble,
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-medical-light">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-medical-blue font-semibold text-sm tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Atención integral para tu salud
          </h2>
          <p className="text-medical-gray mt-4 max-w-xl mx-auto">
            Contamos con servicios esenciales para garantizar una atención
            completa e inmediata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group border border-gray-100 hover:border-medical-blue/20"
              >
                <div className="w-14 h-14 rounded-xl bg-medical-blue/10 text-medical-blue flex items-center justify-center mb-4 group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  {Icon && <Icon size={26} />}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-medical-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
