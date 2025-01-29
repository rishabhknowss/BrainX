import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brainx",
  description: "Engage, Learn, and Earn with QuizPlay Learn",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-black to-red-900 text-white min-h-screen`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

