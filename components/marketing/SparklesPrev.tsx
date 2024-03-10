"use client";
import React from "react";
import { SparklesCore } from "./Sparkles";
import ChipNews from "../Next-Ui/ChipNews";
import { BsSoundwave } from "react-icons/bs";


export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="flex z-50 mb-5 flex-col items-center justify-center">
       <ChipNews/>

        </div>
        <h1 className="text-7xl z-50  text-center xl:text-[11rem] lg:text-[10rem] md:text-9xl   tracking-tighter     font-semibold text-white/80 ">
        Volume
        </h1>
      <div className="w-[40rem]  h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20   top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full   h-full bg-gray-950 [mask-image:radial-gradient(210px_200px_at_top,transparent_30%,white)] md:[mask-image:radial-gradient(350px_200px_at_top,transparent_30%,white)]  "></div>
      </div>
    </div>
  );
}


/*
<div className="absolute  justify-center top-36 z-20  left-1/2  transform -translate-x-1/2  ">
<div className="flex flex-col items-center justify-center">
  <ChipNews/>
  <BsSoundwave className="text-white/80 w-28 h-28 lg:w-36 lg:h-36  xl:w-48 xl:h-48 " />
</div>
<h1 className="text-8xl z-50 text-center xl:text-[15rem] lg:text-[11rem] md:text-9xl   tracking-tighter -mt-9 xl:-mt-16 font-semibold text-white/80 ">
  Volume
</h1>
<div className="flex justify-center">
<p className="text-xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400
opacity-70 text-center lg:w-96 line-clamp-3">
  Streame gratis musik überall und jedezeit. jetzt noch besser
</p>
</div>
<div className="flex justify-center mt-5 gap-5 ">

   
    <Button
  className="bg-black rounded-2xl p-3 px-5
  shadow-md ">
    <Link href={"/dashboard"}>
     Starten
    </Link>
  </Button>
  <Button
  color="primary"
  variant="shadow"
  className="  shadow-md rounded-2xl p-3 px-5 ">
   Premium
   <Chip size="sm">Bald</Chip>
  </Button>
</div>
</div> */