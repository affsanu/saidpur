import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { BadgeCheck, ChevronRight, Facebook, Folder, Instagram, Menu, StickyNote, Twitter, Youtube } from 'lucide-react';
import MainLogo from "./MainLogo";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Card } from "./ui/card";

const items = [
    { title: "মূল পাতা", count: 99, color: "text-rose-500", box: "border-rose-400 shadow-lg" },
    { title: "বিশ্ব", count: 35, color: "text-emerald-400", box: "border-emerald-400 shadow-lg" },
    { title: "খেলা", count: 61, color: "text-cyan-400", box: "border-cyan-400 shadow-lg" },
    { title: "প্রযুক্তি", count: 29, color: "text-sky-400", box: "border-sky-400 shadow-lg" },
    { title: "অর্থনীতি", count: 27, color: "text-indigo-400", box: "border-indigo-400 shadow-lg" },
    { title: "বিনোদন", count: 52, color: "text-fuchsia-500", box: "border-fuchsia-400 shadow-lg" },
    { title: "শিক্ষা", count: 8, color: "text-pink-500", box: "border-pink-500 shadow-lg" },
    { title: "মতামত", count: 22, color: "text-amber-400", box: "border-amber-400 shadow-lg" },
]

export function MobileNavSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className='w-6 h-6' />
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <MainLogo width={10} height={10} />
                </SheetHeader>
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
                        <div className="mt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xl text-cyan-500 font-semibold">সামাজিক মাধ্যম</span>
                                <span className="text-rose-500"><BadgeCheck /></span>
                            </div>
                            <Separator className="bg-rose-600 my-4" />
                            <Card className="flex justify-between px-4 py-2 border-fuchsia-400">
                                <span className="border p-1 rounded-full shadow-lg ring-2 ring-blue-600">
                                    <Facebook />
                                </span>
                                <span className="border p-1 rounded-full shadow-lg ring-2 ring-cyan-600">
                                    <Twitter />
                                </span>
                                <span className="border p-1 rounded-full shadow-lg ring-2 ring-rose-600">
                                    <Youtube />
                                </span>
                            </Card>
                        </div>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
