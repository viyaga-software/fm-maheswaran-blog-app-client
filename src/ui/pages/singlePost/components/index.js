"use client";

import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Search from "../../home/components/mainCategories/Search";
import Utils from "@/lib/utils";
import BlogContent from "./blog-content";

const PostHeader = ({ data, isLoading }) => {
  return (
    <div className="pb-6 border-b border-border">
      {isLoading ? (
        <Skeleton className="h-12 w-3/4 rounded-lg" />
      ) : (
        <h1 className="text-5xl font-bold text-foreground leading-tight font-merriweather">
          {data?.title}
        </h1>
      )}

      <div className="flex items-center gap-3 text-muted-foreground text-sm mt-4">
        {isLoading ? (
          <Skeleton className="h-4 w-1/2 rounded-lg" />
        ) : (
          <>
            <span>by</span>
            <Link href="/" className="text-primary font-semibold">
              {data?.author.username}
            </Link>
            <span>• {Utils.getTimeAgo(data?.createdAt || "")}</span>
          </>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({ data, isLoading }) => {
  return (
    <aside className="p-6 border-l border-border bg-card rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-foreground mb-4 font-merriweather">Author</h2>
      <div className="flex items-center gap-4">
        {isLoading ? (
          <Skeleton className="w-12 h-12 rounded-full" />
        ) : (
          <Avatar>
            <AvatarImage src={data?.author.img} />
            <AvatarFallback>{data?.author.username[0]}</AvatarFallback>
          </Avatar>
        )}
        {isLoading ? (
          <Skeleton className="h-4 w-20 rounded-lg" />
        ) : (
          <Link href="/" className="text-primary font-medium">
            {data?.author.username}
          </Link>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-3 font-inter">
        {isLoading ? <Skeleton className="h-4 w-full rounded-lg" /> : "Chess enthusiast and blogger."}
      </p>
      <Separator className="my-6" />
      <h2 className="text-xl font-semibold text-foreground mb-4 font-merriweather">Search</h2>
      <Search />
    </aside>
  );
};

const SinglePost = ({ data }) => {
  const isLoading = !data;

  return (
    <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 flex flex-col gap-10">
        <PostHeader data={data} isLoading={isLoading} />
        <div className="w-full">
          {isLoading ? (
            <Skeleton className="h-[400px] w-full rounded-xl" />
          ) : (
            <Image
              src={data?.featured_image}
              width={1200}
              height={600}
              className="rounded-xl object-cover w-full shadow-md"
              alt="Featured Image"
            />
          )}
        </div>
        <BlogContent content={data?.free_content} isLoading={isLoading} />
        <BlogContent content={data?.content} isLoading={isLoading} />
      </div>
      <Sidebar data={data} isLoading={isLoading} />
    </div>
  );
};

export default SinglePost;