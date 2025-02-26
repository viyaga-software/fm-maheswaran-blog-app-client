"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const handleKeyPress = (e) => {
    // Handle search logic here
  };

  return (
    <div className="flex items-center gap-2 border rounded-full p-2 shadow-sm">
      <SearchIcon className="w-5 h-5 text-gray-500" />
      <Input
        type="text"
        placeholder="Search a post..."
        className="border-none focus:ring-0 bg-transparent"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;