import Link from "next/link"
import { BotIcon as Robot, Mail, Phone, MapPin, Github, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-black text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Robot className="h-6 w-6 text-[#7500ff]" />
              <span className="font-bold text-xl">Centaurus</span>
            </div>
            <p className="text-sm text-gray-400">
              A FIRST Tech Challenge robotics team dedicated to innovation, learning, and competition.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-sm text-gray-400 hover:text-[#7500ff] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/robots" className="text-sm text-gray-400 hover:text-[#7500ff] transition-colors">
                  Our Robots
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-[#7500ff] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-sm text-gray-400 hover:text-[#7500ff] transition-colors">
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="h-4 w-4 text-[#7500ff]" />
                <span>centaurus29000@outlook.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="h-4 w-4 text-[#7500ff]" />
                <span>+61 481 429 050</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 text-[#7500ff]" />
                <span>Brisbane, Queensland, Australia</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#7500ff] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7500ff] transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7500ff] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#7500ff] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Centaurus Robotics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
