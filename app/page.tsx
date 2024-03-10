
import HeroLp from "@/components/marketing/HeroLp"
import { FloatingNavComp } from "@/components/marketing/ui/Floating-navbar"
import { IconHome, IconMessage, IconNews, IconUser } from "@tabler/icons-react"
import GradientFirst from "@/components/marketing/GradientFirst"
import GridOne from "@/components/marketing/GridOne";




export default function Home() {

  const navItems = [
    {
      name: "Volume",
      link: "/dashboard",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Neues",
      link: "/news",
      icon: <IconNews className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
   
  ];



  return (
    <main className="bg-gray-950 ">
        <FloatingNavComp navItems={navItems} />

           <HeroLp/>

           <div className="flex justify-center p-4">
           <GridOne/>
           </div>
      
  

         <div className="flex justify-center ">

        <GradientFirst/>
         </div>
   

          





      

  

  
    </main>
  )
}
