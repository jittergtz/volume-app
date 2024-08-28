"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextRevealByWordProps {
  text: string;         // Überschrift
  paragraph?: string;   // Absatz
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  paragraph,       
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Text in Wörter aufteilen
  const titleWords = text.split(" ");
  const paragraphWords = paragraph ? paragraph.split(" ") : [];

  // Berechnung der Range für Headline-Animation
  const titleWordRanges: [number, number][] = titleWords.map((_, i) => [
    i / titleWords.length / 2,        // Verteilen auf erste Hälfte (0 bis 0.5)
    (i + 1) / titleWords.length / 2,
  ]);

  // Berechnung der Range für Paragraph-Animation
  const paragraphWordRanges: [number, number][] = paragraphWords.map((_, i) => [
    0.5 + i / paragraphWords.length / 2,  // Verteilen auf zweite Hälfte (0.5 bis 1)
    0.5 + (i + 1) / paragraphWords.length / 2,
  ]);

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 flex flex-col items-start justify-center h-[50%] max-w-4xl bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {/* Überschrift */}
        <p
          className={
            "flex flex-wrap  text-blue-700  text-3xl  lg:text-4xl xl:text-5xl"
          }
        >
          {titleWords.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={titleWordRanges[i]}>
              {word}
            </Word>
          ))}
        </p>

        {/* Absatz */}
        {paragraph && (
          <p
            className={
              "flex flex-wrap mt-4 text-neutral-700 text-xl  lg:text-2xl xl:text-3xl"
            }
          >
            {paragraphWords.map((word, i) => (
              <Word key={i} progress={scrollYProgress} range={paragraphWordRanges[i]}>
                {word}
              </Word>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-neutral-200 "}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
