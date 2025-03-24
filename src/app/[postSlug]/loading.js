"use client";

import { Skeleton } from "@/components/ui/skeleton";

const LoadingHeader = () => (
  <div className="pb-6 border-b border-border">
    <Skeleton className="h-12 w-3/4 rounded-lg" />
    <div className="flex items-center gap-3 text-muted-foreground text-sm mt-4">
      <Skeleton className="h-4 w-1/2 rounded-lg" />
    </div>
  </div>
);

const LoadingSidebar = () => (
  <aside className="p-6 border-l border-border bg-card rounded-xl shadow-lg">
    <h2 className="text-xl font-semibold text-foreground mb-4 font-merriweather">Author</h2>
    <div className="flex items-center gap-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <Skeleton className="h-4 w-20 rounded-lg" />
    </div>
    <p className="text-sm text-muted-foreground mt-3 font-inter">
      <Skeleton className="h-4 w-full rounded-lg" />
    </p>
    <Skeleton className="h-4 w-1/2 rounded-lg my-6" />
    <h2 className="text-xl font-semibold text-foreground mb-4 font-merriweather">Search</h2>
    <Skeleton className="h-10 w-full rounded-lg" />
  </aside>
);

const Loading = () => (
  <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
    <div className="md:col-span-2 flex flex-col gap-10">
      <LoadingHeader />
      <Skeleton className="h-[400px] w-full rounded-xl" />
      <Skeleton className="h-6 w-3/4 rounded-lg" />
      <Skeleton className="h-6 w-full rounded-lg" />
    </div>
    <LoadingSidebar />
  </div>
);

export default Loading;