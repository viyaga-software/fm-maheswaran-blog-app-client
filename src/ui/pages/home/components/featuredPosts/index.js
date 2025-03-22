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
    <div className="mt-10 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/3 border border-gray-200 rounded-2xl overflow-hidden bg-white">
        <div className="flex flex-col gap-5 p-5">
          {posts[0].featured_image && (
            <div className="w-full h-48 md:h-56 lg:h-64 relative overflow-hidden rounded-xl">
              <Image
                src={posts[0].featured_image}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transition-transform duration-300 hover:scale-105"
                alt={posts[0].title}
              />
            </div>
          )}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span>{Utils.getTimeAgo(posts[0].createdAt)}</span>
            <span>•</span>
            <span>{posts[0].views} Views</span>
            <span>•</span>
            <span>{posts[0].comments_count} Comments</span>
          </div>
          <Link
            href={`/${posts[0].slug}`}
            className="text-2xl font-bold hover:text-blue-600 transition"
          >
            {posts[0].title}
          </Link>
          <p className="text-gray-600">{Utils.textTruncate(posts[0].excerpt, 220)}</p>
          <Link
            href={`/${posts[0].slug}`}
            className="inline-block mt-3 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {posts.slice(1).map((post, index) => (
          <FeaturedPostCard key={post.id} post={post} sNo={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
        
