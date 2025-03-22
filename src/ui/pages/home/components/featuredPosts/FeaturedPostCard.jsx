import Link from "next/link";
import Image from "next/image";
import Utils from "@/lib/utils";

const FeaturedPostCard = ({ post, sNo }) => {
  return (
    <Link href={`/${post.slug}`} className="block group">
      <div className="flex flex-col md:flex-row gap-6 p-4 border border-gray-200 rounded-xl transition hover:bg-gray-50">
        {post.featured_image && (
          <div className="w-full md:w-1/3 h-40 relative overflow-hidden rounded-lg">
            <Image
              src={post.featured_image}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              alt={post.title}
            />
          </div>
        )}
        <div className="w-full md:w-2/3 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md font-medium">
              {sNo}
            </span>
            <span>{Utils.getTimeAgo(post.createdAt)}</span>
          </div>
          <h2 className="text-lg font-semibold group-hover:text-blue-600 transition">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm">{Utils.textTruncate(post.excerpt, 80)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
