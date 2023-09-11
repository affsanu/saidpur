"use client";
import TopNavDate from '@/actions/custom-date';
import Typewriter from 'typewriter-effect';
import { TopNavSheet } from './TopNavSheet';
import { Instagram, Twitter, Facebook, ArrowLeftSquare, ArrowRightSquare, Clock } from "lucide-react";
import { Separator } from '@/components/ui/separator';
import { LoginDialog } from './login-dialog';


type Props = {}

const TopNav = (props: Props) => {
    const date = TopNavDate();

    return (
        <div className={`w-full h-8 border-b hidden sm:block`}>
            <div className='flex justify-between max-w-6xl h-full items-center mx-auto px-4'>
                <div className='text-xs flex gap-4 items-center'>
                    <span className='flex items-center gap-1 dark:text-muted-foreground'>
                        <Clock className='w-4 h-4' />
                        {date}
                    </span>
                    <span className='bg-rose-600 py-2 px-4 text-white font-base'>নতুন গল্প</span>
                    <span className='cursor-pointer dark:text-sky-400'>
                        <Typewriter
                            options={{
                                strings: ['ডেঙ্গুতে এক দিনে আরও ২০ জনের মৃত্যু', 'ঢাকায় রুশ পররাষ্ট্রমন্ত্রী সের্গেই লাভরভ'],
                                autoStart: true,
                                loop: true,
                                cursor: " ",
                                delay: 20,
                            }}
                        />
                    </span>
                </div>
                <div className='flex items-center'>
                    <div className='flex gap-2'>
                        <span><ArrowLeftSquare className='w-5 h-5 dark:text-slate-300 dark:hover:text-white cursor-pointer' /></span>
                        <span><ArrowRightSquare className='w-5 h-5 dark:text-slate-300 dark:hover:text-white cursor-pointer' /></span>
                    </div>
                    <Separator orientation="vertical" className='w-0.5 h-5 mx-2' />
                    <div className='flex gap-3 items-center'>
                        <span><Facebook className='w-5 h-5 dark:text-slate-300 hover:text-sky-500 cursor-pointer' /></span>
                        <span><Twitter className='w-5 h-5 dark:text-slate-300 hover:text-blue-600 cursor-pointer' /></span>
                        <span><Instagram className='w-5 h-5 dark:text-slate-300 hover:text-fuchsia-600 cursor-pointer' /></span>
                        <LoginDialog />
                        <TopNavSheet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav