"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function FormacionSection() {
  const formacionItems = [
    {
      categoria: "SEO y Posicionamiento Web",
      icon: <BookOpen className="h-6 w-6 text-teal-400" />,
      cursos: [
        "SEO Técnico Avanzado",
        "Optimización para Core Web Vitals",
        "SEO Local y Google My Business",
        "Análisis de Keywords y Competencia",
        "Link Building Estratégico",
      ],
    },
    {
      categoria: "Marketing Digital",
      icon: <Award className="h-6 w-6 text-indigo-400" />,
      cursos: [
        "Google Analytics 4 Certificación",
        "Google Tag Manager",
        "Marketing de Contenidos",
        "Email Marketing Automation",
        "Conversion Rate Optimization (CRO)",
      ],
    },
    {
      categoria: "Copywriting y Contenido",
      icon: <GraduationCap className="h-6 w-6 text-teal-400" />,
      cursos: [
        "Copywriting para SEO",
        "Redacción Persuasiva",
        "Content Marketing Strategy",
        "Storytelling para Marcas",
        "Escritura para Web y Blogs",
      ],
    },
    {
      categoria: "Herramientas y Plataformas",
      icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
      cursos: [
        "WordPress Avanzado",
        "Elementor Pro",
        "SEMrush Certification",
        "Ahrefs Masterclass",
        "Screaming Frog SEO Spider",
      ],
    },
  ]

  return (
    <section id="formacion" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-teal-950 z-0"></div>

      {/* Blur circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-teal-400 text-transparent bg-clip-text">
              Formación
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Certificaciones y cursos especializados en SEO, Marketing Digital y herramientas profesionales
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2">
          {formacionItems.map((categoria, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 transition-all hover:border-teal-500/50 hover:bg-black/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-500/20 p-2 rounded-full">{categoria.icon}</div>
                <h3 className="text-xl font-bold text-white">{categoria.categoria}</h3>
              </div>
              <div className="space-y-2">
                {categoria.cursos.map((curso, cursoIndex) => (
                  <div key={cursoIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{curso}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-4 py-2">
            Certificados disponibles bajo solicitud
          </Badge>
        </motion.div>
      </div>
    </section>
  )
}
