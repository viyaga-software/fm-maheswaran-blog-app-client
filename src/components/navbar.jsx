"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-4 font-bold text-2xl">
                <img src="/logo.png" className="w-8 h-8" alt="Logo" />
                <span>FM Mahesh</span>
            </div>
            
            {/* MOBILE MENU */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="flex flex-col gap-[5.4px] cursor-pointer" onClick={() => setOpen(!open)}>
                            <div className={`h-[3px] bg-black w-6 rounded-md transition-all ease-in-out origin-left ${open && "rotate-45"}`}></div>
                            <div className={`h-[3px] bg-black w-6 rounded-md transition-all ease-in-out ${open && "opacity-0"}`}></div>
                            <div className={`h-[3px] bg-black w-6 rounded-md transition-all ease-in-out origin-left ${open && "-rotate-45"}`}></div>
                        </button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-center justify-center gap-8 font-medium text-xl bg-[#e6e6ff]">
                        <Link href="/">Home</Link>
                        <Link href="/posts?sort=trending">Trending</Link>
                        <Link href="/posts?sort=popular">Most Popular</Link>
                        <Link href="/posts?sort=popular">About</Link>
                        <Link href="/login">
                            <Button>Login 👋</Button>
                        </Link>
                    </SheetContent>
                </Sheet>
            </div>
            
            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link href="/">Home</Link>
                <Link href="/posts?sort=trending">Trending</Link>
                <Link href="/posts?sort=popular">Most Popular</Link>
                <Link href="/posts?sort=popular">About</Link>
                <Link href="/login">
                    <Button>Login 👋</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
