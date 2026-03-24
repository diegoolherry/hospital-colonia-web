"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/hospitalData";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonios" className="py-24 bg-medical-light">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-medical-blue font-semibold text-sm tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg shadow-black/5 min-h-[280px] flex flex-col items-center justify-center text-center">
            <Quote
              size={40}
              className="text-medical-blue/20 mb-6"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic max-w-2xl">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>

                <p className="font-bold text-gray-900">
                  {testimonials[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-medical-blue hover:shadow-lg transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === current
                      ? "bg-medical-blue w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-medical-blue hover:shadow-lg transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
