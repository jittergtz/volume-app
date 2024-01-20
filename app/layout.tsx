import type { Metadata } from "next"
import { Inter, Roboto, Nunito_Sans } from "next/font/google"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/system"
import { Providers } from "./providers"
import Hero from "../components/Hero"
import Navbar from "../components/marketing/NavbarLp"
import SupabaseProvider from "@/providers/SupabaseProvider"
import UserProvider from "@/providers/UserProvider"
import ModalProvider from "@/providers/ModalProvider"
import Sidebar from "@/components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
})

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Volume",
  description: "Music streaming app, free music streaming",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={nunito.className}>
        <Providers>
          {children} 
        </Providers>
      </body>
    </html>
  )
}
