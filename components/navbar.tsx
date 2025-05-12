"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BotIcon as Robot } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Replace the Robot icon with your logo */}
          <Image
            src="/logo.png" // Replace with the path to your logo
            alt="Centaurus Logo"
            width={32} // Adjust the width as needed
            height={32} // Adjust the height as needed
            className="h-8 w-8" // Optional: Add custom styling
          />
          <span className="font-bold text-xl">Centaurus</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#7500ff] transition-colors">
            Home
          </Link>
          <Link href="/team" className="text-sm font-medium hover:text-[#7500ff] transition-colors">
            Team
          </Link>
          <Link href="/robots" className="text-sm font-medium hover:text-[#7500ff] transition-colors">
            Robots
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-[#7500ff] transition-colors">
            Blog
          </Link>
          <Link href="/sponsorship" className="text-sm font-medium hover:text-[#7500ff] transition-colors">
            Sponsorship
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact">
            <Button className="bg-[#7500ff] hover:bg-[#7500ff]/90">Contact Us</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#7500ff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/team"
              className="text-sm font-medium hover:text-[#7500ff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/robots"
              className="text-sm font-medium hover:text-[#7500ff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Robots
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-[#7500ff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/sponsorship"
              className="text-sm font-medium hover:text-[#7500ff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsorship
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[#7500ff] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
