import Sidebar from "@/components/Sidebar";


interface SidebarProps {
    children: React.ReactNode
}
 
export default function Layout({ children}: SidebarProps ) {
  return (
    <>
    <Sidebar>
     {children}
     </Sidebar>
    
    </>
  )
}