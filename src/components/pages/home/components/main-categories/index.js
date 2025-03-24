"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Search from "./Search";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "All Posts", href: "/categories" },
  { name: "Openings", href: "/categories/openings" },
  { name: "Middle Game", href: "/categories/middle-game" },
  { name: "Endgame", href: "/categories/endgame" },
  { name: "Tactics", href: "/categories/tactics" },
];

const MainCategories = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-card text-card-foreground rounded-2xl xl:rounded-full p-4 shadow-lg flex items-center justify-between w-full max-w-5xl mx-auto">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap items-center gap-4">
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

      {/* Divider */}
      <span className="hidden md:block text-muted-foreground">|</span>

      {/* Search Bar */}
      <div className="hidden md:block">
        <Search />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg text-primary hover:bg-accent hover:text-accent-foreground transition-all"
        onClick={() => setMobileMenuOpen(true)}
      >
        <MenuIcon className="w-6 h-6 text-background" />
      </button>

      {/* Search Bar */}
      <div className="md:hidden">
        <Search />
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-card shadow-lg rounded-lg p-4 flex flex-col gap-3 md:hidden">
          {/* Close Button */}
          <button
            className="self-end p-2 rounded-lg bg-primary hover:bg-accent transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XIcon className="w-6 h-6 text-background" />
          </button>

          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              asChild
              className="text-primary hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Link href={category.href} onClick={() => setMobileMenuOpen(false)}>
                {category.name}
              </Link>
            </Button>
          ))}
          <Search />
        </div>
      )}
    </div>
  );
};

export default MainCategories;
