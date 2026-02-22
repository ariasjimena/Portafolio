import { motion as Motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: ["React", "React Native", "Expo", "Bootstrap", "Tailwind"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Tools: ["Git", "GitHub", "Postman"],
  };

  return (
    <section className="py-32 px-6 bg-[#F6F4EF]">
      <div className="max-w-5xl mx-auto text-center">

        {/* Título */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E] mb-4">
            Habilidades
          </h2>
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto rounded-full"></div>
        </Motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {Object.entries(skills).map(([title, items], i) => (
            <Motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              {/* Categoría */}
              <h3 className="mb-6 font-medium text-[#E8B4BC] text-lg">
                {title}
              </h3>

              {/* Skills */}
              <ul className="flex flex-wrap gap-3">
                {items.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 rounded-full text-sm bg-[#F1EEF8] text-[#5A5A5A]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}