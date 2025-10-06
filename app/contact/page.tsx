export default function ContactoPage() {
    return (
        <section className="px-8 py-20 text-center">
            <h1 className="text-3xl font-bold text-[#087680] mb-6">Contáctanos</h1>
            <p className="text-gray-700 mb-6">
                ¿Tienes consultas o deseas agendar una cita?
            </p>
            <a
                href="https://wa.me/51999999999"
                target="_blank"
                className="bg-[#087680] text-white px-6 py-3 rounded-lg hover:bg-[#066b73] transition"
            >
                Escríbenos por WhatsApp
            </a>
        </section>
    );
}
