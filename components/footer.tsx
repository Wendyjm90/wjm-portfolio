import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-indigo-500/20 py-6 md:py-8 bg-black/50 backdrop-blur-lg">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
              WJ
            </span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Wendy Jiménez. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#inicio" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-mi" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Sobre Mí
            </Link>
            <Link href="#servicios" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Servicios
            </Link>
            <Link href="#formacion" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Formación
            </Link>
            <Link href="#proyectos" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Proyectos
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Sígueme en:</span>
            <Link
              href="https://linkedin.com/in/tu-perfil-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-200 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
