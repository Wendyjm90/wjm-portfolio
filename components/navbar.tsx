"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-black/50 border-b border-indigo-500/20">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">
            WJ
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#inicio"
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            href="#sobre-mi"
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Sobre mí
          </Link>
          <Link
            href="#servicios"
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link
            href="#formacion"
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Formación
          </Link>
          <Link
            href="#proyectos"
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Proyectos
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
          >
            Contacto
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menú</span>
        </Button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="container md:hidden backdrop-blur-lg bg-black/90"
        >
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="#inicio"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#sobre-mi"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mí
            </Link>
            <Link
              href="#servicios"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#formacion"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Formación
            </Link>
            <Link
              href="#proyectos"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
