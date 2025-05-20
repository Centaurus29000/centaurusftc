"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Robot } from "@/app/data/robotData";

export default function Carousel({ robots }: { robots: Robot[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    // Clone the content to create an infinite loop effect
    const clonedContent = carousel.innerHTML;
    carousel.innerHTML += clonedContent;

    let scrollPosition = 0;

    const scrollStep = () => {
      scrollPosition += 1; // Adjust the speed by changing this value
      if (scrollPosition >= carousel.scrollWidth / 2) {
        // Reset scroll position when halfway through the cloned content
        scrollPosition = 0;
      }
      carousel.scrollTo({ left: scrollPosition, behavior: "auto" }); // Use "auto" for continuous scrolling
    };

    const scrollInterval = setInterval(scrollStep, 20); // Adjust the interval for smoother scrolling

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-screen overflow-hidden bg-gray-100">
      {/* Scrollable Container */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap px-4"
      >
        {robots.map((robot, index) => (
          <Link
            key={index}
            href={`/robots/${robot.id}`}
            className="group relative flex-shrink-0 w-[300px] snap-center overflow-hidden rounded-lg border bg-white"
          >
            <div className="flex justify-center items-center aspect-video overflow-hidden">
               {/* Team Tag */}
  
              <Image
                src={robot.image}
                alt={robot.name}
                width={500}
                height={200}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold">{robot.name}</h3>
              <span className="absolute top-2 left-2 bg-[#7500ff] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow bg-opacity-50">
    {robot.team}
  </span>
              <p className="text-sm text-gray-500 mt-2">{robot.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-[#7500ff]">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}