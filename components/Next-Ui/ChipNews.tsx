import React from "react";
import {Chip} from "@nextui-org/react";
import Link from "next/link";

function ChipNews() {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-opacity-20  border-small border-white/50 ",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      <Link href={"/news"} >
      Neuigkeiten Volume 0.8 🎉
      </Link>
     
    </Chip>
  );
}

export default ChipNews