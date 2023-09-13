"use client";
import { LayoutDashboard, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MainLogo from './MainLogo'
import { ModeToggle } from './ModeToggle'
import { LoginDialog } from './login-dialog'
import { MobileNavSheet } from './MobileNavSheet'
import { useSession } from 'next-auth/react';
import Link from 'next/link';

type Props = {}

const MobileMainNav = (props: Props) => {
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
        <div className={`${isFixed ? 'fixed top-0 z-50 bg-white dark:bg-black inset-0' : ''} md:hidden w-full h-12 flex justify-between items-center border-b p-3`}>
            <div className='flex gap-2 items-center'>
                <MobileNavSheet />
                <Search className='w-6 h-6' />
            </div>
            <MainLogo height={10} width={10} />
            <div className='flex gap-2 items-center'>
                {session?.status === "authenticated" ?
                    <Link href="/dashboard">
                        <LayoutDashboard className='text-rose-600' />
                    </Link>
                    :
                    <LoginDialog />}
                <ModeToggle />
            </div>
        </div>
    )
}

export default MobileMainNav