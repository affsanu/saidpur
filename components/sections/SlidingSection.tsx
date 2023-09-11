"use client"
import { MoveLeft, MoveRight } from 'lucide-react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { TruncateText } from '@/actions/TextUtils';
import Marquee from "react-fast-marquee";

type Props = {}

interface DataProps {
    title: string;
    image: string;
    createdAt: string;
    views: number;
}

const datas: DataProps[] = [
    {
        title: "ডেপুটি অ্যাটর্নি জেনারেল এমরানকে অব্যাহতি দিয়ে আদেশ জারি",
        image: "https://images.unsplash.com/photo-1527817961873-3fb213da804d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        createdAt: "২৩ জুন, ২০২৩",
        views: 156
    },
    {
        title: "মুশফিক ফিরতে পারেন ঢাকায়, এসেছেন নতুন সহকারী ফিল্ডিং কোচ",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGhvdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        createdAt: "২৩ জুন, ২০২৩",
        views: 172
    },
    {
        title: "রুশ পররাষ্ট্রমন্ত্রীর বঙ্গবন্ধু স্মৃতি জাদুঘর পরিদর্শন",
        image: "https://images.unsplash.com/photo-1551024559-d69bcf67d8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGZpdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        createdAt: "২৩ জুন, ২০২৩",
        views: 1750
    },
    {
        title: "৩৫০ সিসির মোটরসাইকেল চলাচলের অনুমতি, কী বলছে কোম্পানিগুলো",
        image: "https://images.unsplash.com/photo-1620601882978-c9abf419aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZpdCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        createdAt: "২৩ জুন, ২০২৩",
        views: 570
    },
]


const SlidingSection = (props: Props) => {

    return (
        <Card className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 border-none shadow-none h-[414px]">
            <div className='hidden sm:block w-full h-full bg-rose-600 rounded-l-lg py-6 px-4 space-y-6 border-r border-rose-400 shadow-[45px_0_25px_-50px_rgb(0,0,0,0.3)]'>
                <span className='text-xl font-semibold'>Editor&apos;s picked</span>
                <p className='text-slate-200 text-sm'>
                    The featured articles are selected by experienced editors.
                    It is also based on the reader&apos;s rating. These posts have a lot of interest.
                </p>
                <div className="flex gap-3 justify-center">
                    <MoveLeft className="h-4 w-4 cursor-pointer" />
                    <MoveRight className="h-4 w-4 cursor-pointer" />
                </div>
            </div>
            <div className='col-span-2 md:col-span-4'>
                <Marquee
                    speed={10}
                    pauseOnHover
                >
                    {datas.map((data, index) => (
                        <div key={index} className='p-5 space-y-2 group'>
                            <div className='cursor-pointer flex flex-col font-bold text-[14px] group-hover:text-rose-500 duration-300'>
                                <span>{TruncateText(data.title, 28)}</span>
                            </div>
                            <div className='cursor-pointer'>
                                <Image
                                    src={data.image}
                                    alt='product-1'
                                    width={200}
                                    height={200}
                                    className='rounded-md'
                                />
                            </div>
                            <div className='flex text-xs text-muted-foreground gap-4'>
                                <span>{data.createdAt}</span> {" . "}
                                <span>{data.views} views</span>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </Card>
    )
}

export default SlidingSection