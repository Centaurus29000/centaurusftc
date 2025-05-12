import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Mail, Download, Users, Trophy, Rocket, Heart } from "lucide-react"

export default function SponsorshipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sponsorship Opportunities</h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Partner with Team Centaurus and help us inspire the next generation of STEM leaders.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#sponsorship-tiers">
                <Button className="bg-[#7500ff] hover:bg-[#7500ff]/90">View Sponsorship Tiers</Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="text-white border-white hover:bg-purple/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Why Sponsor Team Centaurus?</h2>
              <p className="text-gray-500 md:text-lg/relaxed">
                By sponsoring Team Centaurus, you're not just supporting a robotics team – you're investing in the
                future of STEM education and innovation.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="font-medium text-gray-900">Community Impact:</strong> Support STEM education and
                    outreach in our local community
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="font-medium text-gray-900">Brand Visibility:</strong> Your logo on our robot,
                    team apparel, website, and competition materials
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="font-medium text-gray-900">Talent Pipeline:</strong> Connect with motivated
                    students interested in STEM careers
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">
                    <strong className="font-medium text-gray-900">Team Engagement:</strong> Opportunities for your
                    employees to mentor our students
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/sponsoronteam.png?height=400&width=600"
                  alt="Team Centaurus with sponsors"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Funds Are Used Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">How Your Support Helps</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Your sponsorship directly impacts our team's ability to compete, learn, and grow.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 bg-[#7500ff]/10 rounded-full">
                <Rocket className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Robot Parts</h3>
              <p className="text-sm text-gray-500">
                Motors, controllers, sensors, structural components, and specialized hardware for our competition robot.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 bg-[#7500ff]/10 rounded-full">
                <Trophy className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Competition Fees</h3>
              <p className="text-sm text-gray-500">
                Registration fees, travel expenses, and accommodations for regional and national competitions.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 bg-[#7500ff]/10 rounded-full">
                <Users className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Team Development</h3>
              <p className="text-sm text-gray-500">
                Training materials, workshops, and educational resources to develop our team's skills.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="p-3 bg-[#7500ff]/10 rounded-full">
                <Heart className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Outreach Programs</h3>
              <p className="text-sm text-gray-500">
                Materials and resources for community outreach events to inspire younger students in STEM.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-[300px]">
              <Image
                src="/Picture2.png?height=300&width=800"
                alt="Budget allocation chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section id="sponsorship-tiers" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Sponsorship Tiers</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              We offer various sponsorship levels to fit different budgets and partnership goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Bronze Tier */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Bronze</h3>
                <span className="text-xl font-bold">$250+</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Logo on team website</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Social media recognition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Team thank you letter</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Certificate of appreciation</span>
                </li>
              </ul>
              <Link href="#contact">
                <Button className="w-full bg-[#7500ff] hover:bg-[#7500ff]/90">Become a Bronze Sponsor</Button>
              </Link>
            </div>

            {/* Silver Tier */}
            <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Silver</h3>
                <span className="text-xl font-bold">$500+</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">All Bronze tier benefits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Small logo on team t-shirts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Logo on competition banner</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Team presentation at your company</span>
                </li>
              </ul>
              <Link href="#contact">
                <Button className="w-full bg-[#7500ff] hover:bg-[#7500ff]/90">Become a Silver Sponsor</Button>
              </Link>
            </div>

            {/* Gold Tier */}
            <div className="flex flex-col p-6 bg-white rounded-lg border-2 border-[#7500ff] shadow-lg relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Gold</h3>
                <span className="text-xl font-bold">$1000+</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">All Silver tier benefits</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Large logo on team t-shirts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Logo on competition robot</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Featured in team presentations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-[#7500ff] mt-0.5" />
                  <span className="text-gray-500">Invitation to team events</span>
                </li>
              </ul>
              <Link href="#contact">
                <Button className="w-full bg-[#7500ff] hover:bg-[#7500ff]/90">Become a Gold Sponsor</Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Platinum Sponsor - $2500+</h3>
                <p className="text-gray-500">
                  For our premium sponsors, we offer custom partnership packages with maximum visibility and engagement.
                </p>
              </div>
              <Link href="#contact">
                <Button className="bg-black hover:bg-black/90 text-white">Contact for Details</Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              In-kind donations of equipment, services, or expertise are also greatly appreciated. Please contact us to
              discuss custom sponsorship arrangements.
            </p>
            <div className="mt-4">
  <Link
    href="/Sponsorship-Packet.pdf"
    download
    className="inline-flex items-center text-[#7500ff]"
  >
    <Download className="mr-1 h-4 w-4" />
    Download Sponsorship Packet
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Current Sponsors</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              We're grateful for the support of these organizations who make our work possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Become a Sponsor</h2>
              <p className="text-gray-400 md:text-lg/relaxed">
                Ready to support the next generation of innovators? Fill out the form and our sponsorship coordinator
                will get back to you within 48 hours.
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#7500ff]" />
                <span>centaurus29000@outlook.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <form
  action="https://formspree.io/f/movdkqoq"
  method="POST"
  className="grid gap-4"
>
  <div className="grid gap-2">
    <label htmlFor="name" className="text-sm font-medium">
      Company/Organization Name
    </label>
    <input
      id="name"
      name="name" // Added name attribute
      type="text"
      required
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-black border-gray-700"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="contact" className="text-sm font-medium">
      Contact Person
    </label>
    <input
      id="contact"
      name="contact" // Added name attribute
      type="text"
      required
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-black border-gray-700"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="email" className="text-sm font-medium">
      Email
    </label>
    <input
      id="email"
      name="email" // Added name attribute
      type="email"
      required
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-black border-gray-700"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="sponsorship" className="text-sm font-medium">
      Sponsorship Level of Interest
    </label>
    <select
      id="sponsorship"
      name="sponsorship" // Added name attribute
      required
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-black border-gray-700"
    >
      <option value="">Select a level</option>
      <option value="bronze">Bronze ($250+)</option>
      <option value="silver">Silver ($500+)</option>
      <option value="gold">Gold ($1000+)</option>
      <option value="platinum">Platinum ($2500+)</option>
      <option value="custom">Custom/In-kind</option>
    </select>
  </div>
  <div className="grid gap-2">
    <label htmlFor="message" className="text-sm font-medium">
      Message
    </label>
    <textarea
      id="message"
      name="message" // Added name attribute
      rows={4}
      required
      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-black border-gray-700"
    ></textarea>
  </div>
  <Button type="submit" className="bg-[#7500ff] hover:bg-[#7500ff]/90">
    Submit Inquiry
  </Button>
</form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
