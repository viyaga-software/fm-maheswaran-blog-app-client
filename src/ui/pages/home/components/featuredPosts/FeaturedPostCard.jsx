import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Utils from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const FeaturedPostCard = ({ post, sNo }) => {
  return (
    <Link href={`/${post.slug}`}>
      <Card className="flex gap-6 p-5 shadow-lg border rounded-xl hover:shadow-xl transition">
        {post.featured_image && (
          <div className="w-1/3 relative aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={post.featured_image}
              className="w-full h-full"
              fill
              alt={post.title}
            />
          </div>
        )}
        <CardContent className="w-2/3 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Badge variant="secondary">0{sNo}</Badge>
            <span>{Utils.getTimeAgo(post.createdAt)}</span>
          </div>
          <h2
            className="text-lg font-semibold hover:text-blue-600 transition"
          >
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm">{Utils.textTruncate(post.excerpt, 80)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeaturedPostCard;
