import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'

type Props = {}

const items = [
    {
        img: "", label: "",
        title: "ডেপুটি অ্যাটর্নি জেনারেল এমরানকে অব্যাহতি দিয়ে আদেশ জারি",
        content: "ডেপুটি অ্যাটর্নি জেনারেল এমরান আহম্মদ ভূঁইয়াকে তাঁর পদ থেকে অব্যাহতি দিয়ে বিজ্ঞপ্তি জারি করা হয়েছে। ",
        author: "সানু ইসলাম",
        createdAt: "২৩ জুন, ২০২৩"
    },
    {
        img: "", label: "",
        title: "মুশফিক ফিরতে পারেন ঢাকায়, এসেছেন নতুন সহকারী ফিল্ডিং কোচ",
        content: "শ্রীলঙ্কার বিপক্ষে আগামীকালের ম্যাচের পরই হবে চূড়ান্ত সিদ্ধান্ত। পারিবারিক কারণে টুর্নামেন্ট অসমাপ্ত রেখে দেশে ফিরে যেতে পারেন।",
        author: "সানু ইসলাম",
        createdAt: "২৩ জুন, ২০২৩"
    },
    {
        img: "", label: "",
        title: "রুশ পররাষ্ট্রমন্ত্রীর বঙ্গবন্ধু স্মৃতি জাদুঘর পরিদর্শন",
        content: "রাজধানীর ধানমন্ডিতে বঙ্গবন্ধু স্মৃতি জাদুঘর পরিদর্শন করেছেন সফররত রুশ পররাষ্ট্রমন্ত্রী সের্গেই লাভরভ।",
        author: "সানু ইসলাম",
        createdAt: "২৩ জুন, ২০২৩"
    },
    {
        img: "", label: "",
        title: "৩৫০ সিসির মোটরসাইকেল চলাচলের অনুমতি, কী বলছে কোম্পানিগুলো",
        content: "একাধিক প্রতিষ্ঠানের চাহিদার পরিপ্রেক্ষিতে অবশেষে দেশের সড়কে ৩৫০ সিসি (ইঞ্জিন ক্ষমতা) পর্যন্ত মোটরসাইকেল চলাচলের...",
        author: "সানু ইসলাম",
        createdAt: "২৩ জুন, ২০২৩"
    },
]

const SecondSection = (props: Props) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <Card key={index} className='cursor-pointer hover:scale-105 duration-300 group'>
                        <CardHeader>
                            <CardTitle className='text-sm dark:text-slate-200 group-hover:text-rose-600'>
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-xs dark:text-muted-foreground'>
                            {item.content}
                        </CardContent>
                        <CardFooter className='text-xs flex justify-between text-muted-foreground uppercase'>
                            <span>{item.author}</span>
                            <span>{item.createdAt}</span>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default SecondSection