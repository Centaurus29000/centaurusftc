import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Cog, Zap, Calendar } from "lucide-react";
import { robots } from "@/app/data/robotData";

export default function RobotsPage() {
  const currentRobot = robots.find((robot) => robot.status === "current");
  const pastRobots = robots.filter((robot) => robot.status === "past");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Robots</h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Explore the innovative robots we've designed and built for FIRST Tech Challenge competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Current Robot Section */}
      {currentRobot && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Current Robot: {currentRobot.name}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
                {currentRobot.description}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Robot Image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px]">
                  <Image
                    src={currentRobot.image}
                    alt={currentRobot.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Robot Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Features & Specifications</h3>
                  <p className="text-gray-500">
                    Blackjack represents our most accomplished robot to date, featuring horizontal extension, innovative
                    coaxial mechanisms, and consistent autonomous capabilities.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start space-x-2">
                    <Cpu className="h-5 w-5 text-[#7500ff] mt-0.5" />
                    <div>
                      <h4 className="font-bold">Control System</h4>
                      <p className="text-sm text-gray-500">REV Control system with Servo Power modules</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Cog className="h-5 w-5 text-[#7500ff] mt-0.5" />
                    <div>
                      <h4 className="font-bold">Drive Train</h4>
                      <p className="text-sm text-gray-500">Mecanum wheel system for omnidirectional movement</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Zap className="h-5 w-5 text-[#7500ff] mt-0.5" />
                    <div>
                      <h4 className="font-bold">Power System</h4>
                      <p className="text-sm text-gray-500">Custom coaxial intake mechanism consisting of both vertical and horizontal rollers</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Calendar className="h-5 w-5 text-[#7500ff] mt-0.5" />
                    <div>
                      <h4 className="font-bold">Build Season</h4>
                      <p className="text-sm text-gray-500">{currentRobot.buildSeason}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Design Process</h3>
                  <p className="text-gray-500">
                    Blackjack went through multiple design iterations, starting with CAD models and prototypes. Our
                    engineering team spent over 500 hours designing, building, and testing to ensure optimal performance.
                  </p>
                </div>

                <div className="pt-4">
                  <Link href="/robots/4">
  <button className="bg-[#7500ff] hover:bg-[#7500ff]/90 text-white px-4 py-2 rounded-lg">
    View Technical Documentation
  </button>
</Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Past Robots Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Past Robots</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              A look back at our previous competition robots and their achievements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastRobots.map((robot) => (
              <div key={robot.id} className="group relative overflow-hidden rounded-lg border">
                <div className="flex justify-center items-center aspect-video overflow-hidden">
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
                  <p className="text-sm text-gray-500 mt-2">{robot.description}</p>
                  <div className="mt-4">
                    <Link
                      href={`/robots/${robot.id}`}
                      className="inline-flex items-center text-sm font-medium text-[#7500ff]"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}