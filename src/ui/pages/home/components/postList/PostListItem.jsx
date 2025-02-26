import Image from "next/image";
import Link from "next/link";
import { format } from "timeago.js";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PostListItem = ({ post }) => {
  return (
    <Card className="flex flex-col xl:flex-row gap-8 mb-12 p-6 shadow-sm">
      {/* Image */}
      {post.featured_image && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={post.featured_image}
            className="rounded-2xl object-cover"
            width="735"
            height="735"
            alt={post.title}
          />
        </div>
      )}
      {/* Details */}
      <CardContent className="flex flex-col gap-4 xl:w-2/3">
        <Link href={`/${post.slug}`} className="text-4xl font-semibold hover:text-primary transition-colors">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Written by</span>
          <Link className="text-primary font-medium" href={`/posts?author=${post.user?.username}`}>
            {post.user?.username}
          </Link>
          <span>on</span>
          <Link href={`/${post.slug}`} className="text-primary font-medium">
            {post.category}
          </Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p className="text-gray-700">{post.excerpt}</p>
        <Link href={`/${post.slug}`}>
          <Button variant="link" className="p-0 text-primary">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostListItem;
