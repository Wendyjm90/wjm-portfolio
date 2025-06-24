import type React from "react"
import "@/app/globals.css"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Wendy Jiménez | SEO y Marketing Digital",
  description: "Portafolio profesional de Wendy Jiménez, especialista en SEO y Marketing Digital",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
