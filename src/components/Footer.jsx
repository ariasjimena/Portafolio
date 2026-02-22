import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F6F4EF] px-6 py-14">
      <div className="max-w-6xl mx-auto">

        {/* Separador */}
        <div className="w-full h-px bg-[#E0DBF3] mb-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          {/* Nombre */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#2E2E2E] font-medium"
          >
            © {new Date().getFullYear()} Jimena Arias — Frontend / Full Stack
          </motion.p>

          {/* Iconos */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {/* Email */}
            <a
              href="mailto:jimenaarias02@hotmail.com"
              aria-label="Enviar correo"
              className="text-[#6B6B6B] hover:text-[#E8B4BC] transition-colors duration-300"
            >
              <Mail size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ariasjimena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#6B6B6B] hover:text-[#E8B4BC] transition-colors duration-300"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jimena-arias-zaya-3573891ab/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#6B6B6B] hover:text-[#E8B4BC] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>

        </div>

        {/* Micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#9CA3AF] text-sm text-center mt-8"
        >
          Hecho con pasión por el detalle ✨
        </motion.p>

      </div>
    </footer>
  );
}