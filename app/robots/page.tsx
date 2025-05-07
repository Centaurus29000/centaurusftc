import Image from "next/image"
import { Cpu, Cog, Zap, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RobotsPage() {
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
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Current Robot: Nebula</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Our 2023-2024 competition robot designed for the CENTERSTAGE℠ challenge.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nebula Robot"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Features & Specifications</h3>
                <p className="text-gray-500">
                  Nebula represents our most advanced robot design to date, featuring precision control, innovative
                  mechanisms, and autonomous capabilities.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-2">
                  <Cpu className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <div>
                    <h4 className="font-bold">Control System</h4>
                    <p className="text-sm text-gray-500">REV Control Hub with custom firmware</p>
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
                    <p className="text-sm text-gray-500">12V REV battery with custom power distribution</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Calendar className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <div>
                    <h4 className="font-bold">Build Season</h4>
                    <p className="text-sm text-gray-500">September 2023 - January 2024</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold">Design Process</h3>
                <p className="text-gray-500">
                  Nebula went through multiple design iterations, starting with CAD models and prototypes. Our
                  engineering team spent over 500 hours designing, building, and testing to ensure optimal performance.
                </p>
              </div>

              <div className="pt-4">
                <Button className="bg-[#7500ff] hover:bg-[#7500ff]/90">View Technical Documentation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            {/* Robot 1 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Stellar - 2022-2023 Robot"
                  width={300}
                  height={200}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Stellar (2022-2023)</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Our robot for the POWERPLAY℠ challenge. Regional champion and Think Award winner.
                </p>
                <div className="mt-4">
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-[#7500ff]">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Robot 2 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Orbit - 2021-2022 Robot"
                  width={300}
                  height={200}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Orbit (2021-2022)</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Our robot for the FREIGHT FRENZY℠ challenge. World Championship semi-finalist.
                </p>
                <div className="mt-4">
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-[#7500ff]">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Robot 3 */}
            <div className="group relative overflow-hidden rounded-lg border">
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Nova - 2020-2021 Robot"
                  width={300}
                  height={200}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Nova (2020-2021)</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Our robot for the ULTIMATE GOAL℠ challenge. Design Award winner.
                </p>
                <div className="mt-4">
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-[#7500ff]">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Technical Approach</h2>
              <p className="text-gray-400 md:text-lg/relaxed">
                At Team Centaurus, we follow a rigorous engineering process for robot design and development. Our
                approach combines innovative thinking with practical engineering principles.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-[#7500ff] font-bold">01.</span>
                  <span>Requirements analysis based on game rules and strategy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#7500ff] font-bold">02.</span>
                  <span>CAD design and virtual testing using Fusion 360</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#7500ff] font-bold">03.</span>
                  <span>Rapid prototyping of critical mechanisms</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#7500ff] font-bold">04.</span>
                  <span>Iterative testing and refinement</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#7500ff] font-bold">05.</span>
                  <span>Programming with Java and custom control algorithms</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Robot design process"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
