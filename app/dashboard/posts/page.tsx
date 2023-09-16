"use client";
import { Card } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type PriorityVariant = "1" | "2" | "3" | "4" | "5" | "0";
const PostsPage = () => {
  const session = useSession();
  const router = useRouter();

  const [priority, setPriority] = useState<PriorityVariant>("0");

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [session?.status, router]);
  return (
    <div className="bg-slate-100 dark:bg-slate-900 py-6 space-y-6">
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Create Post</h2>
          <div className="hidden md:flex items-center space-x-2">
            <Button size="sm">Publish Now</Button>
          </div>
        </div>
        <div className='grid grid-cols-7 gap-4'>
          {/*First Column*/}
          <div className='col-span-5 space-y-4'>
            <Input type='text' placeholder='Enter Headline' />
            <Input type='text' placeholder='Enter Content' />
            <Textarea placeholder="Paragraph One." />
            <Textarea placeholder="Type comments if any." />
            <Input type='text' placeholder='Commentator name' />
            <Textarea placeholder="Paragraph Two." />
            <Textarea placeholder="Paragraph Three." />
            <Textarea placeholder="Paragraph Four." />
          </div>

          {/*Second Column*/}
          <div className='col-span-2 w-full h-full'>
            <Card className='flex flex-col h-full'>
              <div className='w-full'>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> article image</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className='my-4 space-y-2 mx-4'>
                <Input placeholder='Link' />
                <Input placeholder='Category' />
                <Input placeholder='Image Url' />
                <Input placeholder='Video Url' />
                <Input placeholder='Country' />
                <Input placeholder='Language' />
              </div>
              <div className='flex justify-between items-center mx-4'>
                <span className='text-xs uppercase text-bold text-sky-500'>Priority</span>
                <span onClick={() => setPriority("1")} className={`${priority === "1" && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                  1
                </span>
                <span onClick={() => setPriority("2")} className={`${priority === "2" && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                  2
                </span>
                <span onClick={() => setPriority("3")} className={`${priority === "3" && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                  3
                </span>
                <span onClick={() => setPriority("4")} className={`${priority === "4" && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                  4
                </span>
                <span onClick={() => setPriority("5")} className={`${priority === "5" && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                  5
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsPage