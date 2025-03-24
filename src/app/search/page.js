import { getRecentBlogs } from "@/lib/strapi";
import SearchPage from "@/components/pages/search";

const page = async ({ searchParams }) => {
  const { q, categories } = searchParams || {};
  const page = 1;
  const pageSize = 10;

  const blogs = await getRecentBlogs({ page, pageSize, q, categories });

  if (blogs?.error) {
    return <p className="text-red-500 text-center">An error occurred. Please try again later.</p>;
  }

  return (
    <SearchPage blogs={blogs.data} />
  );
};

export default page;
