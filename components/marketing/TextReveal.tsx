"use client"
import React, { useEffect, useRef } from 'react';

interface TextRevealProps {
  text: string;
  color: string;
}

function TextReveal({ text, color }: TextRevealProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    let words: string[] = text.split(' ');

    paragraph.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');

    let spans: NodeListOf<Element>;

    const updateSpans = () => {
      spans = paragraph.querySelectorAll("span");
      spans.forEach(span => {
        const rect = span.parentElement?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight / 0) {
          let { left, top } = span.getBoundingClientRect();
          top = top - (window.innerHeight * .7);
          let opacityValue = 1 - ((top * .01) + (left * 0.001)) < 0.1 ? 0.1 : 1 - ((top * .01) + (left * 0.001)).toFixed(3);
          opacityValue = opacityValue > 1 ? 1 : Number(opacityValue.toFixed(3));
          span.style.opacity = String(opacityValue);
        }
      });
    };

    updateSpans();
    window.addEventListener("scroll", updateSpans);

    return () => {
      window.removeEventListener("scroll", updateSpans);
    };
  }, [text]); // Trigger effect on text change

  return (
    <section className={` text-4xl lg:text-6xl py-20`}>
      <p className={color} ref={paragraphRef}>
        {text}
      </p>
    </section>
  );
}

export default TextReveal;
