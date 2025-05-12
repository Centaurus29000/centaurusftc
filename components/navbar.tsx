"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, BotIcon as Robot } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/robots", label: "Robots" },
    { href: "/blog", label: "Blog" },
    { href: "/sponsorship", label: "Sponsorship" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-[1.5px] border-b-gray-200 dark:border-b-gray-800 bg-background shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 select-none cursor-default">
          <Robot className="h-6 w-6 text-[#7500ff]" />
          <span className="font-bold text-xl">#29000</span>
        </div>
        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium px-4 transition-colors hover:text-[#7500ff] ${
                (pathname === href || (href !== "/" && pathname.startsWith(href)))
                  ? "underline underline-offset-8 decoration-2 text-[#7500ff]"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
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
