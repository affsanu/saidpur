import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { GaugeCircle, Menu } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import MainLogo from "../MainLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Staffs", link: "/dashboard/staffs" },
    { title: "Posts", link: "/dashboard/posts" },
    { title: "Pages ", link: "/dashboard/pages" },
    { title: "Menus ", link: "/dashboard/menus" },
    { title: "Navigation", link: "/dashboard/navigation" },
]

export function DSheets() {
    const pathname = usePathname();

    const active = "px-6 py-3 border-l-4 bg-gradient-to-r from-white/10 to-white/0 border-rose-600 text-cyan-500 font-semibold";
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu className='w-6 h-6 cursor-pointer hover:text-white' />
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <MainLogo width={10} height={10} />
                </SheetHeader>
                <Separator className="mt-1" />
                {/* Second Section */}
                <div className="py-6 flex flex-col gap-5">
                    {items.map((item, index) => (
                        <SheetClose key={index} asChild>
                            <Link href={item.link}>
                                <span className={`${pathname === item.link ? active : "text-slate-300"} flex items-center gap-2 text-sm px-7`}>
                                    <GaugeCircle className={` w-5 h-5`} />
                                    {item.title}
                                </span>
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
