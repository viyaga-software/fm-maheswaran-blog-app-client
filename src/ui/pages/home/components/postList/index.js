import { getAllBlogs } from "@/lib/actions/blog";
import PostListItem from "./PostListItem";

const PostList = async () => {
  const page = 1;
  const pageLimit = 10;
  const fields = "title,subtitle,slug,excerpt,featured_image,views,comments_count,createdAt,blog_status";
  const filters = [{ field: "blog_status", operator: "$eq", value: "published" }];
  const pagination = { page, pageSize: pageLimit };

  const blogs = await getAllBlogs({ fields, filters, pagination, sort: "", revalidate: 60 * 60 * 24 * 365, tags: ["blogs"] });

  if (blogs?.error) {
    return <p className="text-red-500 text-center">An error occurred. Please try again later.</p>;
  }

  return (
    <div className="my-8">
      <h1 className="text-2xl text-gray-600 font-semibold mb-6">Recent Posts</h1>
      <div className="grid grid-cols-1 gap-6">
        {blogs?.data?.length > 0 ? (
          blogs.data.map((post, index) => (
            <PostListItem key={index} post={post} />
          ))
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostList;
