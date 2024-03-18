"use client"
import { Image } from '@nextui-org/react'
import { useInView, useMotionValueEvent } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { useScroll } from "framer-motion"

function GradientFirst({imgValue, classNames, text}: {
  imgValue: string,
  text: string,
  classNames: any}) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);



  return (
   <div className='flex flex-col md:flex-row h-[57rem] items-center justify-center p-5
      rounded-2xl'>
         <Image
          alt='app player preview'
          src={imgValue}
          className='w-64 lg:w-96'
          />


         <img
          alt="Shadow"
          className={`lp-image-card-shadow ${isVisible ? 'appear' : ''}`}
          src={imgValue}
          ref={imgRef}
        />

   

         <div className={`mt-5 md:mt-0 ml-7 w-80  lg:w-[33rem] z-50 ${classNames}`}>
            <h1 className='text-5xl lg:text-7xl'>
           {text}
            </h1>
            
          </div>

       
   </div>
  )
}

export default GradientFirst