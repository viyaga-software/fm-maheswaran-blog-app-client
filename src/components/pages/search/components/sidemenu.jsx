"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "General", href: "/category/general" },
  { name: "Chess News", href: "/category/chess-news" },
  { name: "Tournaments", href: "/category/tournaments" },
  { name: "Strategy", href: "/category/strategy" },
  { name: "Openings", href: "/category/openings" },
  { name: "Endgames", href: "/category/endgames" },
];

const SideMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", query);
      // Implement search logic
    }
  };

  return (
    <aside className="p-6 bg-card text-card-foreground rounded-2xl shadow-lg relative">
      {/* Search Bar */}
      <h2 className="text-lg font-semibold mb-4">Search</h2>
      <div className="relative">
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

      {/* Categories */}
      <h2 className="mt-6 text-lg font-semibold">Categories</h2>
      <div className="flex flex-col gap-2 mt-2">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            asChild
            className="text-primary hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Link href={category.href}>{category.name}</Link>
          </Button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 rounded-lg text-primary hover:bg-accent hover:text-accent-foreground transition-all absolute top-4 right-4"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>
    </aside>
  );
};

export default SideMenu;
