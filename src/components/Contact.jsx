import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-36 px-6 bg-[#F9F7F3]"
      aria-label="Contacto profesional"
    >
      <div className="max-w-2xl mx-auto text-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2933] mb-6">
            Trabajemos juntos
          </h2>

          {/* Línea */}
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto mb-10 rounded-full" />

          {/* Copy */}
          <p className="text-[#6B7280] text-lg leading-relaxed mb-14">
            Estoy disponible para oportunidades freelance, colaboraciones
            creativas o proyectos a largo plazo. Si tienes una idea en mente,
            conversemos.
          </p>

          {/* CTA */}
          <a
            href="mailto:jimenaarias02@hotmail.com"
            className="inline-flex items-center justify-center gap-2
                       px-12 py-3 rounded-full bg-[#E8B4BC]
                       text-white font-medium shadow-md
                       hover:bg-[#e3a6b0] hover:shadow-lg
                       transition-all duration-300"
          >
            Contactar
          </a>
        </motion.div>

      </div>
    </section>
  );
}