"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (

    <main>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full bg-[#087680] text-white">
        {/* Imagen (ocupa 2/3 en pantallas grandes) */}
        <div className="relative col-span-2 h-[400px] md:h-[550px] overflow-hidden">
          <img
            src="/1.jpg"
            alt="Clínica Vital fachada"
            className="w-full h-full object-cover mask-fade"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col justify-center p-8 md:p-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}   // Estado inicial
            animate={{ opacity: 1, y: 0 }}    // Estado final
            transition={{ duration: 0.6 }}     // Velocidad
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Clínica Vital</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              En <span className="font-semibold text-white">Clínica Vital</span>, ofrecemos servicios de salud integrales
              con un equipo de profesionales dedicados a tu bienestar. Agenda tu cita hoy mismo
              y recibe atención de calidad con calidez humana.
            </p>
          </motion.div>

        </div>
      </div>
    </main>

  );
}
