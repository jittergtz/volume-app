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

interface SidebarProps {
  children: React.ReactNode
}

// Metadatenexport
export const metadata: Metadata = {
  title: "Volume",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  
  authors: [
    { name: "Sandro Gantze" }
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/manifest-icon-192.maskable.png" },
    { rel: "icon", url: "icons/manifest-icon-512.maskable.png" },
  ],
};

// Viewport export
export const viewport = "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover";


export default function Layout({ children }: SidebarProps) {
  return (
    <>
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
    </>
  )
}
