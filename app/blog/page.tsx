import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/app/data/blogData"; // Adjust the import path as necessary

export default function BlogPage() {
  // Define the featured post ID
  const featuredPostId = 1; // Change this ID to dynamically select a featured post
  const featuredPost = blogPosts.find((post) => post.id === featuredPostId);

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
      {featuredPost && (
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Featured Post</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="inline-block px-3 py-1 bg-[#7500ff]/10 text-[#7500ff] rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold">{featuredPost.title}</h3>
                <p className="text-gray-500 md:text-lg/relaxed">{featuredPost.excerpt}</p>

                <div className="pt-4">
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-[#7500ff] hover:bg-[#7500ff]/90">Read Full Article</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
      {blogPosts
        .filter((post) => post.id !== featuredPostId) // Exclude the featured post
        .map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group relative overflow-hidden rounded-lg border bg-white block"
          >
            <div className="flex justify-center items-center aspect-video overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
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
              <div className="mt-4 inline-flex items-center text-sm font-medium text-[#7500ff]">
                Read more <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
    </div>

    <div className="flex justify-center mt-10">
      <Button variant="outline" className="border-[#7500ff] text-[#7500ff] hover:bg-[#7500ff]/10">
        Load More Posts
      </Button>
    </div>
  </div>
</section>
    </div>
  );
}