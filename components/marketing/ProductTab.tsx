"use client";


import Image from "next/image";
import { Tabs } from "./Tabs";





export function ProductTab() {
  const tabs = [
    {
      title: "Startseite",
      value: "home",
      content: (
        <div className="w-full  overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-950 to-fuchsia-600">
          <p className="font-normal text-2xl text-white/60">Startseite</p>
          <DummyContent
           srcValue="/image/dashboard-1.png"  />
        </div>
      ),
    },
    {
      title: "Player",
      value: "player",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-950 via-stone-950 to-stone-950">
          <p className="font-normal text-2xl text-white/60">Player</p>
          <DummyContent
           srcValue="/image/dashboard-player.png"  />
        </div>
      ),
    },
    {
      title: "Suche",
      value: "search",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900 to-stone-950">
          <p className="font-normal text-2xl text-white/60 ">Suche</p>
          <DummyContent
           srcValue="/image/dashboard-search.png"  />
        </div>
      ),
    },
    {
      title: "Künstler",
      value: "artist",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-green-700 to-stone-500">
          <p className="font-normal text-2xl text-white/60">Künstler</p>
          <DummyContent 
           srcValue="/image/dashboard-artist.png" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem]  md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs  tabs={tabs} />
    </div>
  );
}

const DummyContent = ({srcValue}: {srcValue: string}) => {
  return (
    <img
      src={srcValue}
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[92%] rounded-xl mx-auto"
    />
  );
};
