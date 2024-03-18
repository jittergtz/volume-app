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
      const spanElements = Array.from(paragraph.querySelectorAll<HTMLSpanElement>("span"));
      spanElements.forEach(span => {
        const rect = span.parentElement?.getBoundingClientRect();
        if (rect && rect.top < window.innerHeight / 0) {
          let { left, top } = span.getBoundingClientRect();
          top = top - (window.innerHeight * .7);
          let opacityValue = 1 - ((top * .01) + (left * 0.001));
          opacityValue = opacityValue < 0.1 ? 0.1 : opacityValue;
          opacityValue = opacityValue > 1 ? 1 : opacityValue;
          span.style.opacity = opacityValue.toFixed(3);
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
