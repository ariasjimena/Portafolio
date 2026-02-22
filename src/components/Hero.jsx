import { motion as Motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[#F9F7F3]">
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* Nombre */}
        <h1 className="text-4xl md:text-6xl font-semibold text-[#2E2E2E] tracking-tight">
          Hola, soy <span className="text-[#C7C3E3]">Jimena Arias</span>
        </h1>

        {/* Rol */}
        <p className="mt-4 text-xl md:text-2xl text-[#6B6B6B] font-light">
          Desarrolladora Frontend / Full Stack
        </p>

        {/* Descripción */}
        <p className="mt-6 text-[#7A7A7A] leading-relaxed">
          Creo experiencias digitales elegantes, funcionales y modernas,
          enfocadas en diseño limpio y experiencia de usuario.
        </p>

        {/* Botones */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[#E8B4BC] text-white font-medium
                       hover:bg-[#e3a6b0] transition-all duration-300 shadow-sm"
          >
            Ver proyectos
          </a>

         <a
  href="/CV-Jimena-Arias.pdf"
  download
  className="px-8 py-3 rounded-full border border-[#C7C3E3] text-[#2E2E2E]
             hover:bg-[#C7C3E3]/20 transition-all duration-300"
>
  Descargar CV
</a>
        </div>
      </Motion.div>
    </section>
  );
}