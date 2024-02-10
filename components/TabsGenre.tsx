"use client"
import React from "react";
import {Tabs, Tab} from "@nextui-org/react"; 

export default function TabsGenre() {
  


  return (
    <div className="flex flex-wrap gap-4 sm:overflow-hidden overflow-x-scroll ">
     
        <Tabs variant="light" aria-label="Tabs variants">
          <Tab key="charts" title="Charts"/>
          <Tab key="rap" title="Rap"/>
          <Tab key="speedup" title="Speed up"/>
          <Tab key="mix" title="Mix"/>
          <Tab key="discover" title="Discover"/>
          <Tab key="popular" title="Popular"/>
          <Tab key="2000er" title="2000er"/>
          <Tab key="chill" title="Chill"/>
        </Tabs>
     
    </div>
  );
}
