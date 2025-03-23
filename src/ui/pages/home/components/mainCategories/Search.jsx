"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", query);
      // Implement actual search logic here (e.g., router push, API call, etc.)
    }
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      <SearchIcon className="absolute left-4 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Search posts..."
        className="w-full pl-12 pr-4 py-2 bg-muted text-foreground border border-border rounded-full focus:border-primary focus:ring-2 focus:ring-ring transition-all"
      />
    </div>
  );
};

export default Search;
