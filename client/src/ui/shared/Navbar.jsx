"use client"


import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-4 font-bold text-2xl">
                <img src="/logo.png" className="w-8 h-8" alt="" />
                <span>FM Mahesh</span>
            </div>
            {/* MOBILE MENU Start */}
            <div className="md:hidden">
                <div className=" flex flex-col gap-[5.4px] cursor-pointer" onClick={() => setOpen(!open)}>
                    <div className={`h-[3px] bg-black w-6 rounded-md transition-all ease-in-out origin-left ${open && "rotate-45"}`}></div>
                    <div className={`h-[3px] bg-black w-6 rounded-md transition-all ease-in-out ${open && "opacity-0"}`}></div>
                    <div className={`h-[3px] bg-black w-6 rounded-md transition-all ease-in-out origin-left ${open && "-rotate-45"}`}></div>
                </div>
                {/* MOBILE LINK LIST START*/}
                <div className={`w-full h-screen bg-[#e6e6ff] absolute top-16 ${open ? "right-0" : "-right-[100%]"} transition-all ease-in-out flex flex-col items-center justify-center gap-8 font-medium text-lg`}>
                    <Link href="/">Home</Link>
                    <Link href="/posts?sort=trending">Trending</Link>
                    <Link href="/posts?sort=popular">Most Popular</Link>
                    <Link href="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                            Login 👋
                        </button>
                    </Link>
                </div>
                {/* MOBILE LINK LIST END*/}
                {/* MOBILE MENU end */}

            </div>
            {/* DESKTOP MENU */}
            <div className="hidden md:flex">D</div>
        </div >
    )
}

export default Navbar
