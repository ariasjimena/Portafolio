import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#F9F7F3] px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        {/* TEXTO */}
        <div className="text-center md:text-left">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1F2933]"
          >
            Jimena Arias Zaya
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg md:text-xl text-[#6B7280]"
          >
            Frontend & Full Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base md:text-lg text-[#7A7A7A] leading-relaxed max-w-xl"
          >
            Desarrollo interfaces modernas, accesibles y escalables,
            combinando diseño minimalista con soluciones técnicas sólidas
            enfocadas en experiencia de usuario.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex gap-4 justify-center md:justify-start flex-wrap"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-[#E8B4BC] text-white font-medium
                         hover:bg-[#e3a6b0] transition shadow-sm"
            >
              Ver proyectos
            </a>

            <a
              href="/CV-Jimena-Arias.pdf"
              download
              className="px-8 py-3 rounded-full border border-[#C7C3E3] text-[#1F2933]
                         hover:bg-[#C7C3E3]/20 transition"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>

        {/* LAPTOP CON CÓDIGO */}
        <motion.div
          variants={item}
          className="flex justify-center"
        >
          <div className="relative w-[340px] md:w-[420px]">
            {/* Pantalla */}
            <div className="rounded-xl bg-[#1F2933] shadow-2xl border border-black/10 overflow-hidden">
              {/* Barra superior */}
              <div className="flex gap-2 px-4 py-2 bg-[#2B3440]">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Código */}
              <pre className="px-5 py-4 text-sm leading-relaxed text-[#E5E7EB] font-mono">
<span className="text-[#E8B4BC]">export default</span> function{" "}
<span className="text-[#C7C3E3]">App</span>() {"{"}
{"\n"}  return (
{"\n"}    &lt;<span className="text-[#C7C3E3]">main</span>&gt;
{"\n"}      <span className="text-[#9CA3AF]">// UI limpia y escalable</span>
{"\n"}    &lt;/<span className="text-[#C7C3E3]">main</span>&gt;
{"\n"}  )
{"\n"}{"}"}
              </pre>
            </div>

            {/* Base laptop */}
            <div className="mx-auto mt-2 h-3 w-[90%] rounded-b-xl bg-[#D1D5DB]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}