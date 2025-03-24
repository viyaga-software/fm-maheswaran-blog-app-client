import Link from "next/link";
import Image from "next/image";
import { getFeaturedBlogs } from "@/lib/strapi";
import Utils from "@/lib/utils";
import FeaturedPostCard from "./FeaturedPostCard";

const FeaturedPosts = async () => {
  const { data: posts, error } = await getFeaturedBlogs();

  if (error) {
    return <p className="text-red-500 text-center">Failed to load featured posts.</p>;
  }

  if (!posts || posts.length === 0) {
    return <p className="text-gray-500 text-center">No featured posts available.</p>;
  }

  return (
    <section className="mt-12 space-y-12">
      {/* Featured Post (Large Image) */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
        {posts[0].featured_image && (
          <Image
            src={posts[0].featured_image}
            layout="fill"
            objectFit="cover"
            className="rounded-xl transition-transform duration-300 hover:scale-105"
            alt={posts[0].title}
          />
        )}
        {/* Gradient Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {/* Text Overlay */}
        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm text-gray-300">{Utils.getTimeAgo(posts[0].createdAt)}</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            <Link href={`/${posts[0].slug}`} className="hover:text-primary transition">
              {posts[0].title}
            </Link>
          </h2>
          <p className="hidden md:block text-gray-300 text-sm mt-2">
            {Utils.textTruncate(posts[0].excerpt, 150)}
          </p>
        </div>
      </div>

      {/* Other Posts in Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <FeaturedPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
