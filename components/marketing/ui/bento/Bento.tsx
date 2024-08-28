/* eslint-disable @next/next/no-img-element */
import { CalendarIcon } from "@radix-ui/react-icons";
import { Heart } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Marquee from "@/components/magicui/marquee";

import clsx from "clsx";
import { AnimatedBeamMultipleOutputDemo } from "./animated-multiple-outputs";
import { AnimatedListDemo } from "./animated-list";

const files = [
  {
    url: "https://e-cdns-images.dzcdn.net/images/cover/0fd6e3b346b959a8781ccfa89b63607a/250x250-000000-80-0-0.jpg",
    name: "Sabrina Carpenter",
    title: "Taste",
  },
  {
    url: "https://e-cdns-images.dzcdn.net/images/cover/89916126647cd6b73c40cc8d53fbd600/250x250-000000-80-0-0.jpg",
    name: "Post Malone",
    title: "California Sober",
  },
  {
    url: "https://e-cdns-images.dzcdn.net/images/cover/b5b452c7150eb7587e26701cba015987/250x250-000000-80-0-0.jpg",
    name: "Jessie Reyez",
    title: "Ridin",
  },
  {
    url: "https://e-cdns-images.dzcdn.net/images/cover/3d1cf81a957caf87b6664fca37ce4864/250x250-000000-80-0-0.jpg",
    name: "Halsey",
    title: "Lonely is the Muse",
  },
  {
    url: "https://e-cdns-images.dzcdn.net/images/cover/94d1cca66cf68427173920a263d852b9/250x250-000000-80-0-0.jpg",
    name: "KATSEYE",
    title: "My Way",
  },
];

const features = [
  {
    Icon: CiSearch,
    name: "Finde wonach du suchst",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={clsx(
              "relative w-36 h-80 cursor-pointer overflow-hidden rounded-xl border p-1",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <img
                src={f?.url}
                alt="cover"
                className="rounded-xl " />
                <figcaption className="text-md font-medium text-white ">
                  {f.title}
                </figcaption>
              </div>
            </div>
            <blockquote className=" text-xs">{f.name}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Heart,
    name: "Schneller,",
    description: "als je zuvor Songs entdecken!",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute  right-2  top-4 h-[300px] w-[300px] sm:w-[600px] lg:w-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: FaLocationArrow,
    name: "Übertragen",
    description: "Songs sofort in deiner Streaming app öffnen",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Finde was du suchst",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <div>
        hi
      </div>
    ),
  },
];

export function Bento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
