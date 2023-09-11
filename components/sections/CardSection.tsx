import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import MiniSection from './MiniSection'
import Image from 'next/image'
import { Clock, Pen } from 'lucide-react'

type Props = {}

const CardSection = (props: Props) => {
    return (
        <div className='bg-black w-full py-6 space-y-6'>
            <MiniSection />
            <div className='max-w-6xl mx-auto'>
                <div className='md:h-[420px] px-3 md:px-4 lg:px-4 xl:px-0'>
                    <div className='grid grid-cols-1 h-full w-full  md:grid-cols-3 gap-4'>
                        <Card className='w-full rounded-md cursor-pointer group min-h-[420px]'>
                            <div className='relative w-full h-1/2 group cursor-pointer overflow-hidden'>
                                <Image
                                    src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt='pho-2'
                                    layout="fill"
                                    objectFit="cover"
                                    className='opacity-90 rounded-md group-hover:scale-110 duration-500 rounded-b-none'
                                />
                            </div>
                            <CardHeader>
                                <div className='text-xl font-semibold group-hover:text-rose-500 duration-300'>
                                    ঢাকা-প্যারিসের মধ্যে দুটি সমঝোতা স্মারক সই
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className='text-xs text-slate-500'>
                                    আজ সোমবার প্রধানমন্ত্রীর কার্যালয়ের করবী হলে প্রধানমন্ত্রী শেখ হাসিনা ও ফ্রান্সের প্রেসিডেন্ট এমানুয়েল মাখোঁর উপস্থিতিতে এই সমঝোতা স্মারক সই হয়।
                                </p>
                            </CardContent>
                            <CardFooter className='flex justify-between items-center text-muted-foreground'>
                                <span className='flex gap-1 items-center'>
                                    <Clock className='w-3 h-3' />
                                    <span className='text-xs'>৫ মিনিটে পড়ুন</span>
                                </span>
                                <span className='flex gap-1 items-center'>
                                    <Pen className='w-3 h-3' />
                                    <span className='text-xs'>সানু ইসলাম</span>
                                </span>
                            </CardFooter>
                        </Card>
                        <div>

                        </div>
                        <Card className='w-full rounded-md cursor-pointer group  min-h-[420px]'>
                            <div className='relative w-full h-1/2 group cursor-pointer overflow-hidden'>
                                <Image
                                    src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt='pho-2'
                                    layout="fill"
                                    objectFit="cover"
                                    className='opacity-90 rounded-md group-hover:scale-110 duration-500 rounded-b-none'
                                />
                            </div>
                            <CardHeader>
                                <div className='text-xl font-semibold group-hover:text-rose-500 duration-300'>
                                    ঢাকা-প্যারিসের মধ্যে দুটি সমঝোতা স্মারক সই
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className='text-xs text-slate-500'>
                                    আজ সোমবার প্রধানমন্ত্রীর কার্যালয়ের করবী হলে প্রধানমন্ত্রী শেখ হাসিনা ও ফ্রান্সের প্রেসিডেন্ট এমানুয়েল মাখোঁর উপস্থিতিতে এই সমঝোতা স্মারক সই হয়।
                                </p>
                            </CardContent>
                            <CardFooter className='flex justify-between items-center text-muted-foreground'>
                                <span className='flex gap-1 items-center'>
                                    <Clock className='w-3 h-3' />
                                    <span className='text-xs'>৫ মিনিটে পড়ুন</span>
                                </span>
                                <span className='flex gap-1 items-center'>
                                    <Pen className='w-3 h-3' />
                                    <span className='text-xs'>সানু ইসলাম</span>
                                </span>
                            </CardFooter>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardSection