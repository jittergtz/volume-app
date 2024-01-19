import Sidebar from "@/components/Sidebar";


interface SidebarProps {
    children: React.ReactNode
}
 
export default function Layout({ children}: SidebarProps ) {
  return (
    <>
     <main className="bg-black h-full w-full">
    <Sidebar>     
     {children}
     </Sidebar>
     </main>
    
    </>
  )
}