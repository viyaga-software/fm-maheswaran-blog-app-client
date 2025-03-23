import Link from "next/link";
import Image from "next/image";
import Utils from "@/lib/utils";

const FeaturedPostCard = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className="block group">
      <div className="flex gap-5 items-start p-4 bg-secondary rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
        {/* Image Thumbnail */}
        {post.featured_image && (
          <div className="w-28 h-20 md:w-36 md:h-24 overflow-hidden rounded-lg relative">
            <Image
              src={post.featured_image}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              alt={post.title}
            />
          </div>
        )}
        {/* Post Details */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">{Utils.getTimeAgo(post.createdAt)}</span>
          <h2 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm">{Utils.textTruncate(post.excerpt, 90)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPostCard;
