"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Eye, Heart, MoveLeft, MoveRight, Pen } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CustomApi } from "@/types/types";
import { DateConvert } from "@/actions/custom-date";
import { ArticleShorern } from "@/actions/articleShortern";
import Link from "next/link";
import { calculateStringLength } from "@/actions/stringLengthCalc";
import { Skeleton } from "@/components/ui/skeleton";

interface MainSectionProps {
    params: string;
}

const MainSection = ({ params }: MainSectionProps) => {
    const [posts, setPosts] = useState<CustomApi[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);


    useEffect(() => {
        setIsLoading(true)
        axios.get(`/api/dashboard/posts`)
            .then((response) => setPosts(response.data))
            .catch((error) => console.log(error.response.data))
            .finally(() => setIsLoading(false));
    }, [])

    const stepBack = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? posts.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const stepForward = () => {
        const isLastSlide = currentIndex === posts.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    console.log(currentIndex)

    return (
        <Card className="max-w-6xl mx-auto md:h-[406px] lg:h-[338px]">
            {posts.slice(currentIndex, currentIndex + 1).map((post) => (
                <div key={post.article_id} className="grid grid-rows-2 md:grid-cols-2">
                    {/*First Col Span*/}
                    <div className="relative md:order-0 cursor-pointer group">
                        <div className="flex flex-col">
                            <CardHeader className="md:space-y-6">
                                <div className="cursor-pointer">
                                    {isLoading ?
                                        <Skeleton className="h-6 w-20" /> :
                                        <Badge className="uppercase bg-rose-500 text-slate-200 text-xs">
                                            {post.category}
                                        </Badge>
                                    }

                                </div>
                                {isLoading ?
                                    <Skeleton className="h-16 w-full" /> :
                                    <Link href={`/pages/${post.category}/${post.article_id}`} className={`${calculateStringLength(post.title) > 28 ? "md:text-2xl" : "md:text-3xl lg:text-4xl"} font-semibold dark:text-slate-200 cursor-pointer group-hover:text-rose-500 duration-300`}>
                                        {post.title}
                                    </Link>
                                }
                                {isLoading ?
                                    <Skeleton className="h-4 w-1/2" /> :
                                    <div className="flex text-xs gap-6 text-muted-foreground">
                                        <span className="flex items-center gap-1"><Pen className="w-3 h-3" />{DateConvert(post.pubDate)}</span>
                                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" />426</span>
                                    </div>
                                }
                            </CardHeader>
                            <CardContent>
                                {isLoading ?
                                    <Skeleton className="h-12 w-full" /> :
                                    <Link href={`/pages/${post.category}/${post.article_id}`}>
                                        <p className="dark:text-slate-400">
                                            {ArticleShorern(post.content, 130)}
                                        </p>
                                    </Link>
                                }
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center gap-3">
                                    {isLoading ?
                                        <Skeleton className="h-10 w-10 rounded-full" /> :
                                        <div className="h-8 w-8 md:h-10 md:w-10 relative overflow-hidden border rounded-full">
                                            <div className="absolute inset-0">
                                                <Image
                                                    src="data:image/jpeg;base64,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"
                                                    alt="profile"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    }
                                    {isLoading ?
                                        <Skeleton className="h-4 w-12" /> :
                                        <span className="uppercase text-xs md:text-sm hover:text-rose-500 cursor-pointer duration-300">
                                            সানু ইসলাম
                                        </span>
                                    }
                                </div>
                            </CardFooter>
                        </div>


                        <div className="absolute right-8 bottom-8">
                            {isLoading ?
                                <Skeleton className="h-4 w-16" /> :
                                <div className="flex gap-4">
                                    <MoveLeft onClick={() => stepBack()} className="h-5 w-5 cursor-pointer" />
                                    <MoveRight onClick={() => stepForward()} className="h-5 w-5 cursor-pointer" />
                                </div>
                            }
                        </div>
                    </div>
                    {/*First Col Span*/}
                    <Link href={`/pages/${post.category}/${post.article_id}`} className="relative overflow-hidden rounded-t-md md:rounded-tl-none md:rounded-r-md md:order-1 h-full">
                        <div className="absolute inset-0">
                            {isLoading ?
                                <Skeleton className="h-full w-full" /> :
                                <div className="w-full h-full transition-transform duration-500 transform hover:scale-110 cursor-pointer">
                                    <Image
                                        src={post.image_url}
                                        alt="main-news"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            }
                        </div>
                        <div className="absolute flex justify-center items-center top-6 right-6 w-8 h-8 bg-red-600 rounded-full">
                            {isLoading ?
                                <Skeleton className="h-8 w-8 rounded-full" /> :
                                <Heart className="w-5 h-5 text-white " />
                            }
                        </div>
                    </Link>
                </div>
            ))}
            <style jsx>{`
                @media (max-width: 768px) { /* Adjust the breakpoint as needed */
                    .md\:order-0 {
                        order: 1;
                    }
                    
                    .md\:order-1 {
                        order: 0;
                    }
                }
            `}</style>

        </Card>

    )
}

export default MainSection