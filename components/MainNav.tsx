"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";
import { buttonVariants } from './ui/button';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { ModeToggle } from './ModeToggle';

type Props = {}

const MainNav = (props: Props) => {
    const pathname = usePathname();

    return (
        <div className='w-full h-16 border-b hidden sm:block shadow-sm'>
            <div className='grid max-w-6xl mx-auto h-full px-4 items-center'>
                <div className='flex items-center justify-between'>
                    <div className='flex uppercase gap-2 text-sm dark:text-slate-300'>
                        <Link
                            href="/"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            মূল পাতা
                        </Link>
                        <Link
                            href="/world"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/world" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            বিশ্ব
                        </Link>
                        <Link
                            href="/sports"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/sports" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            খেলা
                        </Link>
                        <Link
                            href="/tech"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/tech" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            প্রযুক্তি
                        </Link>
                        <Link
                            href="/economy"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/economy" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            অর্থনীতি
                        </Link>
                        <Link
                            href="/entertainment"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/entertainment" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            বিনোদন
                        </Link>
                        <Link
                            href="/education"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/education" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            শিক্ষা
                        </Link>
                        <Link
                            href="/opinion"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/opinion" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            মতামত
                        </Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        <ModeToggle />
                        <div className='flex items-center relative'>
                            <Input placeholder='গল্প খুজুন...' />
                            <Search className='absolute right-0 bg-rose-600 rounded-r-sm h-full w-6 text-white dark:text-slate-300 hover:text-white hover:bg-rose-700 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav