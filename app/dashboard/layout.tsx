import Sidebar from "@/components/Sidebar";
import ModalProvider from "@/providers/ModalProvider";

import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";




interface SidebarProps {
    children: React.ReactNode
}
 
export default function Layout({ children}: SidebarProps ) {
  return (
    <>
     <main className="bg-black h-full w-full">
    <SupabaseProvider>
      <UserProvider>
            <ModalProvider/>
            <Sidebar>     
            {children}
          </Sidebar>
      </UserProvider>
     </SupabaseProvider>
     </main>
    
    </>
  )
}