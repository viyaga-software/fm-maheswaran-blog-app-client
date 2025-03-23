import { Skeleton } from '@/components/ui/skeleton';

const BlogContent = ({ content, isLoading }) => {
    return (
      <div className="prose prose-invert lg:prose-xl mx-auto text-foreground leading-relaxed text-lg font-inter p-4 blog-content">
        {isLoading ? (
          [...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-6 w-full rounded-lg mb-2" />
          ))
        ) : (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        )}
      </div>
    );
  };

export default BlogContent;
