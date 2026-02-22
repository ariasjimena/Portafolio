import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F6F4EF] px-6 py-14">
      <div className="max-w-6xl mx-auto">

        {/* Separador sutil */}
        <div className="w-full h-px bg-[#E0DBF3] mb-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Nombre + Año */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#2E2E2E] font-medium"
          >
            © {new Date().getFullYear()} Jimena Arias — Frontend / Full Stack
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 text-[#6B6B6B] font-medium"
          >
            <a
              href="#projects"
              className="hover:text-[#E8B4BC] transition-colors duration-300"
            >
              Proyectos
            </a>

            <a
              href="#contact"
              className="hover:text-[#E8B4BC] transition-colors duration-300"
            >
              Contacto
            </a>

            <a
              href="https://github.com/ariasjimena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8B4BC] transition-colors duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jimena-arias-zaya-3573891ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8B4BC] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </motion.div>

        </div>

        {/* Micro-copy de cierre */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#9CA3AF] text-sm text-center mt-8"
        >
          Hecho con pasión por Jimena Arias 💜
        </motion.p>

      </div>
    </footer>
  );
}