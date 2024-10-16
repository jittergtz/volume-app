import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/system"
import { Providers } from "./providers"
import Hero from "../components/Hero"
import SupabaseProvider from "@/providers/SupabaseProvider"
import UserProvider from "@/providers/UserProvider"
import ModalProvider from "@/providers/ModalProvider"
import Sidebar from "@/components/Sidebar"
import { ReduxProvider } from "@/lib/provider"

const inter = Inter({ subsets: ["latin"] })

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600" ]
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
      <body className={raleway.className}>
        <ReduxProvider>
          <UserProvider>
        <Providers>
          {children} 
        </Providers>
        </UserProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
