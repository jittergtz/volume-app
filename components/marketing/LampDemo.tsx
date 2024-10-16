"use client"
import React from "react";
import { LampContainer, SecondLampContainer } from "./Lamp";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";


export function LampOne() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 pb-5 font-[600] md:font-[400]  bg-gradient-to-t from-neutral-500 to-neutral-100 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
      >
        Dein Sound <br /> einfacher entdecken
                 

      </motion.h1>
  
    </LampContainer>
  );
}


export function LampTwo() {
  return (
    <SecondLampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >

                 

      </motion.h1>
  
    </SecondLampContainer>
  );
}
