import { Clock } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const MiniSection = (props: Props) => {
  return (
    <div className='max-w-6xl md:h-[160px] mx-auto border rounded-md p-4 '>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full gap-6'>
        <div className='grid grid-cols-5 gap-2 group cursor-pointer min-h-[120px]'>
          <div className='col-span-3 flex flex-col justify-between'>
            <span className='text-xs text-rose-600'>বাংলাদেশ</span>
            <span className='text-sm font-semibold group-hover:text-sky-500 duration-300'>শেখ হাসিনা-এমানুয়েল মাখোঁর দ্বিপক্ষীয় বৈঠক</span>
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
        <div className='grid grid-cols-5 gap-2 group cursor-pointer min-h-[120px]'>
          <div className='col-span-3 flex flex-col justify-between'>
            <span className='text-xs text-rose-600'>বাংলাদেশ</span>
            <span className='text-sm font-semibold group-hover:text-sky-500 duration-300'>শেখ হাসিনা-এমানুয়েল মাখোঁর দ্বিপক্ষীয় বৈঠক</span>
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
        <div className='grid grid-cols-5 gap-2 group cursor-pointer min-h-[120px]'>
          <div className='col-span-3 flex flex-col justify-between'>
            <span className='text-xs text-rose-600'>বাংলাদেশ</span>
            <span className='text-sm font-semibold group-hover:text-sky-500 duration-300'>শেখ হাসিনা-এমানুয়েল মাখোঁর দ্বিপক্ষীয় বৈঠক</span>
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
      </div>
    </div>
  )
}

export default MiniSection