import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Regional Competition Success",
      excerpt: "Our team placed in the top 5 at the regional competition, qualifying for nationals.",
      date: "September 20, 2024",
      readTime: "5 min read",
      category: "Competitions",
      image: "/regionals.jpg?height=200&width=400",
    },
    {
      id: 2,
      title: "Behind the Design: Nebula Robot",
      excerpt: "An in-depth look at the engineering process behind our latest competition robot.",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Engineering",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "Primary School Robotics Workshops",
      excerpt: "Recap of our recent outreach workshop and the skills we help develop.",
      date: "September 12, 2024",
      readTime: "4 min read",
      category: "Team Events",
      image: "/School.jpg?height=200&width=400",
    },
    {
      id: 4,
      title: "Raising Money for charity 'Oceana'",
      excerpt: "Our outreach team sold 3D printed items and fundraised AU$250 for the charity Oceana.",
      date: "October 24, 2024",
      readTime: "7 min read",
      category: "Outreach",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Community Outreach: Jacaranda Festival",
      excerpt: "Team Centaurus held a workshop at Brisbane's yearly Jacaranda Festival.",
      date: "Ocotober 24, 2024",
      readTime: "6 min read",
      category: "Outreach",
      image: "/Jacaranda.jpg?height=200&width=400",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Team Blog</h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
              Stay updated with the latest news, events, and insights from Team Centaurus.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Post</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                  src="/regionals.jpg?height=400&width=600"
                  alt="Featured post"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="inline-block px-3 py-1 bg-[#7500ff]/10 text-[#7500ff] rounded-full">Competitions</span>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>5 min read</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold">Regional Competition Success</h3>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our team placed in the top 5 at the regional competition, qualifying for nationals. This achievement
                represents months of hard work, dedication, and teamwork from every member of Team Centaurus.
              </p>
              <p className="text-gray-500 md:text-lg/relaxed">
                The competition was fierce, with over 30 teams showcasing their robots and competing in various
                challenges. Our robot, Nebula, performed exceptionally well in both autonomous and driver-controlled
                periods.
              </p>

              <div className="pt-4">
                <Link href="/blog/1">
                  <Button className="bg-[#7500ff] hover:bg-[#7500ff]/90">Read Full Article</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Latest Posts</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg/relaxed">
              Explore our recent articles, updates, and team stories.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {blogPosts.slice(1).map((post) => (
    <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="flex justify-center items-center aspect-video overflow-hidden">
  <Image
    src={article.image || "/placeholder.svg"}
    alt={article.title}
    width={400}
    height={200}
    className="w-full h-full object-cover transition-transform group-hover:scale-105"
  />
</div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <span className="inline-block px-2 py-0.5 bg-[#7500ff]/10 text-[#7500ff] rounded-full text-xs">
            {post.category}
          </span>
          <div className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            <span className="text-xs">{post.date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{post.excerpt}</p>
        <div className="mt-4">
          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-sm font-medium text-[#7500ff]"
          >
            Read more <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" className="border-[#7500ff] text-[#7500ff] hover:bg-[#7500ff]/10">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#7500ff]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white">Subscribe to Our Newsletter</h2>
              <p className="text-white/80 md:text-lg/relaxed">
                Stay updated with the latest news, events, and achievements from Team Centaurus. We send monthly updates
                about our competitions, outreach activities, and team progress.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="bg-black text-white hover:bg-black/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-white/60">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
