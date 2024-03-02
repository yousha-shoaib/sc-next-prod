"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterHero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "better",
    },
    {
      text: "digital",
    },
    {
      text: "solutions",
    },
    {
      text: "with",
    },
    {
      text: "Shoaib Consulting.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        A world class software consulting house 
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-80 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Find out more
        </button>
      </div>
    </div>
  );
}
