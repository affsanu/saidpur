"use client";
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CustomApi, NewsDataApi } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { LastPathname } from "@/actions/lastPathname";
import { DateConvert } from '@/actions/custom-date';
import { SkeletonOne } from '@/components/skeleton/SkeletonOne';

type Props = {}

const ArticlePage = (props: Props) => {
    const pathname = usePathname();
    const [posts, setPosts] = useState<CustomApi[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        const article_id = LastPathname(pathname);
        axios.get(`/api/dashboard/posts/${article_id}`)
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error.response.data))
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return (
            <div className='h-full w-full flex justify-center items-center bg-black'>
                <SkeletonOne />
            </div>
        )
    }
    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-6 space-y-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className='grid grid-cols-5 md:grid-cols-7 gap-4'>
                    {posts.map((post) => (
                        <div key={post.article_id} className='col-span-5 space-y-6'>
                            <Badge className='uppercase bg-cyan-400 text-slate-700'>{post.category}</Badge>
                            <div className='flex flex-col space-y-6'>
                                <span className='text-4xl font-semibold'>
                                    {post.title}
                                </span>
                                <p className='text-muted-foreground'>
                                    {post.content}
                                </p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <span className='text-sm font-semibold'>বিশেষ প্রতিনিধি</span>
                                        <span className='text-xs text-muted-foreground'>ঢাকা</span>
                                    </div>
                                    <span className='text-muted-foreground text-sm'>
                                        <span className='text-black dark:text-white font-semibold'>প্রকাশ:</span> {DateConvert(post.pubDate)}
                                    </span>
                                </div>
                            </div>
                            <Separator />
                            <div className='w-4/5 space-y-4 mx-auto'>
                                <Image
                                    src={post.image_url}
                                    alt='articla-im'
                                    width={400}
                                    height={400}
                                    className='w-full'
                                />
                                <span className='text-xs text-muted-foreground'>Grocery - unsplash.com</span>
                                <Separator />
                                <div className='space-y-4 text-slate-700 dark:text-slate-200'>
                                    <p>
                                        {post.description1}
                                    </p>
                                    <p>
                                        {post.description2}
                                    </p>

                                    <div className='flex flex-col gap-1'>
                                        <span>আরও পড়ুন...</span>
                                        <span className='border p-4 rounded-md cursor-pointer'>
                                            প্রথমবারের মতো ডিম, আলু ও পেঁয়াজের দাম বেঁধে দিল সরকার
                                        </span>
                                    </div>
                                    <p>
                                        {post.description3}
                                    </p>
                                    <p>
                                        {post.description4}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='col-span-2 hidden md:flex'>
                        <Card className='w-full h-[260px]'>

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage