import React from "react";
import {Chip} from "@nextui-org/react";
import Link from "next/link";

function ChipNews({text}: {text: string}) {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-opacity-20  border-small border-white/50 ",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      <Link href={"/news"} >
       {text}
      </Link>
     
    </Chip>
  );
}

export default ChipNews