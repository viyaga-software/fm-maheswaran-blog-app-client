import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Utils from "@/lib/utils";
import { format } from "date-fns";

const PostListItem = ({ post }) => {
  return (
    <Link href={`/${post.slug}`} className="block group">
      <Card className="rounded-2xl overflow-hidden shadow-lg bg-white transition-all group-hover:shadow-xl">
        {/* Image */}
        {post.featured_image && (
          <div className="w-full">
            <Image
              src={post.featured_image}
              className="w-full object-cover aspect-[16/9] transition-transform group-hover:scale-105"
              width="735"
              height="410"
              alt={post.title}
            />
          </div>
        )}

        {/* Details */}
        <CardContent className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {Utils.textTruncate(post.title, 80)}
          </h2>

          <p className="text-gray-600 text-sm">
            {format(new Date(post.createdAt), "MM/dd/yyyy")} - {Utils.textTruncate(post.excerpt, 200)}
          </p>

          <Button variant="link" className="p-0 text-primary flex items-center gap-1">
            Read More <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostListItem;
