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

const categories = [
    { label: "বাংলাদেশ", value: "/pages/bangladesh" },
    { label: "বিশ্ব", value: "/pages/world" },
    { label: "খেলা", value: "/pages/sports" },
    { label: "প্রযুক্তি", value: "/pages/tech" },
    { label: "অর্থনীতি", value: "/pages/economy" },
    { label: "বিনোদন", value: "/pages/entertainment" },
    { label: "শিক্ষা", value: "/pages/education" },
    { label: "মতামত", value: "/pages/opinion" },
    { label: "চাকরি", value: "/pages/jobs" },
] as const

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
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                href={`${category.value}`}
                                className={`${buttonVariants({ variant: "ghost" })} ${pathname === `${category.value}` ? "bg-rose-600 text-white hover:bg-rose-700" : ""}`}>
                                {category.label}
                            </Link>
                        ))}
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