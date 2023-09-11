"use client";
import { TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'


const PhotoSection = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [showTitle2, setShowTitle2] = useState(false);
    const [showTitle3, setShowTitle3] = useState(false);
    
    return (
        <div className='bg-black w-full py-6'>
            <div className='max-w-6xl md:h-[420px] mx-auto px-3 md:px-4 lg:px-4 xl:px-0'>
                <div className='grid grid-cols-1 h-full w-full  md:grid-cols-3 gap-4'>

                    <div
                        className='relative w-full h-full group cursor-pointer min-h-[320px]'
                        onMouseEnter={() => setShowTitle(true)}
                        onMouseLeave={() => setShowTitle(false)}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                            alt='pho-1'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-60 rounded-md'
                        />
                        <div
                            className='absolute bottom-4 left-0 right-0 px-4 flex flex-col text-white gap-2 overflow-hidden'
                        >
                            <span className='text-sm'>২৩ জুন, ২০২৩</span>
                            <span className='text-xl font-bold'>যে বাড়িতে পাখির কলকাকলি আর নির্মল বাতাসে ফুরিয়ে যায় সময়</span>
                            <p
                                style={{ maxHeight: showTitle ? '200px' : '0', transition: 'max-height 0.5s ease-in-out' }}
                                className='text-xs'
                            >
                                ঢাকার জিগাতলায় একটি ফ্ল্যাটে থাকেন অণিমা রায় ও তাঁর পরিবার। টপ ফ্লোরে এই ফ্ল্যাটের অবস্থান। ফ্ল্যাটের ছাদে অণিমা গড়ে তুলেছিলেন সুন্দর এক ছাদবাগান।
                            </p>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><Zap /></span>
                    </div>

                    <div
                        className='relative w-full h-full group cursor-pointer min-h-[320px]'
                        onMouseEnter={() => setShowTitle2(true)}
                        onMouseLeave={() => setShowTitle2(false)}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                            alt='pho-1'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-60 rounded-md'
                        />
                        <div
                            className='absolute bottom-4 left-0 right-0 px-4 flex flex-col text-white gap-2 overflow-hidden'
                        >
                            <span className='text-sm'>২৩ জুন, ২০২৩</span>
                            <span className='text-xl font-bold'>যে বাড়িতে পাখির কলকাকলি আর নির্মল বাতাসে ফুরিয়ে যায় সময়</span>
                            <p
                                style={{ maxHeight: showTitle2 ? '200px' : '0', transition: 'max-height 0.5s ease-in-out' }}
                                className='text-xs'
                            >
                                ঢাকার জিগাতলায় একটি ফ্ল্যাটে থাকেন অণিমা রায় ও তাঁর পরিবার। টপ ফ্লোরে এই ফ্ল্যাটের অবস্থান। ফ্ল্যাটের ছাদে অণিমা গড়ে তুলেছিলেন সুন্দর এক ছাদবাগান।
                            </p>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><Zap /></span>
                    </div>

                    <div
                        className='relative w-full h-full group cursor-pointer min-h-[320px]'
                        onMouseEnter={() => setShowTitle3(true)}
                        onMouseLeave={() => setShowTitle3(false)}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                            alt='pho-1'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-60 rounded-md'
                        />
                        <div
                            className='absolute bottom-4 left-0 right-0 px-4 flex flex-col text-white gap-2 overflow-hidden'
                        >
                            <span className='text-sm'>২৩ জুন, ২০২৩</span>
                            <span className='text-xl font-bold'>যে বাড়িতে পাখির কলকাকলি আর নির্মল বাতাসে ফুরিয়ে যায় সময়</span>
                            <p
                                style={{ maxHeight: showTitle3 ? '200px' : '0', transition: 'max-height 0.5s ease-in-out' }}
                                className='text-xs'
                            >
                                ঢাকার জিগাতলায় একটি ফ্ল্যাটে থাকেন অণিমা রায় ও তাঁর পরিবার। টপ ফ্লোরে এই ফ্ল্যাটের অবস্থান। ফ্ল্যাটের ছাদে অণিমা গড়ে তুলেছিলেন সুন্দর এক ছাদবাগান।
                            </p>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><Zap /></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhotoSection