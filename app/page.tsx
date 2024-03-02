import { GeminiScroll } from "./gemini-scroll";
import { LampHero } from "./lamp_hero";
import { TypewriterHero } from "./components/TypewriterHero"
import { WavyBackgroundHero } from "./components/WavyBackgroundHero";
import { TracingBeamSection } from "./components/TracingBeamSection";
import { BentoGridSection } from "./components/BentoGridSection";
import { HoverEffectSection } from "./components/HoverEffectSection";

export default function Home() {
  return (
    <>
      <TypewriterHero />
        <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold pb-10">
        Services we offer
        </p>
        <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
      <BentoGridSection />
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold pb-10">
        Bespoke solutions built from the ground up. <br /> Modern & legacy stacks
        </p>
        <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
      <HoverEffectSection />
      <TracingBeamSection />
    </>
  );
}
