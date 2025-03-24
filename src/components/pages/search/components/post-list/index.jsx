import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const PostList = ({ blogs }) => {
    return (
      <div className="blog-content">
        {blogs.map((post) => (
          <Card key={post.id} className="mb-6">
            <CardContent className="p-6">
              <Image
                src={post.featured_image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
              <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
              <p className="text-muted-foreground mt-2">{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="text-primary underline mt-4 inline-block">Read more →</a>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

export default PostList;