import { format } from "timeago.js";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedPostCard = ({ post, sNo }) => {
  return (
    post && (
      <Card className="flex gap-4 p-4">
        {post.img && (
          <div className="w-1/3 aspect-video">
            <Image
              src={post.img}
              className="rounded-xl object-cover w-full h-full"
              width="298"
              height="250"
              alt={"Image of " + post.title}
            />
          </div>
        )}
        <CardContent className="w-2/3 flex flex-col gap-2">
          <div className="flex items-center gap-4 text-sm lg:text-base mb-2">
            <h1 className="font-semibold">0{sNo}.</h1>
            <Link href="/" className="text-blue-800">
              {post.category}
            </Link>
            <span className="text-gray-500 text-sm">{format(post.createdAt)}</span>
          </div>
          <Link
            href={post.slug}
            className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
          >
            {post.title}
          </Link>
        </CardContent>
      </Card>
    )
  );
};

export default FeaturedPostCard;
