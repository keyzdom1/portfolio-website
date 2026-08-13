"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  typeSpeed?: number;
  className?: string;
};

export default function Typewriter({ text, typeSpeed = 30, className }: TypewriterProps) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const instant = setTimeout(() => setTyped(text), 0);
      return () => clearTimeout(instant);
    }

    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
      }
    }, typeSpeed);

    return () => clearInterval(timer);
  }, [text, typeSpeed]);

  return (
    <span aria-label={text} className={className}>
      <span aria-hidden>{typed}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[3px] animate-pulse rounded-full bg-gradient-to-b from-indigo-400 to-fuchsia-400 align-middle"
        style={{ height: "1.1em" }}
      />
    </span>
  );
}