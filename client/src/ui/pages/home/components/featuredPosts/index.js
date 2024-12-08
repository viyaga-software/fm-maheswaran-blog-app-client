import { format } from "timeago.js";
import Link from "next/link";
import Image from "next/image";
import FeaturedPostCard from "./FeaturedPostCard";

const FeaturedPosts = () => {

  const posts = [
    { title: "chess", img: "/images/puzzle.jpg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "chess", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "chess", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
    { title: "chess", img: "/images/featured.jpeg", category: "End Games", createdAt: "05/12/2024", slug: "080905" },
  ];

  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {posts[0].img && <Image
          src={posts[0].img}
          className="rounded-3xl object-cover"
          width="895"
          height="400" alt=""
        />}
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link href="/" alt="" className="text-blue-800 lg:text-lg">{posts[0].category}</Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>
        {/* title */}
        <Link
          href={posts[0].slug}
          alt="" 
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        {posts.slice(1).map((post, index) => 
          <FeaturedPostCard key={index} post={post} />
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;
