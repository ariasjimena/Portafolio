import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#F9F7F3] px-6"
      aria-label="Sección principal"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-center"
      >
        {/* Nombre */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1F2933]"
        >
          Jimena Arias Zaya{" "}
        </motion.h1>

        {/* Rol */}
        <motion.p
          variants={item}
          className="mt-4 text-lg md:text-xl text-[#6B7280]"
        >
          Frontend & Full Stack Developer
        </motion.p>

        {/* Descripción */}
        <motion.p
          variants={item}
          className="mt-6 text-base md:text-lg text-[#7A7A7A] leading-relaxed"
        >
          Desarrollo interfaces modernas, accesibles y escalables,
          combinando diseño minimalista con soluciones técnicas sólidas
          enfocadas en experiencia de usuario.
        </motion.p>

        {/* Acciones */}
        <motion.div
          variants={item}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[#E8B4BC] text-white font-medium
                       hover:bg-[#e3a6b0] transition-all duration-300 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-[#E8B4BC]/50"
          >
            Ver proyectos
          </a>

          <a
            href="/CV-Jimena-Arias.pdf"
            download
            className="px-8 py-3 rounded-full border border-[#C7C3E3] text-[#1F2933]
                       hover:bg-[#C7C3E3]/20 transition-all duration-300
                       focus:outline-none focus:ring-2 focus:ring-[#C7C3E3]/40"
          >
            Descargar CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}