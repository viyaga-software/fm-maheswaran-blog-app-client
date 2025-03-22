import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Utils from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const FeaturedPostCard = ({ post, sNo }) => {
  return (
    <Link href={`/${post.slug}`}>
      <Card className="flex flex-col md:flex-row gap-4 p-4 border rounded-xl transition bg-white">
        {post.featured_image && (
          <div className="w-full md:w-1/3 h-40 relative overflow-hidden rounded-lg">
            <Image
              src={post.featured_image}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              alt={post.title}
            />
          </div>
        )}
        <CardContent className="w-full md:w-2/3 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Badge variant="secondary">0{sNo}</Badge>
            <span>{Utils.getTimeAgo(post.createdAt)}</span>
          </div>
          <h2 className="text-lg font-semibold hover:text-blue-600 transition">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm">{Utils.textTruncate(post.excerpt, 80)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeaturedPostCard;
