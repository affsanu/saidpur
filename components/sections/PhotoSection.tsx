import { TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const PhotoSection = () => {
    return (
        <div className='bg-black w-full py-6'>
            <div className='max-w-6xl h-[420px] mx-auto px-3 md:px-4 lg:px-4 xl:px-0'>
                <div className='grid grid-cols-1 h-full w-full  md:grid-cols-3 gap-4'>

                    <div className='relative w-full h-full group cursor-pointer'>
                        <Image
                            src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                            alt='pho-1'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-60 rounded-md'
                        />
                        <div className='absolute bottom-4 left-0 right-0 px-4 flex flex-col text-white gap-2'>
                            <span>২৩ জুন, ২০২৩</span>
                            <span className='text-2xl font-bold'>যে বাড়িতে পাখির কলকাকলি আর নির্মল বাতাসে ফুরিয়ে যায় সময়</span>
                            <p className='text-xs hidden group-hover:flex'>ঢাকার জিগাতলায় একটি ফ্ল্যাটে থাকেন অণিমা রায় ও তাঁর পরিবার। টপ ফ্লোরে এই ফ্ল্যাটের অবস্থান। ফ্ল্যাটের ছাদে অণিমা গড়ে তুলেছিলেন সুন্দর এক ছাদবাগান।</p>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><Zap /></span>
                    </div>

                    <div className='relative w-full h-full group cursor-pointer'>
                        <Image
                            src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt='pho-2'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-60 rounded-md'
                        />
                        <div className='absolute bottom-4 left-4 flex flex-col text-white gap-2'>
                            <span>০৩ আগস্ট, ২০২৩</span>
                            <span className='text-2xl font-bold'>জেনে নিন ঘরের ভেতর গাছ রাখার ৫ উপকারিতা
                            </span>
                            <p className='text-xs hidden group-hover:flex'>প্রাকৃতিক ভারসাম্য রক্ষা করতে গাছের কোনো বিকল্প নেই। কিন্তু আপনি জানেন কি ঘরের ভিতরে লাগানো গাছের রয়েছে আরও অনেক গুণ? বিভিন্ন গবেষণায় দেখা গেছে।</p>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><TrendingUp /></span>
                    </div>
                    <div className='relative w-full h-full group cursor-pointer'>
                        <Image
                            src="https://images.unsplash.com/photo-1693892256399-2e4d3351d4b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt='pho-2'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-60 rounded-md'
                        />
                        <div className='absolute bottom-4 left-4 flex flex-col text-white gap-2'>
                            <span>০৩ আগস্ট, ২০২৩</span>
                            <span className='text-2xl font-bold'>জেনে নিন ঘরের ভেতর গাছ রাখার ৫ উপকারিতা
                            </span>
                            <p className='text-xs hidden group-hover:flex'>প্রাকৃতিক ভারসাম্য রক্ষা করতে গাছের কোনো বিকল্প নেই। কিন্তু আপনি জানেন কি ঘরের ভিতরে লাগানো গাছের রয়েছে আরও অনেক গুণ? বিভিন্ন গবেষণায় দেখা গেছে।</p>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><TrendingUp /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoSection