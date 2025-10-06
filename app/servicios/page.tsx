"use client"
import { motion } from "framer-motion";

export default function Servicios() {
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
        <section className="px-10 py-10 w-full">

            <div className="px-50 grid sm:grid-cols-3 grid-cols-1 gap-10 ">
                {
                    servicios.map((servicio, index) => (
                        <div key={index} className="shadow-md rounded-2xl overflow-hidden relative group  ">
                            <div className="bg-amber-100 h-80 ">
                                <img src={servicio.imagen} className="w-full h-full object-cover" alt="" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}   // Estado inicial
                                animate={{ opacity: 1, y: 0 }}    // Estado final
                                transition={{ duration: 0.6 }}     // Velocidad
                            >
                            <span className="flex justify-center p-5 text-[#087680] font-semibold">{servicio.titulo}</span>
                            </motion.div>
                            
                            <div className="absolute bottom-0 left-0 w-full h-30 bg-[white]  flex flex-col items-center justify-center 
                                opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 gap-2">
                                <span>¿Quieres saber más?</span>
                                <button className="bg-[#087680] py-2 px-4 text-white font-normal rounded-[5px] cursor-pointer hover:bg-[#044046]">Leer Más</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}