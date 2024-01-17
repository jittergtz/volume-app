import React from "react";
import {Chip} from "@nextui-org/react";

function ChipNews() {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-opacity-70  border-small border-white/50 ",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      Neuigkeiten Volume 1.0 🎉
    </Chip>
  );
}

export default ChipNews