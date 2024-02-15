
import AuthCard from '@/components/AuthCard'
import Header from '@/components/Header'
import MobileNavbar from '@/components/MobileNav'
import GithubCard from '@/components/Next-Ui/GithubCard'
import GridImgLp from '@/components/Next-Ui/GridImgLp'
import ProfilGridCard from '@/components/Next-Ui/ProfilGridCard'

import React from 'react'



function page() {



  return (
    <>
    <div className='bg-neutral-950 rounded-lg pb-64'>
        <Header>
        <div className='sm:mb-2'>
          <h1 className='text-white z-50 mt-10 text-3xl'>
            Profil
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
          gap-3 mt-4'>
          </div>
           </div>
        </Header>
      


      


        <div className='flex  flex-col items-center justify-center'> 
        <ProfilGridCard/>
        <AuthCard/>
        <GithubCard/>
        </div>
       
       




        </div>
    </>
  )
}


export default page