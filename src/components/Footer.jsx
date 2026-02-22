export default function Footer() {
  return (
    <footer className="bg-[#F6F4EF] px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Separador */}
        <div className="w-full h-px bg-[#E0DBF3] mb-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* Nombre */}
          <p className="text-[#2E2E2E] font-medium">
            © {new Date().getFullYear()} Jimena Arias
          </p>

          {/* Links */}
          <div className="flex gap-6 text-[#6B6B6B]">
            <a
              href="#projects"
              className="hover:text-[#E8B4BC] transition"
            >
              Proyectos
            </a>

            <a
              href="mailto:jimenaarias02@hotmail.com"
              className="hover:text-[#E8B4BC] transition"
            >
              Contacto
            </a>

            <a
              href="https://github.com/ariasjimena"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8B4BC] transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jimena-arias-zaya-3573891ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E8B4BC] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}