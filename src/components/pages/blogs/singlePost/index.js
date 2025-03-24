"use client";

import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import BlogContent from "./components/blog-content";
import Utils from "@/lib/utils";
import { format } from "date-fns";
import Search from "../../home/components/main-categories/Search";

const PostHeader = ({ data }) => {
  return (
    <div className="pb-6 border-b border-border">
      <h1 className="text-5xl font-bold text-foreground leading-tight font-merriweather">
        {data.title}
      </h1>
      <div className="flex items-center justify-between gap-3 text-muted-foreground text-sm mt-4">
        <div>
          <span>by</span>
          <Link href="/" className="text-primary font-semibold ml-3">
            {Utils.textCapitalize(data.author.username)}
          </Link>
        </div>
        <span>{format(new Date(data.createdAt), "MM/dd/yyyy")}</span>
      </div>
    </div>
  );
};

const Sidebar = ({ data }) => {
  return (
    <aside className="p-6 border-l border-border bg-card rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-foreground mb-4 font-merriweather">Author</h2>
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={data.author.img} />
          <AvatarFallback>{data.author.username[0]}</AvatarFallback>
        </Avatar>
        <Link href="/" className="text-primary font-medium">
          {data.author.username}
        </Link>
      </div>
      <p className="text-sm text-muted-foreground mt-3 font-inter">Chess enthusiast and blogger.</p>
      <Separator className="my-6" />
      <h2 className="text-xl font-semibold text-foreground mb-4 font-merriweather">Search</h2>
      <Search />
    </aside>
  );
};

const SinglePost = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 flex flex-col gap-10">
        <PostHeader data={data} />
        <div className="w-full">
          <Image
            src={data.featured_image}
            width={1200}
            height={600}
            className="rounded-xl object-cover w-full shadow-md"
            alt="Featured Image"
          />
        </div>
        <BlogContent content={data.free_content} />
        <BlogContent content={data.content} />
      </div>
      <Sidebar data={data} />
    </div>
  );
};

export default SinglePost;
