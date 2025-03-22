"use client";

import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Search from "../../home/components/mainCategories/Search";
import Utils from "@/lib/utils";

const PostHeader = ({ data, isLoading }) => {
  return (
    <Card className="p-8 flex flex-col gap-6 shadow-lg rounded-xl bg-white">
      {isLoading ? (
        <Skeleton className="h-10 w-3/4 rounded-md" />
      ) : (
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          {data?.title}
        </h1>
      )}

      <div className="flex items-center gap-3 text-gray-500 text-sm">
        {isLoading ? (
          <Skeleton className="h-4 w-1/2 rounded-md" />
        ) : (
          <>
            <span>Written by</span>
            <Link href="/" className="text-blue-600 font-semibold">
              {data?.author.username}
            </Link>
            <span>on</span>
            <span>{Utils.getTimeAgo(data?.createdAt || "")}</span>
          </>
        )}
      </div>
      {isLoading ? (
        <Skeleton className="h-6 w-full rounded-md" />
      ) : (
        <p className="text-gray-600 font-medium">{data?.excerpt}</p>
      )}
    </Card>
  );
};

const BlogContent = ({ content, isLoading }) => {
  return (
    <div className="prose max-w-none text-gray-800 leading-relaxed text-lg">
      {isLoading ? (
        [...Array(6)].map((_, i) => <Skeleton key={i} className="h-6 w-full rounded-md" />)
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

const Sidebar = ({ data, isLoading }) => {
  return (
    <aside className="px-6 py-4 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Author</h2>
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
          <Skeleton className="h-4 w-20 rounded-md" />
        ) : (
          <Link href="/" className="text-blue-600 font-medium">
            {data?.author.username}
          </Link>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {isLoading ? <Skeleton className="h-4 w-full rounded-md" /> : "Chess enthusiast and blogger."}
      </p>
      <Separator className="my-6" />
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Search</h2>
      <Search />
    </aside>
  );
};

const SinglePost = ({ data }) => {
  const isLoading = !data;

  return (
    <div className="container mx-auto py-10 px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-2 flex flex-col gap-8">
        <PostHeader data={data} isLoading={isLoading} />
        <div className="w-full">
          {isLoading ? (
            <Skeleton className="h-[300px] w-full rounded-lg" />
          ) : (
            <Image
              src={data?.featured_image}
              width={800}
              height={400}
              className="rounded-lg shadow-md object-cover w-full"
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
