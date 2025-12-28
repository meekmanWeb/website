"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export interface HeroSectionTypes {
  id: number;
  text: string;
  headsOn: string;
  backgroundImage: string;
}

const heroTexts: HeroSectionTypes[] = [
  {
    id: 1,
    text: "Empowering Minds",
    headsOn: "Innovation and creativity drives it.",
    backgroundImage: "/images/d1.jpg",
  },
  {
    id: 2,
    text: "Inspiring Readers",
    headsOn: "Where books meet boundless learning.",
    backgroundImage: "/images/d1.jpg",
  },
  {
    id: 3,
    text: "Transforming Futures",
    headsOn: "Keep learning ...",
    backgroundImage: "/images/d1.jpg",
  },
];

export default function HeroSection() {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    heroTexts.forEach((_, i) => {
      tl.to([textRefs.current[i]], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      }).to(
        [textRefs.current[i]],
        {
          opacity: 0,
          scale: 1.1,
          y: -10,
          duration: 1,
          ease: "power3.inOut",
        },
        "+=1"
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="  text-center relative">
      {/* HERO SLIDES */}
      <div className="relative w-full h-[450px] md:h-[550px] overflow-hidden ">
        {heroTexts.map(({ text, headsOn }, index) => (
          <div
            key={index}
            className="absolute inset-0 flex flex-col px-6 justify-center "
          >
            <Image
              src="/images/d1.jpg"
              alt={text}
              fill
              className="object-cover  "
            />

            <div
              className="opacity-0 scale-95 relative z-10 text-left text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
              ref={(el: HTMLDivElement | null) => {
                textRefs.current[index] = el;
              }}
            >
              {text}
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mt-6">
                {headsOn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
