import Image from 'next/image'
import React from 'react'
import { Separator } from '../ui/separator'
import { StickyNote } from 'lucide-react'

type Props = {}

const RecentNews = (props: Props) => {
    return (
        <div>
            {/* First Section */}
            <div className="grid gap-4 py-6">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-xl text-cyan-500 font-semibold">সাম্প্রতিক খবর</span>
                        <span className="text-rose-500"><StickyNote /></span>
                    </div>
                    <Separator className="bg-rose-600" />
                    <div className="space-y-4">
                        <div className="grid grid-cols-5 gap-4 w-full h-[110px] hover:cursor-pointer group">
                            <div className='col-span-2 relative w-full h-full group cursor-pointer overflow-hidden'>
                                <Image
                                    src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt='pho-2'
                                    layout="fill"
                                    objectFit="cover"
                                    className='opacity-90 rounded-md hover:opacity-100 hover:scale-105 duration-300'
                                />
                            </div>
                            <div className="col-span-3 flex flex-col justify-between">
                                <span className="text-sm group-hover:text-rose-500">কেন্দ্রীয় ছাত্রলীগের সঙ্গে ঢাকা বিশ্ববিদ্যালয় শাখার বিরোধ প্রকাশ্যে</span>
                                <div className="text-sm flex justify-between text-muted-foreground">
                                    <span>২৩ জুন, ২০২৩</span>
                                    <span>Sanu Islam</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-4 w-full h-[110px] hover:cursor-pointer group">
                            <div className='col-span-2 relative w-full h-full group cursor-pointer overflow-hidden'>
                                <Image
                                    src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt='pho-2'
                                    layout="fill"
                                    objectFit="cover"
                                    className='opacity-90 rounded-md hover:opacity-100 hover:scale-105 duration-300'
                                />
                            </div>
                            <div className="col-span-3 flex flex-col justify-between">
                                <span className="text-sm group-hover:text-rose-500">কেন্দ্রীয় ছাত্রলীগের সঙ্গে ঢাকা বিশ্ববিদ্যালয় শাখার বিরোধ প্রকাশ্যে</span>
                                <div className="text-sm flex justify-between text-muted-foreground">
                                    <span>২৩ জুন, ২০২৩</span>
                                    <span>Sanu Islam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentNews