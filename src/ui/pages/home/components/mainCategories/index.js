import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden lg:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Button asChild>
          <Link href="/posts">All Posts</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/posts?cat=web-design">Web Design</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/posts?cat=development">Development</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/posts?cat=databases">Databases</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/posts?cat=seo">Search Engines</Link>
        </Button>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default MainCategories;
