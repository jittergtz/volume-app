import React from "react";
import {Chip} from "@nextui-org/react";

function ChipNews() {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-opacity-20  border-small border-white/50 ",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      Neuigkeiten Volume 0.8 🎉
    </Chip>
  );
}

export default ChipNews