import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import { Analytics } from "@vercel/analytics/next"



export const metadata = {
  title: "Thusitha Gayan - Portfolio",
  description: "Personal portfolio of Thusitha Gayan - Undergraduate ICT Student and Web Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <Analytics/>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
