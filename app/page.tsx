"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [frame, setFrame] = useState(1);

  // 🎞️ Total de imágenes (frames)
  const totalFrames = 156;

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setScrollPercent(progress);

      // 🎯 Calcular índice del frame según el progreso
      const index = Math.min(
        totalFrames - 1,
        Math.floor(progress * totalFrames)
      );
      setFrame(index + 1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🖼️ Generar nombre del frame (debe coincidir con tus archivos)
  const currentSrc = `/maquinaria/ezgif-frame-${String(frame).padStart(3, "0")}.jpg`;

  // (Opcional) Preload para fluidez
  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      img.src = `/maquinaria/ezgif-frame-${String(frame).padStart(3, "0")}.jpg`;
    }
  }, []);

  return (
    <main>
      {/* Hero */}
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Clínica Vital</h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              En <span className="font-semibold text-white">Clínica Vital</span>, ofrecemos
              servicios de salud integrales con un equipo de profesionales dedicados a tu
              bienestar. Agenda tu cita hoy mismo y recibe atención de calidad con calidez
              humana.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 🔥 Zona Sticky con frames */}
      <div ref={stickyRef} className=" h-[300vh] bg-[white] text-white">
        <div className="sticky top-0 h-screen flex flex-row items-center justify-center">
          {/* Imagen controlada por scroll */}

          <div className=""><img
            src={currentSrc}
            
            className="h-100 rounded-xl shadow-lg  "
          /></div>
          <div>
            <p className="w-20 p-5 text-amber-200">
            ofrecemos
            servicios de salud integrales con un equipo de profesionales dedicados a tu
            bienestar. Agenda tu cita hoy mismo y recibe atención de calidad con calidez
            humana.
          </p>
          </div>
          
          
        </div>
      </div>

      {/* Sección final */}
      <div className="bg-amber-600 h-[200vh] flex items-center justify-center text-white text-3xl">
        contenido
      </div>
    </main>
  );
}
