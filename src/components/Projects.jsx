import { projects } from "../data/projects";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[#F9F7F3]"
      aria-label="Proyectos destacados"
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
            Proyectos
          </h2>
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-14">
          {projects.map((p, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#ECECEC]
                         hover:shadow-xl transition-all duration-500"
            >
              {/* Imagen con overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`Vista previa del proyecto ${p.title}`}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
              </div>

              {/* Contenido */}
              <div className="p-10">
                <h3 className="text-xl font-semibold text-[#1F2933] mb-4">
                  {p.title}
                </h3>

                <p className="text-[#6B7280] leading-relaxed mb-6">
                  {p.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-wide px-3 py-1 rounded-full
                                 bg-[#F1EEF8] text-[#4B5563]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-8 text-sm font-medium">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8B4BC] hover:opacity-80 transition"
                  >
                    Ver sitio →
                  </a>

                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}