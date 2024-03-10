"use client"
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";


function AccordionCard() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion selectionMode="multiple" className="max-w-xl  px-10">
      <AccordionItem key="1" aria-label="Account und Daten" title="Account und Daten">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Löschen von Daten" title="Verwaltung von Daten">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Premium" title="Premium">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}



export default AccordionCard