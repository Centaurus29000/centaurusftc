"use client";

import { robots } from "@/app/data/robotData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function RobotPage({ params }: { params: { id: string } }) {
  const robot = robots.find((r) => r.id === params.id);

  if (!robot) return <div className="text-center py-20">Robot not found.</div>;

  // Optional: Animate the title on mount
  const titleRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-slide-down");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black bg-opacity-90 text-white relative">
      {/* Animated Title */}
      <h1
        ref={titleRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 mt-5 text-3xl md:text-5xl font-bold text-center opacity-0"
        style={{ zIndex: 20 }}
      >
        Exploring {robot.name}
      </h1>

      {/* Robot Image */}
      <div className="flex flex-1 items-center justify-center h-[70vh] bg-black bg-opacity-60 mt-20 mb-10">
        <Image
          src={robot.image}
          alt={robot.name}
          width={800}
          height={600}
          className="object-contain rounded-lg"
          priority
        />
      </div>

      {/* Everything below the robot image */}
      <div className="bg-white w-full">
        {/* Description */}
        <div className="max-w-2xl mx-auto text-center py-8">
          <p className="text-lg text-gray-800">{robot.description}</p>
        </div>

        {/* Components Article Section */}
        <div className="max-w-5xl mx-auto py-8 px-4 space-y-10">
          {robot.components.map((comp) => (
            <article
              key={comp.sectionId}
              className="bg-gray-100 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 p-6"
            >
              {comp.image && (
                <div className="flex-shrink-0">
                  <Image
                    src={comp.image}
                    alt={comp.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-contain bg-gray-900 transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#7500ff] mb-2">{comp.name}</h2>
                <p className="text-gray-700">{comp.summary}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CAD and GitHub Buttons */}
        <div className="flex justify-center gap-8 py-8">
          <a
            href={robot.cadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-bold bg-[#7500ff] text-white transition-opacity ${
              robot.disableCad ? "opacity-50 pointer-events-none" : "hover:bg-[#5a00cc]"
            }`}
          >
            View CAD
          </a>
          <a
            href={robot.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg font-bold bg-gray-800 text-white transition-opacity ${
              robot.disableGithub ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"
            }`}
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
}