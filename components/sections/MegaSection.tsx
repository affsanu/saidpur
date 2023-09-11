import React from 'react'
import Image from 'next/image'
import { TrendingUp, Zap } from 'lucide-react'

type Props = {}



const MegaSection = (props: Props) => {
    return (
        <div className="max-w-6xl md:h-[450px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full h-full">
                <div className='col-span-3 w-full h-full min-h-[320px]'>
                    <div className='relative w-full h-full group cursor-pointer overflow-hidden'>
                        <Image
                            src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
                            alt='pho-1'
                            layout="fill"
                            objectFit="cover"
                            className='opacity-80 rounded-md hover:scale-105 duration-1000'
                        />
                        <div className='absolute bottom-4 left-0 right-0 px-4 flex flex-col text-white gap-2'>
                            <span className='text-xs bg-rose-600 w-16 flex justify-center items-center py-1 px-4 rounded-sm'>জীবনযাপন</span>
                            <span className='text-2xl font-bold'>যে বাড়িতে পাখির কলকাকলি আর নির্মল বাতাসে ফুরিয়ে যায় সময়</span>
                        </div>
                        <span className='absolute top-4 right-4 text-rose-600'><Zap /></span>
                    </div>
                </div>
                <div className='col-span-2 h-full w-full grid grid-cols-1 gap-4'>
                    <div className='w-full h-full min-h-[320px]'>
                        <div className='relative w-full h-full group cursor-pointer overflow-hidden'>
                            <Image
                                src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt='pho-2'
                                layout="fill"
                                objectFit="cover"
                                className='opacity-80 rounded-md hover:scale-110 duration-500'
                            />
                            <div className='absolute bottom-3 left-4 flex flex-col text-white gap-2'>
                                <span className='text-xs bg-rose-600 w-16 flex justify-center items-center py-1 px-4 rounded-sm'>জীবনযাপন</span>
                                <span className='text-xl font-bold'>জেনে নিন ঘরের ভেতর গাছ রাখার ৫ উপকারিতা
                                </span>
                            </div>
                            <span className='absolute top-4 right-4 text-rose-600'><TrendingUp /></span>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='w-full h-full min-h-[320px]'>
                            <div className='relative w-full h-full group cursor-pointer overflow-hidden'>
                                <Image
                                    src="https://images.unsplash.com/photo-1693892256399-2e4d3351d4b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt='pho-2'
                                    layout="fill"
                                    objectFit="cover"
                                    className='opacity-80 rounded-md hover:scale-105 duration-500'
                                />
                                <div className='absolute bottom-4 left-4 flex flex-col text-white gap-2'>
                                    <span className='text-xs bg-rose-600 w-16 flex justify-center items-center py-1 px-4 rounded-sm'>জীবনযাপন</span>
                                    <span className='text-md font-bold'>জেনে নিন ঘরের ভেতর গাছ রাখার ৫ উপকারিতা
                                    </span>
                                </div>
                                <span className='absolute top-4 right-4 text-rose-600'><TrendingUp /></span>
                            </div>
                        </div>
                        <div className='w-full h-full min-h-[320px]'>
                            <div className='relative w-full h-full group cursor-pointer overflow-hidden'>
                                <Image
                                    src="https://images.unsplash.com/photo-1693892256399-2e4d3351d4b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt='pho-2'
                                    layout="fill"
                                    objectFit="cover"
                                    className='opacity-80 rounded-md hover:scale-105 duration-500'
                                />
                                <div className='absolute bottom-4 left-4 flex flex-col text-white gap-2'>
                                    <span className='text-xs bg-rose-600 w-16 flex justify-center items-center py-1 px-4 rounded-sm'>জীবনযাপন</span>
                                    <span className='text-md font-bold'>জেনে নিন ঘরের ভেতর গাছ রাখার ৫ উপকারিতা
                                    </span>
                                </div>
                                <span className='absolute top-4 right-4 text-rose-600'><TrendingUp /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaSection