import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/app/data/blogData"; // Adjust the import path as necessary
import { ChevronRight, Award, Users, BotIcon as Robot, FileText, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  CENTAURUS <span className="text-[#7500ff]">ROBOTICS</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Innovating, building, and competing in the FIRST Tech Challenge. Join us as we engineer the future.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/team">
                  <Button className="bg-[#7500ff] hover:bg-[#7500ff]/90">
                    Meet Our Team <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/sponsorship">
                  <Button variant="outline" className="text-black border-white hover:bg-white/90">
                    Become a Sponsor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="/ChironBot.png"
                  alt="Centaurus Robot"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Centaurus is more than just a robotics team. We're a community of innovators, problem-solvers, and
                future engineers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <div className="p-2 bg-[#7500ff]/10 rounded-full">
                <Robot className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Robotics</h3>
              <p className="text-sm text-center text-gray-500">
                Design, build, and program competitive robots for FIRST Tech Challenge.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <div className="p-2 bg-[#7500ff]/10 rounded-full">
                <Users className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Teamwork</h3>
              <p className="text-sm text-center text-gray-500">
                Collaborate with diverse talents to achieve common goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <div className="p-2 bg-[#7500ff]/10 rounded-full">
                <Award className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Competition</h3>
              <p className="text-sm text-center text-gray-500">
                Participate in regional and national FIRST Tech Challenge events.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg">
              <div className="p-2 bg-[#7500ff]/10 rounded-full">
                <HeartHandshake className="h-6 w-6 text-[#7500ff]" />
              </div>
              <h3 className="text-xl font-bold">Outreach</h3>
              <p className="text-sm text-center text-gray-500">
                Inspire the next generation of STEM leaders in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Latest News Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest News</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Stay updated with our team's achievements and upcoming events.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-6xl items-stretch gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by date (newest first)
        .slice(0, 3) // Take the latest 3 posts
        .map((post) => (
          <div
            key={post.id}
            className="group relative overflow-hidden rounded-lg border border-gray-800 bg-[#1a1a1a] h-[400px]"
          >
            {/* Image Section */}
            <div className="aspect-video overflow-hidden flex items-center justify-center">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={150}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col h-full relative z-10">
              {/* Title and Excerpt */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white line-clamp-1">{post.title}</h3>
                <p className="text-sm text-white overflow-hidden max-h-[3.6rem]">{post.excerpt}</p>
              </div>
              {/* Read More Section */}
              <div className="mt-16 flex items-center text-sm text-[#7500ff]">
                <FileText className="mr-1 h-4 w-4" />
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className="flex justify-center">
      <Link href="/blog">
        <Button variant="outline" className="border-white text-black hover:bg-white/90">
          View All Posts
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#7500ff]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Support Our Team</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Help us continue to innovate and compete at the highest levels. Your sponsorship makes a difference.
              </p>
            </div>
            <Link href="/sponsorship">
              <Button className="bg-white text-[#7500ff] hover:bg-white/90">Become a Sponsor</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}