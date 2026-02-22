import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 bg-[#F6F4EF]">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E] mb-6">
            Sobre mí
          </h2>
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto rounded-full"></div>
        </Motion.div>

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Texto */}
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Soy desarrolladora enfocada en crear aplicaciones funcionales,
              escalables y visualmente cuidadas. Trabajo principalmente con
              <span className="text-[#E8B4BC] font-medium"> React JS</span>,{" "}
              <span className="text-[#E8B4BC] font-medium"> React Native</span> y{" "}
              <span className="text-[#E8B4BC] font-medium"> Node.js</span>,
              cuidando tanto el frontend como el backend.
            </p>
          </Motion.div>

          {/* Imagen */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-[#E8B4BC]/30 rounded-3xl blur-lg"></div>
              <img
                src="/profile.jpg"
                alt="Foto de Jimena Arias"
                className="relative w-64 h-64 object-cover rounded-3xl shadow-md"
              />
            </div>
          </Motion.div>

        </div>
      </div>
    </section>
  );
}