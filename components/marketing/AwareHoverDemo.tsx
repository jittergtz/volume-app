"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { AwareHoverPicture } from "./AwareHoverPicture";


export function DirectionAwareHoverDemo() {
  const imageUrl =
    "/image/dashboard-1.png";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <AwareHoverPicture imageUrl={imageUrl}>
        <p className="text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299 / night</p>
      </AwareHoverPicture>
    </div>
  );
}
