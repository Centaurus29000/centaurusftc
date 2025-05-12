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
                Team Centaurus was founded in 2015 with a mission to inspire students to pursue STEM fields through
                competitive robotics. What started as a small group of enthusiastic students has grown into a formidable
                team with multiple regional championships.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our team members develop skills in mechanical engineering, programming, electrical engineering, CAD
                design, project management, and public speaking. Beyond technical skills, we emphasize teamwork,
                problem-solving, and gracious professionalism – core values of the FIRST program.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team Centaurus group photo"
                  width={600}
                  height={400}
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
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center w-32 h-32 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src={`/placeholder.svg?height=128&width=128`}
                        alt={`Member ${i + 1}`}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold">Member {i + 1}</h4>
                    <p className="text-sm text-[#7500ff] font-medium">Role</p>
                    <p className="text-sm text-gray-500 text-center">Description</p>
                  </div>
                ))}
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
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
                {[
                  {
                    name: "Bilal Chaudhary",
                    role: "Team Captain",
                    description: "3rd year FTC student. Leads design and team management.",
                  },
                  {
                    name: "Bhavy Garg",
                    role: "Mechanical Lead",
                    description: "4th year FTC student. Specializes in CAD and design.",
                  },
                  {
                    name: "Stas Fetisov",
                    role: "Lead Programmer",
                    description: "2nd year FTC student. Expert in Java and control systems.",
                  },
                  {
                    name: "Disath Peduruhewa",
                    role: "Lead Outreach",
                    description: "3rd year FIRST student. Focuses on community events and outreach.",
                  },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center w-32 h-32 overflow-hidden rounded-full bg-gray-200">
  <Image
    src={`/placeholder.svg?height=128&width=128`}
    alt={member.name}
    width={128} // Explicit width
    height={128} // Explicit height
    className="object-cover"
  />
</div>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-sm text-[#7500ff] font-medium">{member.role}</p>
                    <p className="text-sm text-gray-500 text-center">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">Team Members</h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
                {[
                  {
                    name: "Hugo Lawler",
                    role: "Hardware Expert",
                    description: "3rd year FTC student. Specialises in hardware and media design.",
                  },
                  {
                    name: "Nevaan Dias",
                    role: "Wiring Expert",
                    description: "FRC alumni, 4th year FIRST student. Expert in wiring and hardware.",
                  },
                  {
                    name: "Layla Chitoni",
                    role: "Media Expert",
                    description: "2nd year FTC student, media design expert.",
                  },
                ].map((member, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center w-32 h-32 overflow-hidden rounded-full bg-gray-200">
  <Image
    src={`/placeholder.svg?height=128&width=128`}
    alt={member.name}
    width={128} // Explicit width
    height={128} // Explicit height
    className="object-cover"
  />
</div>
                    <h4 className="text-xl font-bold">{member.name}</h4>
                    <p className="text-sm text-[#7500ff] font-medium">{member.role}</p>
                    <p className="text-sm text-gray-500 text-center">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentors & Coaches */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center">Mentors & Coaches</h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
                {[
                  {
                    name: "Joshua Waghorn",
                    role: "Mentor",
                    description: "Alumni from Team Theseus Robotics, specialising in mechanical design.",
                  },
                  {
                    name: "Aadi Shetty",
                    role: "Mentor",
                    description: "Alumni from Team Hephaestus, specialising in mechanical design",
                  },
                ].map((mentor, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="flex items-center justify-center w-32 h-32 overflow-hidden rounded-full bg-gray-200">
  <Image
    src={`/placeholder.svg?height=128&width=128`}
    alt={mentor.name}
    width={128} // Explicit width
    height={128} // Explicit height
    className="object-cover"
  />
</div>
                    <h4 className="text-xl font-bold">{mentor.name}</h4>
                    <p className="text-sm text-[#7500ff] font-medium">{mentor.role}</p>
                    <p className="text-sm text-gray-500 text-center">{mentor.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
