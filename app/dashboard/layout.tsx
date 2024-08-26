import MobileNavbar from "@/components/MobileNav"
import Player from "@/components/musicPlayer/PlayerComp"
import PlayerFullCard from "@/components/PlayerFullView/PlayerFullCard"
import Sidebar from "@/components/Sidebar"
import { ReduxProvider } from "@/lib/provider"
import ModalProvider from "@/providers/ModalProvider"

import SupabaseProvider from "@/providers/SupabaseProvider"
import ToasterProvider from "@/providers/ToasterProvider"
import UserProvider from "@/providers/UserProvider"
import { Metadata } from "next"
import { Poppins, Mulish, Lato, Nunito_Sans } from "next/font/google"

interface SidebarProps {
  children: React.ReactNode
}


const mulish = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
})


// Metadatenexport
export const metadata: Metadata = {
  title: "Volume",
  description: "Schneller Songs entdecken die dir gefallen!",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  
  authors: [
    { name: "Sandro Gantze" }
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/volLogoV3.png" },
    { rel: "icon", url: "icons/volV3512.png" },
  ],
};

// Viewport export
export const viewport = "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover";




export default function Layout({ children }: SidebarProps) {
  return (
    <>
     <body className={mulish.className}>
      <main className="bg-black h-full w-full">
        <ReduxProvider>
          <ToasterProvider />
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider />
              <Sidebar>{children}</Sidebar>
              <Player />
              <MobileNavbar/>
            </UserProvider>
          </SupabaseProvider>
        </ReduxProvider>
      </main>
      </body>
    </>
  )
}
