import { Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const items = [
  {
    title: 'ঢাকা-প্যারিসের মধ্যে দুটি সমঝোতা স্মারক সই',
    category: "বাংলাদেশ",
    content: "আজ সোমবার প্রধানমন্ত্রীর কার্যালয়ের করবী হলে প্রধানমন্ত্রী শেখ হাসিনা ও ফ্রান্সের প্রেসিডেন্ট এমানুয়েল মাখোঁর উপস্থিতিতে এই সমঝোতা স্মারক সই হয়।"
  },
  {
    title: 'বাংলাদেশ-ফ্রান্স দ্বিপক্ষীয় সম্পর্ক নতুন মাত্রায় পৌঁছেছে: প্রধানমন্ত্রী',
    category: "জীবনযাপন",
    content: "প্রধানমন্ত্রী শেখ হাসিনা আরও বলেন, আজ ফ্রান্স ও বাংলাদেশের মধ্যে দ্বিপক্ষীয় সম্পর্কের একটি ঐতিহাসিক দিন, যা পাঁচ দশকের বেশি সময় ধরে বিকশিত হচ্ছে।।"
  },
  {
    title: 'কয়রায় ‘সাদা সোনায়’ ১৫ হাজার মানুষের ভাগ্যবদল',
    category: "বিনোদন",
    content: "ভারত, পাকিস্তান, শ্রীলঙ্কা ও বাংলাদেশ—সুপার ফোর থেকে কোন দুই দল উঠবে ফাইনালে। ভারত-পাকিস্তান ম্যাচ বৃষ্টিতে ভেসে গেলে বাংলাদেশের ফাইনালে ওঠার কোনো সুযোগ কি থাকবে?"
  },
];

const MiniSection = (props: Props) => {
  return (
    <div className='max-w-6xl md:h-[160px] mx-auto border rounded-md p-4 bg-white/50 '>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full gap-6'>
        {items.map((item, index) => (
          <div key={index} className='grid grid-cols-5 gap-2 group cursor-pointer min-h-[120px]'>
            <div className='col-span-3 flex flex-col justify-between'>
              <span className='text-xs text-rose-600'>{item.category}</span>
              <span className='text-sm font-semibold group-hover:text-sky-500 duration-300 text-white'>{item.title}</span>
              <span className='flex gap-1 items-center  text-muted-foreground'>
                <Clock className='w-3 h-3' />
                <span className='text-xs'>৫ মিনিটে পড়ুন</span>
              </span>
            </div>
            <div className='col-span-2'>
              <div className='relative w-full h-full group cursor-pointer overflow-hidden'>
                <Image
                  src="https://images.unsplash.com/photo-1529271230144-e8c648ef570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt='pho-2'
                  layout="fill"
                  objectFit="cover"
                  className='opacity-90 rounded-md group-hover:scale-110 duration-500'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniSection