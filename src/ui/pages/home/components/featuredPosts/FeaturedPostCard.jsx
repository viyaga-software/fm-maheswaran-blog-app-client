import Link from "next/link";
import Image from "next/image";
import Utils from "@/lib/utils";

const FeaturedPostCard = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className="block group">
      <div className="flex gap-6 items-start transition-all">
        {post.featured_image && (
          <div className="w-32 h-24 md:w-40 md:h-28 overflow-hidden rounded-lg">
            <Image
              src={post.featured_image}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              alt={post.title}
            />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{Utils.getTimeAgo(post.createdAt)}</span>
          <h2 className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm">{Utils.textTruncate(post.excerpt, 90)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
