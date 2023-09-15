"use client";
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { NewsDataApi } from '@/types/types';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type Props = {}

const ArticlePage = (props: Props) => {
    const [results, setResults] = useState<NewsDataApi[]>([]);

    useEffect(() => {
        axios.get("https://newsdata.io/api/1/news?apikey=pub_278539e50fdc78fea3b64b6048b70c0cf395a&q=pegasus&language=en")
            .then((response) => setResults(response.data.results))
            .catch((error) => error.response.data);
    }, []);
    return (
        <div className="bg-slate-100 dark:bg-slate-900 py-6 space-y-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className='grid grid-cols-5 md:grid-cols-7 gap-4'>
                    <div className='col-span-5 space-y-6'>
                        <Badge className='uppercase bg-cyan-400 text-slate-700'>Business</Badge>
                        <div className='flex flex-col space-y-6'>
                            <span className='text-4xl font-semibold'>
                                দাম বেঁধে আলু–ডিম–পেঁয়াজের বাজারে লাগাম টানার চেষ্টা, কতটা সফল হবে
                            </span>
                            <p className='text-muted-foreground'>
                                সিদ্ধান্ত বাস্তবায়নে জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর থেকে শুরু করে জেলা প্রশাসকেরা বাজার তদারক করবেন বলে জানিয়েছেন বাণিজ্যমন্ত্রী।
                            </p>
                            <div className='flex justify-between'>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-sm font-semibold'>বিশেষ প্রতিনিধি</span>
                                    <span className='text-xs text-muted-foreground'>ঢাকা</span>
                                </div>
                                <span className='text-muted-foreground text-sm'>
                                    <span className='text-black dark:text-white font-semibold'>প্রকাশ:</span> ১৫ সেপ্টেম্বর ২০২৩, ১০: ০০
                                </span>
                            </div>
                        </div>
                        <Separator />
                        <div className='w-4/5 space-y-4 mx-auto'>
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1661380663916-b47a2b62ed0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMGFpc2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                alt='articla-im'
                                width={400}
                                height={400}
                                className='w-full'
                            />
                            <span className='text-xs text-muted-foreground'>Grocery - unsplash.com</span>
                            <Separator />
                            <div className='space-y-4 text-slate-700 dark:text-slate-200'>
                                <p>বাজারে বাড়তে থাকা দামের লাগাম টানতে নতুন করে তিনটি পণ্যের সর্বোচ্চ খুচরা মূল্য বেঁধে দিয়েছে সরকার। গতকাল বৃহস্পতিবার পেঁয়াজ, আলু ও ডিম—এই তিন পণ্যের দাম ঠিক করে দিয়েছে বাণিজ্য মন্ত্রণালয়। বেশ কিছুদিন ধরে এই তিন পণ্যের দামে বাজারে অস্থিরতা বিরাজ করছে।

                                    যদিও আগে কয়েক দফায় ভোজ্যতেল ও চিনির দাম বেঁধে দিয়ে তা কার্যকর করতে পারেনি সরকার। তবে ব্যবসায়ী ও অর্থনীতিবিদেরা বলছেন, কীভাবে নতুন দাম কার্যকর করা হবে, তার কোনো কৌশল সরকারের নেই। সরকার বলছে, বেঁধে দেওয়া দাম কার্যকর করতে নিয়মিত বাজার তদারকি করা হবে। নতুন দাম ঘোষণার পর গতকাল বিকেলে তা সব জেলা প্রশাসকসহ সংশ্লিষ্ট দপ্তরগুলোকে জানিয়েছে বাণিজ্য মন্ত্রণালয়।
                                </p>
                                <p>
                                    সচিবালয়ে গতকাল ‘নিত্যপ্রয়োজনীয় কৃষিপণ্যের উৎপাদন, চাহিদা ও মূল্য পরিস্থিতি পর্যালোচনা’ শীর্ষক বৈঠক শেষে বাণিজ্যমন্ত্রী টিপু মুনশি তিন পণ্যের বেঁধে দেওয়া দাম ঘোষণা করেন। এখন থেকে খুচরা পর্যায়ে প্রতিটি ডিমের দাম হবে সর্বোচ্চ ১২ টাকা, প্রতি কেজি আলু ৩৬ টাকা এবং দেশি পেঁয়াজ ৬৫ টাকা।
                                </p>
                                <p>
                                    এ বৈঠকে বাণিজ্যসচিব তপন কান্তি ঘোষ, কৃষিসচিব ওয়াহিদা আক্তার, জাতীয় ভোক্তা অধিকার সংরক্ষণ অধিদপ্তরের মহাপরিচালক এ এইচ এম সফিকুজ্জামান প্রমুখ উপস্থিত ছিলেন।
                                </p>
                                <p>
                                    বাণিজ্যমন্ত্রী বলেন, ‘কোনো কারণ ছাড়াই বাজারে অনেক পণ্যের দাম বেড়েছে। এর মধ্যে আলু, পেঁয়াজ ও ডিমের মতো গুরুত্বপূর্ণ পণ্যও রয়েছে। আমরা সিদ্ধান্ত নিয়েছি, এখন ন্যায্য দাম কার্যকর করব।’
                                </p>
                                <p>
                                    বাণিজ্য মন্ত্রণালয় তিন পণ্যের যে দাম ঘোষণা করেছে, তা কৃষি এবং মৎস্য ও প্রাণিসম্পদ মন্ত্রণালয়ের সঙ্গে আলোচনা করেই নির্ধারণ করা হয়েছে বলেন জানান বাণিজ্যমন্ত্রী। কৃষি বিপণন আইন, ২০১৮–এর ক্ষমতাবলে দাম বেঁধে দেওয়া হয়েছে উল্লেখ করে তিনি বলেন, ‘এত দিন আমরা কৃষিপণ্যের দাম নির্ধারণ করে দিইনি। আজই (বৃহস্পতিবার) প্রথম তা করে দিলাম। সবকিছু বিবেচনায় নিয়েই তা করা হয়েছে। আশা করছি এটা বাস্তবায়ন করতে পারব।’
                                </p>
                                <div className='flex flex-col gap-1'>
                                    <span>আরও পড়ুন...</span>
                                    <span className='border p-4 rounded-md cursor-pointer'>
                                        প্রথমবারের মতো ডিম, আলু ও পেঁয়াজের দাম বেঁধে দিল সরকার
                                    </span>
                                </div>
                                <p>
                                    হিমাগারে (কোল্ডস্টোরেজ) রাখা, পরিবহনসহ সব খরচের হিসাব করে আলুর দাম ৩৫ থেকে ৩৬ টাকার বেশি হওয়া উচিত নয় বলে জানান টিপু মুনশি। তবে ঢাকায় যদি এ দাম হয়, তাহলে চট্টগ্রামে একটু বাড়তে পারে। তবে হিমাগারের গেটে আলুর দাম হবে ২৬ থেকে ২৭ টাকা কেজি। খুচরা বাজারে দেশি পেঁয়াজের যৌক্তিক সর্বোচ্চ মূল্য প্রতি কেজি ৬৪ থেকে ৬৫ টাকা হওয়া উচিত বলে জানান বাণিজ্যমন্ত্রী। তিনি বলেন, স্থানভেদে এক টাকা ব্যবধান হতে পারে। পেঁয়াজের পাইকারি দাম হবে ৫৩ থেকে ৫৪ টাকা কেজি।

                                    ডিমের খুচরা মূল্য ১২ টাকা নির্ধারণ করে বাণিজ্যমন্ত্রী জানান, প্রতিটি ডিমের উৎপাদন খরচ ১০ টাকা ৫০ পয়সা। দামের ব্যাপারে প্রতিবেশী দেশেও খবর নেওয়া হয়েছে। তিনি সতর্ক করে দিয়ে বলেন, দাম না কমলে ডিম আমদানি করা হবে।
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 hidden md:flex'>
                        <Card className='w-full h-[260px]'>

                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlePage