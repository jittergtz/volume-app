"use client"
import React from "react";
import {Tabs, Tab} from "@nextui-org/react"; 

export default function TabsGenre() {
  


  return (
    <div className="flex flex-wrap gap-4 sm:overflow-hidden overflow-x-scroll ">
     
        <Tabs variant="light" aria-label="Tabs variants">
          <Tab key="photos" title="Charts"/>
          <Tab key="music" title="Rap"/>
          <Tab key="rid33s" title="Speed up"/>
          <Tab key="wweos" title="Mix"/>
          <Tab key="psdfos" title="Afro"/>
          <Tab key="tusic" title="Pop"/>
          <Tab key="vsdfeos" title="2000er"/>
          <Tab key="viuos" title="Chill"/>
        </Tabs>
     
    </div>
  );
}
