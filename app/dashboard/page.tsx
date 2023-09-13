"use client";
import { Card } from '@/components/ui/card';
import { FileX2, StickyNote } from 'lucide-react';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.status === "unauthenticated") {
            router.push("/");
        }
    }, [session?.status, router]);

    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-6 space-y-6">
            <div className="max-w-6xl mx-auto px-2 space-y-4">
                <div className='grid grid-cols-3 gap-4 min-h-[180px]'>
                    <Card className='px-6 flex items-center justify-between bg-blue-500'>
                        <span className='p-6 rounded-xl bg-black/40'><StickyNote className='h-8 w-8 text-white' /></span>
                        <span className='flex flex-col gap-3'>
                            <span className='flex justify-end text-2xl font-extrabold'>6</span>
                            <span className=''>Posts</span>
                        </span>
                    </Card>
                    <Card className='px-6 flex items-center justify-between bg-amber-500'>
                        <span className='p-6 rounded-xl bg-black/40'><FileX2 className='h-8 w-8 text-white' /></span>
                        <span className='flex flex-col gap-3'>
                            <span className='flex justify-end text-2xl font-extrabold'>0</span>
                            <span className=''>Drafts</span>
                        </span>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard