"use client";
import React from "react";
import { LampContainer } from "./Lamp";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";


export function LampDemo() {
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
        className="mt-8 pb-5   bg-gradient-to-br from-neutral-300 to-neutral-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Dein Sound <br /> einfacher entdecken
                 

      </motion.h1>
  
    </LampContainer>
  );
}
