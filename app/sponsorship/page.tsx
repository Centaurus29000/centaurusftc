import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Mail, Download, Users, Trophy, Rocket, Heart } from "lucide-react"

export default function SponsorshipPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
                    name="name"
                    type="text"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff] focus-visible:ring-offset-2 bg-black border-gray-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="contact" className="text-sm font-medium">
                    Contact Person
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff] focus-visible:ring-offset-2 bg-black border-gray-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff] focus-visible:ring-offset-2 bg-black border-gray-700"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="sponsorship" className="text-sm font-medium">
                    Sponsorship Level of Interest
                  </label>
                  <select
                    id="sponsorship"
                    name="sponsorship"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff] focus-visible:ring-offset-2 bg-black border-gray-700"
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
                    name="message"
                    rows={4}
                    required
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff] focus-visible:ring-offset-2 bg-black border-gray-700"
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
