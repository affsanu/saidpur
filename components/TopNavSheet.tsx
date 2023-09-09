import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronRight, Facebook, Folder, Instagram, Menu, StickyNote, Twitter } from 'lucide-react';
import MainLogo from "./MainLogo";
import { Separator } from "./ui/separator";
import Image from "next/image";

const items = [
    { title: "বিশ্ব", count: 35, color: "text-emerald-400", box: "border-emerald-400 shadow-lg" },
    { title: "খেলা", count: 61, color: "text-cyan-400", box: "border-cyan-400 shadow-lg" },
    { title: "প্রযুক্তি", count: 29, color: "text-sky-400", box: "border-sky-400 shadow-lg" },
    { title: "অর্থনীতি", count: 27, color: "text-indigo-400", box: "border-indigo-400 shadow-lg" },
    { title: "বিনোদন", count: 52, color: "text-fuchsia-500", box: "border-fuchsia-400 shadow-lg" },
    { title: "শিক্ষা", count: 8, color: "text-pink-500", box: "border-pink-500 shadow-lg" },
    { title: "মতামত", count: 22, color: "text-amber-400", box: "border-amber-400 shadow-lg" },
]

export function TopNavSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className='w-5 h-5 dark:text-slate-300 cursor-pointer dark:hover:text-white' />
            </SheetTrigger>
            <SheetContent className="">
                <SheetHeader>
                    <MainLogo width={10} height={10} />
                </SheetHeader>
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
                {/* Second Section */}
                <div className="grid gap-4 py-6">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-xl text-rose-500 font-semibold">প্রকার সমূহ</span>
                            <span className="text-sky-600"><Folder /></span>
                        </div>
                        <Separator className="bg-cyan-600" />
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <span className="flex items-center gap-2">
                                        <ChevronRight className="w-4 h-4" />
                                        <span className="hover:text-sky-500 cursor-pointer">{item.title}</span>
                                    </span>
                                    <span className={`border w-8 h-8 rounded-sm flex justify-center items-center text-sm ${item.color} ${item.box}`}>
                                        {item.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <SheetFooter>
                    <SheetClose asChild>
                        <div className='flex gap-3 items-center'>
                            <span><Facebook className='w-4 h-4 dark:text-slate-300 hover:text-sky-500 cursor-pointer' /></span>
                            <span><Twitter className='w-4 h-4 dark:text-slate-300 hover:text-blue-600 cursor-pointer' /></span>
                            <span><Instagram className='w-4 h-4 dark:text-slate-300 hover:text-fuchsia-600 cursor-pointer' /></span>
                        </div>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
