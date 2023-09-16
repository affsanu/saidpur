"use client";

import Link from 'next/link';
import React from 'react';
import { ModeToggle } from '../ModeToggle';
import MainLogo from '../MainLogo';
import { ProfileMenu } from './ProfileMenu';
import { DSheets } from './DSheets';
import { usePathname } from 'next/navigation';
import { PathnameSplite } from '@/actions/PathnameSplite';

interface DNavProps {
    userName: string;
    isAdmin: boolean;
}

const DNav = ({ userName, isAdmin }: DNavProps) => {
    const pathname = usePathname();

    return (
        <div className="w-full h-16  border-b shadow-sm">
            <div className='grid max-w-6xl mx-auto h-full px-4 items-center'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center uppercase gap-6 text-sm dark:text-slate-300'>
                        <MainLogo width={12} height={12} />
                        <DSheets />
                        <Link href="/dashboard" className='text-rose-600 font-bold underline underline-offset-4'>{PathnameSplite(pathname)}</Link>
                    </div>
                    <div className='flex items-center gap-4'>
                        <ModeToggle />
                        <div className='flex items-center gap-2 uppercase text-xs text-cyan-400'>
                            <ProfileMenu userName={userName!} isAdmin={isAdmin!} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DNav