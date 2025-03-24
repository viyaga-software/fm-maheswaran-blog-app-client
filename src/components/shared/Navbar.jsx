"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-12 lg:px-16 
        bg-gradient-to-r from-indigo-500/80 via-purple-500/80 to-pink-500/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 font-bold text-xl md:text-2xl text-white">
                <img src="/logo.png" className="w-10 h-10" alt="Logo" />
                <span>FM Mahesh</span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <button
                            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-all"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col items-start p-6 gap-6 font-medium text-lg bg-white shadow-lg">
                        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/posts?sort=trending" onClick={() => setOpen(false)}>Trending</Link>
                        <Link href="/posts?sort=popular" onClick={() => setOpen(false)}>Most Popular</Link>
                        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                        <Link href="/login" onClick={() => setOpen(false)}>
                            <Button className="w-full">Login 👋</Button>
                        </Link>
                    </SheetContent>
                </Sheet>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-white">
                <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
                <Link href="/posts?sort=trending" className="hover:text-gray-200 transition-colors">Trending</Link>
                <Link href="/posts?sort=popular" className="hover:text-gray-200 transition-colors">Most Popular</Link>
                <Link href="/about" className="hover:text-gray-200 transition-colors">About</Link>
                <Link href="/login">
                    <Button className="bg-white text-black hover:bg-gray-200">Login 👋</Button>
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
