import Image from "next/image";
import Link from "next/link";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      {post.featured_image && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image src={post.featured_image} className="rounded-2xl object-cover" width="735" height="735" alt="" />
        </div>
      )}
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link href={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" href={`/posts?author=${post.user?.username}`}>{post.user?.username}</Link>
          <span>on</span>
          <Link href={`/${post.slug}`} className="text-blue-800">{post.category}</Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.excerpt}</p>
        <Link href={`/${post.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
