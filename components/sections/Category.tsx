import React from 'react'
import Link from 'next/link'

type Props = {}

const items = [
    {
        title: "যুক্তরাষ্ট্রে বাংলাদেশের পোশাক রপ্তানি কমেছে ২০%",
    },
    {
        title: "টক শো ‘তৃতীয় মাত্রা’র ফেসবুক পেজ হ্যাকড",
    },
    {
        title: "কচুরিপানা সংগ্রহ করে দৈনিক ২ হাজার টাকা আয়",
    },
]

const Category = (props: Props) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {items.map((item, index) => (
                    <div key={index} className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 via-emerald-500 to-rose-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 dark:bg-black/30">
                            <div className="space-y-4">
                                <p className="text-slate-800 dark:text-white">{item.title}</p>
                                <Link href="/" className="block text-sky-600 group-hover:font-semibold transition duration-200">
                                    বিস্তারিত পড়ুন →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category