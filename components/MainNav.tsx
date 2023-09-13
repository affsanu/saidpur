"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { buttonVariants } from './ui/button';
import { LayoutDashboard, Search } from 'lucide-react';
import { Input } from './ui/input';
import { ModeToggle } from './ModeToggle';
import { useSession } from 'next-auth/react';

type Props = {}

const MainNav = (props: Props) => {
    const pathname = usePathname();
    const session = useSession();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isFixed ? 'fixed top-0 bg-white dark:bg-black z-50 inset-0' : ''} w-full h-16 border-b hidden sm:block shadow-sm`}>
            <div className='grid max-w-6xl mx-auto h-full px-4 items-center'>
                <div className='flex items-center justify-between'>
                    <div className='flex uppercase gap-2 text-sm dark:text-slate-300'>
                        <Link
                            href="/"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            মূল পাতা
                        </Link>
                        <Link
                            href="/pages/world"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/world" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            বিশ্ব
                        </Link>
                        <Link
                            href="/pages/sports"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/sports" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            খেলা
                        </Link>
                        <Link
                            href="/pages/tech"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/tech" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            প্রযুক্তি
                        </Link>
                        <Link
                            href="/pages/economy"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/economy" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            অর্থনীতি
                        </Link>
                        <Link
                            href="/pages/entertainment"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/entertainment" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            বিনোদন
                        </Link>
                        <Link
                            href="/pages/education"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/education" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            শিক্ষা
                        </Link>
                        <Link
                            href="/pages/opinion"
                            className={`${buttonVariants({ variant: "ghost" })} ${pathname === "/pages/opinion" ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                            মতামত
                        </Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        {session.data?.user && <Link href="/dashboard">
                            <LayoutDashboard className='text-rose-500 hover:text-rose-600 cursor-pointer' />
                        </Link>
                        }
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

export default MainNav;