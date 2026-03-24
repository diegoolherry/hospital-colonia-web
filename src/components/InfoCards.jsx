"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

const cards = [
  {
    icon: MapPin,
    title: "Ubicación",
    description: hospitalInfo.address,
    color: "bg-blue-50 text-medical-blue",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: hospitalInfo.phone,
    link: hospitalInfo.phoneLink,
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Clock,
    title: "Horario",
    description: hospitalInfo.schedule,
    color: "bg-amber-50 text-amber-600",
  },
];

export default function InfoCards() {
  return (
    <section className="relative -mt-20 z-20 max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          const content = (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-medical-gray text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          );

          return card.link ? (
            <a key={card.title} href={card.link} className="block">
              {content}
            </a>
          ) : (
            content
          );
        })}
      </div>
    </section>
  );
}
