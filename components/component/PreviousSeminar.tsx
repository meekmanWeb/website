"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { seminarContents } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function SeminarsWorkshopsSection() {
  return (
    <section className="w-full px-6 py-16 bg-white mx-auto max-w-6xl">
      {/* Hero Tagline */}
      <article className="flex items-center gap-4">
        <div className="text-left w-full md:w-1/2">
          <h1
            className="text-2xl md:text-3xl font-bold  mb-6 text-primary"
            data-aos="fade-down"
          >
            Empowering Educators. Inspiring Learners. Transforming Schools.
          </h1>

          {/* Marketing-Focused Intro */}
          <p className="md:text-lg  mb-12">
            At Meekman Books & Educational Services, we believe that quality
            education thrives when teachers, pupils, and school leaders are
            empowered with the right knowledge and tools. Our seminars and
            workshops are designed to elevate learning outcomes, strengthen
            instructional quality, and drive impactful school transformation.
          </p>
        </div>
      </article>

      {/* SEO-Optimized Content */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {seminarContents.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            className="p-6 bg-gray-50 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">
              {card.title}
            </h2>
            <p className="text-gray-600 text-base">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
