"use client";
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { CustomApi } from '@/types/types'
import axios from 'axios'
import { DateConvert } from '@/actions/custom-date'
import { ArticleShorern } from '@/actions/articleShortern'
import Link from 'next/link'

type Props = {}

const SecondSection = (props: Props) => {
    const [posts, setPosts] = useState<CustomApi[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true)
        axios.get(`/api/dashboard/posts`)
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error.response.data))
            .finally(() => setIsLoading(false));
    }, [])


    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {posts.map((item) => (
                    <Link href={`/pages/${item.category}/${item.article_id}`} >
                        <Card key={item.article_id} className='cursor-pointer hover:scale-105 duration-300 group'>
                            <CardHeader>
                                <CardTitle className='text-sm dark:text-slate-200 group-hover:text-rose-600'>
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='text-xs dark:text-muted-foreground'>
                                {ArticleShorern(item.content, 155)}
                            </CardContent>
                            <CardFooter className='text-xs flex justify-between text-muted-foreground uppercase'>
                                <span>S</span>
                                <span>{DateConvert(item.pubDate)}</span>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SecondSection