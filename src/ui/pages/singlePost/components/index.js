"use client";

import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Search from "../../home/components/mainCategories/Search";
import Utils from "@/lib/utils";

const PostHeader = ({ data, isLoading }) => {
  return (
    <Card className="p-6 flex gap-8 shadow-md">
      <div className="lg:w-3/5 flex flex-col gap-6">
        {isLoading ? (
          <Skeleton className="h-10 w-3/4 rounded-md" />
        ) : (
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data?.title}
          </h1>
        )}

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          {isLoading ? (
            <Skeleton className="h-4 w-1/2 rounded-md" />
          ) : (
            <>
              <span>Written by</span>
              <Link href="/" className="text-blue-800">
                {data?.user.username}
              </Link>
              <span>on</span>
              <Link href="/" className="text-blue-800">
                {data?.category}
              </Link>
              <span>{Utils.getTimeAgo(data?.createdAt || "")}</span>
            </>
          )}
        </div>

        {isLoading ? <Skeleton className="h-6 w-full rounded-md" /> : <p className="text-gray-500 font-medium">{data?.desc}</p>}
      </div>
      {isLoading ? (
        <Skeleton className="hidden lg:block w-2/5 h-[250px] rounded-2xl" />
      ) : (
        data?.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} width="600" height="600" className="rounded-2xl object-cover" alt="Blog Image" />
          </div>
        )
      )}
    </Card>
  );
};

const AuthorSection = ({ data, isLoading }) => {
  return (
    <Card className="p-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        {isLoading ? (
          <Skeleton className="w-12 h-12 rounded-full" />
        ) : (
          <Avatar>
            <AvatarImage src={data?.user.img} />
            <AvatarFallback>{data?.user.username[0]}</AvatarFallback>
          </Avatar>
        )}
        {isLoading ? (
          <Skeleton className="h-4 w-20 rounded-md" />
        ) : (
          <Link href="/" className="text-blue-800">
            {data?.user.username}
          </Link>
        )}
      </div>
      <p className="text-sm text-gray-500">
        {isLoading ? <Skeleton className="h-4 w-full rounded-md" /> : "Chess enthusiast and blogger"}
      </p>
    </Card>
  );
};

const Sidebar = ({ data, isLoading }) => {
  return (
    <div className="px-4 h-max sticky top-8 w-full md:w-1/4">
      <h1 className="mb-4 text-sm font-medium">Author</h1>
      <AuthorSection data={data} isLoading={isLoading} />
      <Separator className="my-6" />
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
    </div>
  );
};

const SinglePost = ({ data }) => {
  const isLoading = !!data;

  return (
    <div className="flex flex-col gap-8">
      <PostHeader data={data} isLoading={isLoading} />
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          {isLoading
            ? [...Array(6)].map((_, i) => <Skeleton key={i} className="h-6 w-full rounded-md" />)
            : "Lorem ipsum content here..."}
        </div>
        <Sidebar data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default SinglePost;
