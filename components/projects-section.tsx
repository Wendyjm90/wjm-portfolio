"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      id: "desprendarte",
      title: "Desprendarte",
      badge: "WordPress + SEO",
      description: "Gestión de contenido, maquetación visual y SEO",
      image: "/placeholder.svg?height=400&width=600",
      items: [
        "Maquetación del sitio completo con Elementor",
        "Organización del contenido orientado a conversión",
        "Implementación SEO On Page (metadatos, encabezados, enlazado interno)",
        "Optimización de imágenes (formato, atributos ALT y title)",
        "Configuración de plugins SEO (Yoast o Rank Math)",
        "Integración con Search Console para seguimiento de resultados",
      ],
    },
    {
      id: "ehunting-latam",
      title: "eHunting Latam",
      badge: "SEO & Marketing",
      description: "Estrategia digital integral para empresa de reclutamiento",
      image: "/placeholder.svg?height=400&width=600",
      items: [
        "Gestión de contenido en WordPress",
        "Optimización SEO on-page y off-page",
        "Campañas en Facebook, Instagram y LinkedIn Ads",
        "Análisis de métricas y optimización continua",
        "Mejora de posicionamiento orgánico",
      ],
    },
    {
      id: "servientrega",
      title: "Servientrega",
      badge: "SEO",
      description: "Estrategia SEO y gestión de contenidos",
      image: "/placeholder.svg?height=400&width=600",
      items: [
        "Estrategias avanzadas de SEO en blogs",
        "Moderación de contenido en redes sociales",
        "Maquetación y optimización de contenido",
        "Implementación de schema.org",
        "Análisis de datos para mejorar posicionamiento",
      ],
    },
    {
      id: "toc-toc-aseo",
      title: "Toc Toc Aseo",
      badge: "WordPress",
      description: "Optimización de blogs y contenido web",
      image: "/placeholder.svg?height=400&width=600",
      items: [
        "Actualización y optimización de blogs",
        "Implementación de WordPress y YoastSEO",
        "Mejora del posicionamiento de la marca",
        "Estrategia de contenidos",
        "Optimización de palabras clave",
      ],
    },
    {
      id: "tabcin",
      title: "Tabcin Centro América",
      badge: "Drupal",
      description: "Administración de contenido y SEO",
      image: "/placeholder.svg?height=400&width=600",
      items: [
        "Administración de contenido con CMS Drupal",
        "Optimización SEO de contenido",
        "Mejora de visibilidad y tráfico",
        "Gestión de portales web",
        "Estrategia de palabras clave",
      ],
    },
    {
      id: "mopa-moda",
      title: "Mopa Moda",
      badge: "E-commerce",
      description: "Administración de tienda online y SEO",
      image: "/placeholder.svg?height=400&width=600",
      items: [
        "Administración y optimización de contenido en WordPress y WooCommerce",
        "Implementación de YoastSEO para mejorar posicionamiento",
        "Actualización constante de productos y precios",
        "Mejora de experiencia de usuario",
        "Optimización para motores de búsqueda",
      ],
    },
  ]

  return (
    <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-indigo-950 z-0"></div>

      {/* Blur circles */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
              Proyectos
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experiencia práctica en proyectos de SEO y Marketing Digital
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-lg overflow-hidden transition-all hover:border-indigo-500/50 hover:bg-black/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      {project.badge}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  {project.items.slice(0, 4).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/proyectos/${project.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-indigo-500/30 text-indigo-400 hover:bg-indigo-950/30 group"
                  >
                    Ver detalles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
