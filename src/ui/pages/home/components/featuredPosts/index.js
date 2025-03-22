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
    <div className="mt-10 space-y-12">
      {/* Featured Post (Large Image) */}
      <div className="relative">
        {posts[0].featured_image && (
          <div className="w-full h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-lg">
            <Image
              src={posts[0].featured_image}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 hover:scale-105"
              alt={posts[0].title}
            />
          </div>
        )}
        <div className="absolute bottom-5 left-5 bg-black bg-opacity-60 text-white p-4 rounded-lg">
          <span className="text-sm">{Utils.getTimeAgo(posts[0].createdAt)}</span>
          <h2 className="text-xl md:text-2xl font-bold mt-2">
            <Link href={`/${posts[0].slug}`} className="hover:text-gray-300 transition">
              {posts[0].title}
            </Link>
          </h2>
          <p className="hidden md:block text-sm mt-1">{Utils.textTruncate(posts[0].excerpt, 150)}</p>
        </div>
      </div>

      {/* Other Posts in List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <FeaturedPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
    
