import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Utils from "@/lib/utils";
import { format } from "date-fns";

const PostListItem = ({ post }) => {
  return (
    <Link href={`/blogs/${post.slug}`} className="block group">
      <Card className="rounded-xl overflow-hidden shadow-lg bg-card text-card-foreground transition-all group-hover:shadow-2xl border border-border">
        {/* Image */}
        {post.featured_image && (
          <div className="w-full">
            <Image
              src={post.featured_image}
              className="w-full object-cover aspect-[16/9] rounded-t-xl transition-transform duration-300 group-hover:scale-105"
              width="735"
              height="410"
              alt={post.title}
            />
          </div>
        )}

        {/* Post Details */}
        <CardContent className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {Utils.textTruncate(post.title, 80)}
          </h2>

          <p className="text-muted-foreground text-sm">
            {format(new Date(post.createdAt), "MM/dd/yyyy")} - {Utils.textTruncate(post.excerpt, 150)}
          </p>

          {/* Read More Button */}
          <Link href={`/blogs/${post.slug}`} className="mt-2 inline-block">
            <Button variant="ghost" className="py-2 px-3 text-primary-foreground flex items-center gap-1 hover:bg-primary/90 hover:text-background transition-all">
              <span>Read More</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostListItem;
