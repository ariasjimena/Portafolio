import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeSide = (direction = 1) => ({
  hidden: { opacity: 0, x: 40 * direction },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#F6F4EF]"
      aria-label="Sobre mí"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2933]">
            Sobre mí
          </h2>
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <motion.div
            variants={fadeSide(-1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Desarrollo aplicaciones web y móviles con enfoque en{" "}
              <span className="text-[#E8B4BC] font-medium">
                experiencia de usuario, rendimiento y escalabilidad
              </span>.
              Trabajo tanto en frontend como backend, construyendo soluciones
              limpias, mantenibles y alineadas con objetivos de negocio.
            </p>

            <p className="mt-6 text-[#6B7280] text-lg leading-relaxed">
              Mi stack principal incluye{" "}
              <span className="font-medium text-[#1F2933]">
                React, React Native, Node.js y MongoDB
              </span>,
              integrando diseño moderno con una base técnica sólida.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            variants={fadeSide(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#E8B4BC]/30 to-[#C7C3E3]/30 blur-xl" />
              <img
                src="/profile.jpg"
                alt="Retrato profesional de Jimena Arias"
                className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}