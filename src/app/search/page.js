"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const dummyPosts = Array.from({ length: 10 }, (_, i) => ({
  _id: i + 1,
  title: `Post Title ${i + 1}`,
  content: `This is a sample content for post ${i + 1}.`,
}));

const PostList = () => {
  return (
    <div>
      {dummyPosts.map((post) => (
        <div key={post._id} className="mb-4 p-4 border rounded-md">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <input type="text" className="w-full p-2 border rounded-md" placeholder="Search..." />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        {["newest", "popular", "trending", "oldest"].map((value) => (
          <label key={value} className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="sort" value={value} className="w-4 h-4 cursor-pointer" />
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </label>
        ))}
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        {["general", "web-design", "development", "databases", "seo", "marketing"].map((category) => (
          <span key={category} className="underline cursor-pointer">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
        ))}
      </div>
    </div>
  );
};

const page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">Development Blog</h1>
      <Button onClick={() => setOpen((prev) => !prev)} className="md:hidden" variant="default">
        {open ? "Close" : "Filter or Search"}
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 mt-4">
        <Card className="w-full">
          <CardContent className="p-4">
            <PostList />
          </CardContent>
        </Card>
        <Card className={`p-4 transition-all ${open ? "block" : "hidden"} md:block`}>
          <CardContent>
            <SideMenu />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
