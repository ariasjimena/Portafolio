import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: ["React", "React Native", "Expo", "Bootstrap", "Tailwind"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[#F6F4EF]"
      aria-label="Habilidades técnicas"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2933]">
            Habilidades
          </h2>
          <div className="w-14 h-[2px] bg-[#C7C3E3] mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-10 rounded-3xl border border-[#ECECEC]
                         hover:border-[#C7C3E3] hover:shadow-lg transition-all duration-500"
            >
              {/* Category */}
              <h3 className="mb-8 text-lg font-medium text-[#E8B4BC]">
                {group.title}
              </h3>

              {/* Items */}
              <ul className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm
                               bg-[#F1EEF8] text-[#4B5563]
                               group-hover:bg-[#E8E4F8]
                               transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}