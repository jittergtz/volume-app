import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="h-[20rem] w-full  bg-dot-white/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-5xl sm:text-7xl  relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-2">
        Volume News
        <p className="text-xl md:text-2xl text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-700 ">
        Updates & Aktuelles
      </p>
      <p className="text-sm text-center relative z-20 text-neutral-300 ">
        Version 0.8 
      </p>
      </p>
    
    </div>
  );
}
