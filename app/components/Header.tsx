import Link from "next/link";
const Header = () => {

    return (

        <header className="w-full flex flex-row justify-between px-10 py-5 shadow-md border-b-1 border-[#5a585825]">
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
                <ul className="sm:flex hidden gap-5  justify-center items-center text-[#0E182B]">
                    <li>
                        <Link href="/" className="hover:text-[#00c4d6] transition-colors">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/servicios" className="hover:text-[#00c4d6] transition-colors">
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link href="/especialidades" className="hover:text-[#00c4d6] transition-colors">
                            Especialidades
                        </Link>
                    </li>
                    <li>
                        <Link href="/equipos" className="hover:text-[#00c4d6] transition-colors">
                            Equipos
                        </Link>
                    </li>
                    <li>
                        <Link href="/nosotros" className="hover:text-[#00c4d6] transition-colors">
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-[#00c4d6] transition-colors">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <button className="bg-[#00C4D6] text-[#0E182B] px-4 py-1 font-semibold rounded-[8px] hover:bg-[#067883] hover:text-[#f1f2f5] cursor-pointer">
                    Agendar Cita
                </button>
            </div>
        </header>

    )

}

export default Header