"use client";
import { Card } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {}

const PostsPage = (props: Props) => {
  const session = useSession();
  const router = useRouter();

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
          <div className='col-span-5 space-y-4'>
            <Input type='text' placeholder='Enter Headline' />
            <Input type='text' placeholder='Enter Content' />
            <Textarea placeholder="Type your article here." />
          </div>
          <div className='col-span-2 w-full h-full'>
            <Card className='flex items-center justify-center'>
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
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostsPage