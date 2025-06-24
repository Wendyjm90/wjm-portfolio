import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog y Recursos</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comparto conocimientos y aprendizajes sobre SEO y Marketing Digital
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Inteligencia Artificial en SEO"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Inteligencia Artificial en SEO</CardTitle>
              <CardDescription>Cómo implementar IA para mejorar tus estrategias</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">
                Descubre cómo la inteligencia artificial está revolucionando las estrategias de SEO y cómo puedes
                implementarla en tu negocio para obtener mejores resultados.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Leer más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Google Analytics 4"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Guía de Google Analytics 4</CardTitle>
              <CardDescription>Todo lo que necesitas saber sobre GA4</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">
                Una guía completa sobre cómo configurar y aprovechar al máximo Google Analytics 4 para medir y analizar
                el rendimiento de tu sitio web.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Leer más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Estrategias de contenido"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Estrategias de Contenido 2024</CardTitle>
              <CardDescription>Tendencias y mejores prácticas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">
                Conoce las últimas tendencias y mejores prácticas en estrategias de contenido para mejorar tu
                posicionamiento orgánico y atraer más tráfico cualificado.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Leer más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            Ver todos los artículos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
