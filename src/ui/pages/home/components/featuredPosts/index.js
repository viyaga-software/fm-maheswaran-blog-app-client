import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FeaturedPostCard from "./FeaturedPostCard";
import { getFeaturedBlogs } from "@/lib/strapi";
import Utils from "@/lib/utils";
import { Button } from "@/components/ui/button";


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
      <Card className="w-full lg:w-1/2 shadow-xl border rounded-2xl overflow-hidden">
        <CardContent className="flex flex-col gap-5 p-5">
          {posts[0].featured_image && (
            <Image
              src={posts[0].featured_image}
              className="rounded-2xl object-cover w-full"
              width={900}
              height={450}
              alt={posts[0].title}
            />
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
          <p className="text-gray-600">{posts[0].excerpt}</p>
          <Button variant="outline" asChild>
            <Link href={`/${posts[0].slug}`}>Read More</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        {posts.slice(1).map((post, index) => (
          <FeaturedPostCard key={post.id} post={post} sNo={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
