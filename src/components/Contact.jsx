import { motion as Motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 px-6 bg-[#F9F7F3] text-center">
      <div className="max-w-2xl mx-auto">

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E] mb-6">
            Contacto
          </h2>

          {/* Línea pastel */}
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto mb-10 rounded-full"></div>

          {/* Texto */}
          <p className="text-[#6B6B6B] mb-12 text-lg">
            ¿Hablamos sobre una oportunidad o colaboramos en tu próximo proyecto?
          </p>

          {/* Botón */}
          <a
            href="mailto:jimenaarias02@hotmail.com"
            className="inline-block px-10 py-3 rounded-full bg-[#E8B4BC] 
                       text-white font-medium shadow-sm
                       hover:bg-[#e3a6b0] transition-all duration-300"
          >
            Escríbeme
          </a>
        </Motion.div>

      </div>
    </section>
  );
}