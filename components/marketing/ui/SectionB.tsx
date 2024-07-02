import React from 'react'
import { VelocityScroll } from './textXrotate'
import { OrbitingCircleFinal } from './FInalGlobe'

function SectionB() {
  return (
    <div className='h-[80vh] bg-black '>
            <div className="pt-20">
            <VelocityScroll
            text="Schneller besser Musik finden"
            default_velocity={5}
            className="font-display  text-center text-4xl  tracking-[-0.02em]  drop-shadow-sm: text-transparent bg-clip-text bg-gradient-to-tr from-orange-300 to-purple-600 md:text-7xl md:leading-[5rem]"/>
            </div>

            <div className='flex justify-center  p-5 h-40 mt-20'>
    
            </div>
    </div>
  )
}

export default SectionB