import Image from "next/image"
import { Award, Trophy, Calendar } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Team Centaurus</h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Get to know the dedicated students, mentors, and coaches who make up our award-winning robotics team.
            </p>
          </div>
        </div>
      </section>

      {/* Team Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                Team Centaurus was founded in 2025 with a mission to inspire students to pursue STEM fields through
                competitive robotics. We are a group of dedicated students determined to further the field of what 
                is possible in the FIRST Tech Challenge and inspire a new generation of innovators.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our team members develop skills in mechanical engineering, programming, electrical engineering, CAD
                design, project management, and public speaking. Beyond technical skills, we emphasize teamwork,
                problem-solving, and gracious professionalism – core values of the FIRST program.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Centaurus group photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team Members</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Meet the talented individuals who make up Team Centaurus.
            </p>
          </div>

          {/* Team Categories */}
          <div className="mt-12 space-y-16">
            {/* Leadership */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">Leadership</h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="relative w-32 h-32 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=128&width=128`}
                        alt={`Team Member ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold">Bilal Chaudhary</h4>
                    <p className="text-sm text-[#7500ff] font-medium">Team Captain</p>
                    <p className="text-sm text-gray-500 text-center">
                      3rd year FTC student. Specializes in CADing and hardware.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">Engineering Team</h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="relative w-32 h-32 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=128&width=128`}
                        alt={`Team Member ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold">Bhavy Garg</h4>
                    <p className="text-sm text-[#7500ff] font-medium">Mechanical Lead</p>
                    <p className="text-sm text-gray-500 text-center">
                      4th year FTC student. Expert in CAD and mechanical design.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors & Coaches */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">Mentors & Coaches</h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="relative w-32 h-32 overflow-hidden rounded-full">
                      <Image
                        src={`/placeholder.svg?height=128&width=128`}
                        alt={`Mentor ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold">Joshua Waghorn</h4>
                    <p className="text-sm text-[#7500ff] font-medium">Mentor</p>
                    <p className="text-sm text-gray-500 text-center">
                      Dedicated engineer and former captain of Theseus Robotics.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Our Achievements</h2>
            <p className="max-w-[700px] text-gray-400 md:text-lg/relaxed">
              A record of excellence in FIRST Tech Challenge competitions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col space-y-2 border border-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-[#7500ff]" />
                <h3 className="text-xl font-bold">Regional Champions</h3>
              </div>
              <p className="text-sm text-gray-400">2023 Colorado FTC Regional Championship</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>February 2023</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 border border-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-[#7500ff]" />
                <h3 className="text-xl font-bold">Think Award</h3>
              </div>
              <p className="text-sm text-gray-400">For outstanding engineering documentation and team process</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>January 2023</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 border border-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-[#7500ff]" />
                <h3 className="text-xl font-bold">Semi-Finalists</h3>
              </div>
              <p className="text-sm text-gray-400">2022 FIRST Tech Challenge World Championship</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>April 2022</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 border border-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-[#7500ff]" />
                <h3 className="text-xl font-bold">Inspire Award</h3>
              </div>
              <p className="text-sm text-gray-400">The highest honor given to a team embodying the FIRST spirit</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>March 2022</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 border border-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-[#7500ff]" />
                <h3 className="text-xl font-bold">Regional Champions</h3>
              </div>
              <p className="text-sm text-gray-400">2022 Colorado FTC Regional Championship</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>February 2022</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 border border-gray-800 p-6 rounded-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-[#7500ff]" />
                <h3 className="text-xl font-bold">Design Award</h3>
              </div>
              <p className="text-sm text-gray-400">For innovative robot design and engineering excellence</p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>January 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
