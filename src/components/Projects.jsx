import { projects } from "../data/projects";
import { motion as Motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[#F9F7F3]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E] mb-4">
            Proyectos
          </h2>
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto rounded-full"></div>
        </Motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              {/* Imagen */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-56 object-cover hover:scale-[1.02] transition duration-500"
                />
              </a>

              {/* Contenido */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-3">
                  {p.title}
                </h3>

                <p className="text-[#6B6B6B] mb-6">
                  {p.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-[#F1EEF8] text-[#5A5A5A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E8B4BC] font-medium hover:underline"
                  >
                    Ver sitio
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C7C3E3] font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}