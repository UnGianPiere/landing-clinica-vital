"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (

    <main>
      <div className="grid md:grid-cols-3 grid-cols-1 w-full bg-gradient-to-br from-[#047f8a] via-[#5c969b] to-[#235a6b] text-white">
        
        <div className="relative col-span-2 h-[400px] md:h-[550px] overflow-hidden">

          <Image
            src="/1.jpg"
            alt="Imagen principal de clinica vital"
            className="w-full h-full object-cover mask-fade"
            fill={true}
            priority
          />
        </div>

        
        <div className="flex flex-col justify-center p-8 md:p-12">

          <motion.div
            initial={{ opacity: 0, x: 30 }}   // Estado inicial
            animate={{ opacity: 1, x: 0 }}    // Estado final
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
