"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Servicios() {
    const [loading, setLoading] = useState(true);

    const servicios = [
        {
            "id": 1,
            "titulo": "Consulta Médica General",
            "descripcion": "Atención médica integral para adultos y niños, con diagnóstico, control y orientación personalizada.",
            "icono": "🩺",
            "imagen": "/images/servicios/consulta-general.webp"
        },
        {
            "id": 2,
            "titulo": "Laboratorio Clínico",
            "descripcion": "Análisis de sangre, orina y pruebas especializadas con resultados precisos y rápidos.",
            "icono": "🧪",
            "imagen": "/images/servicios/laboratorio.png"
        },
        {
            "id": 3,
            "titulo": "Ecografías y Diagnóstico por Imagen",
            "descripcion": "Equipos modernos para ecografías, rayos X y diagnósticos por imagen de alta resolución.",
            "icono": "🖥️",
            "imagen": "/images/servicios/ecografia.jpg"
        },
        {
            "id": 4,
            "titulo": "Emergencias 24 Horas",
            "descripcion": "Atención inmediata ante urgencias médicas con personal calificado disponible todo el día.",
            "icono": "🚑",
            "imagen": "/images/servicios/emergencias.jpg"
        },
        {
            "id": 5,
            "titulo": "Salud Preventiva",
            "descripcion": "Chequeos médicos, control de peso, vacunación y programas de bienestar integral.",
            "icono": "💉",
            "imagen": "/images/servicios/preventiva.jpg"
        }
    ]




    return (
        <section className="py-10 w-full">

            <div className="px-5 sm:px-40 grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 ">
                {
                    servicios.map((servicio, index) => (
                        <div key={index} className="shadow-md rounded-2xl overflow-hidden relative group">
                            <div className="relative h-80 w-full">

                                {loading && (
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
                                )}

                                <Image
                                    src={servicio.imagen}
                                    alt={servicio.titulo}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    onLoadingComplete={() => setLoading(false)}
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10"
                            >
                                <span className="flex justify-center p-5 text-[#087680] font-semibold">
                                    {servicio.titulo}
                                </span>
                            </motion.div>

                            <div className="absolute bottom-0 left-0 w-full h-32 bg-white flex flex-col items-center justify-center 
                                opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 gap-2 z-20">
                                <span>¿Quieres saber más?</span>
                                <button className="bg-[#087680] py-2 px-4 text-white font-normal rounded-[5px] cursor-pointer hover:bg-[#044046]">
                                    Leer Más
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}