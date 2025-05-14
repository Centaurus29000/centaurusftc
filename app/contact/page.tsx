import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Have questions or want to get in touch? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Contact Information */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter">Become a Sponsor</h2>
        <p className="text-gray-400 md:text-lg/relaxed">
          Ready to support the next generation of innovators? Fill out the form and our sponsorship coordinator will get
          back to you within 48 hours.
        </p>
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-[#7500ff]" />
          <span>centaurus29000@outlook.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-5 w-5 text-[#7500ff]" />
          <span>+61 481 429 050</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-[#7500ff]" />
          <span>Brisbane, Queensland, Australia</span>
        </div>
      </div>

      {/* Sponsorship Form */}
      <div className="space-y-4">
        <form
          action="https://formspree.io/f/movdkqoq"
          method="POST"
          className="grid gap-4"
        >
          {/* Company/Organization Name */}
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Company/Organization Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff]"
            />
          </div>

          {/* Contact Person */}
          <div className="grid gap-2">
            <label htmlFor="contact" className="text-sm font-medium">
              Contact Person
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff]"
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff]"
            />
          </div>
          {/* Message */}
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="flex w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7500ff]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7500ff] hover:bg-[#7500ff]/90 text-white py-2 px-4 rounded-md"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}