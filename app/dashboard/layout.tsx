import Player from "@/components/musicPlayer/PlayerComp"
import Sidebar from "@/components/Sidebar"
import { ReduxProvider } from "@/lib/provider"
import ModalProvider from "@/providers/ModalProvider"

import SupabaseProvider from "@/providers/SupabaseProvider"
import ToasterProvider from "@/providers/ToasterProvider"
import UserProvider from "@/providers/UserProvider"

interface SidebarProps {
  children: React.ReactNode
}

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
            </UserProvider>
          </SupabaseProvider>
        </ReduxProvider>
      </main>
    </>
  )
}
