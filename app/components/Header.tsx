"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/servicios", label: "Servicios" },
        { href: "/especialidades", label: "Especialidades" },
        { href: "/equipos", label: "Equipos" },
        { href: "/nosotros", label: "Sobre Nosotros" },
        { href: "/contact", label: "Contacto" },
    ];

    const [visible, setVisible] = useState(false)

    const handleAbrir = () => {
        setVisible(prev => !prev);
    }

    return (
        <>
            {visible && (
                <div className="fixed inset-0 z-30 lg:hidden bg-white/80 backdrop-blur-2xl p-7 pt-25 font-semibold transition-all w-50 ">
                    <ul className="flex flex-col gap-3">
                        {links.map((link) => {
                            const isActive = pathname === link.href; // true si la ruta coincide
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`hover:text-[#00c4d6] transition-colors ${isActive ? "border-b-2 border-[#00c4d6]" : ""
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <button className=" bg-[#00C4D6]/70 text-[#0E182B] mt-4 px-4 py-1 font-semibold rounded-[8px] hover:bg-[#067883] hover:text-[#f1f2f5] cursor-pointer">
                                Agendar Cita
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            <header className="relative z-50 w-full flex flex-row justify-center sm:justify-between px-10 py-5 shadow-md border-b-1 border-[#5a585825]">
                <div onClick={handleAbrir} className="cursor-pointer p-6 absolute top-0 left-0 flex justify-center items-center sm:hidden">
                    ☰
                </div>

                <div className="flex gap-2 flex-row justify-center items-center text-[#00C4D6] font-bold text-[21px]">
                    <svg
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                            fill="currentColor"
                        />
                    </svg>

                    Clínica Vital
                </div>
                <div className="flex justify-center">
                    <ul className="lg:flex hidden gap-5  justify-center items-center text-[#0E182B]">
                        {links.map((link) => {
                            const isActive = pathname === link.href; // true si la ruta coincide
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`hover:text-[#00c4d6] transition-colors ${isActive ? "border-b-2 border-[#00c4d6]" : ""
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="lg:flex hidden">
                    <button className=" bg-[#00C4D6] text-[#0E182B] px-4 py-1 font-semibold rounded-[8px] hover:bg-[#067883] hover:text-[#f1f2f5] cursor-pointer">
                        Agendar Cita
                    </button>
                </div>

            </header>
        </>
    )

}

export default Header