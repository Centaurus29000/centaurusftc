import { blogPosts } from "@/app/data/blogData";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="mx-auto max-w-3xl space-y-6"> {/* Centered and limited width */}
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>Written by {post.author}</span>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="relative w-full h-[400px] md:h-[600px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="text-gray-700 space-y-4 md:text-lg/relaxed">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}