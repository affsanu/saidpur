"use client";
import { DateConvert } from '@/actions/custom-date';
import { NewsDataApi } from '@/types/types';
import axios from 'axios';
import { Clock } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react';

interface MiniSectionProps {

}


const MiniSection = ({ }: MiniSectionProps) => {
  const [results, setResults] = useState<NewsDataApi[]>([]);

  useEffect(() => {
    axios.get("https://newsdata.io/api/1/news?apikey=pub_278539e50fdc78fea3b64b6048b70c0cf395a&q=pegasus&language=en")
      .then((response) => setResults(response.data.results))
      .catch((error) => error.response.data);
  }, []);

  return (
    <div className='max-w-6xl md:h-[160px] mx-auto border rounded-md p-4  bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-rose-600'>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full gap-6'>
        {results.slice(1, 4).map((item, index) => (
          <div key={index} className='grid grid-cols-5 gap-2 group cursor-pointer min-h-[120px]'>
            <div className='col-span-3 flex flex-col justify-between'>
              <span className='text-xs font-bold uppercase'>{item.category}</span>
              <span className='text-sm font-semibold group-hover:text-white duration-300 text-slate-200'>{item.title}</span>
              <span className='flex gap-1 items-center  text-slate-300'>
                <Clock className='w-3 h-3' />
                <span className='text-xs'>{DateConvert(item.pubDate)}</span>
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