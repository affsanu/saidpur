"use client";
import axios from "axios";
import * as z from "zod";
import React, {
  useEffect,
  useState
} from 'react';
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  ChevronsUpDown,
  Loader2,
} from "lucide-react";
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';

import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command";
import { ToastAction } from "@/components/ui/toast";
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils"
import { SkeletonOne } from "@/components/skeleton/SkeletonOne";

const languages = [
  { label: "Bangla", value: "bangla" },
  { label: "English", value: "english" },
] as const

const countries = [
  { label: "Bangladesh", value: "bangladesh" },
  { label: "Others", value: "others" },
] as const

const categories = [
  { label: "বাংলাদেশ", value: "bangladesh" },
  { label: "বিশ্ব", value: "world" },
  { label: "খেলা", value: "sports" },
  { label: "প্রযুক্তি", value: "tech" },
  { label: "অর্থনীতি", value: "economy" },
  { label: "বিনোদন", value: "entertainment" },
  { label: "শিক্ষা", value: "education" },
  { label: "মতামত", value: "opinion" },
  { label: "চাকরি", value: "jobs" },
] as const

const formSchema = z.object({
  title: z.string(),
  content: z.string(),
  description1: z.string(),
  description2: z.string(),
  description3: z.string(),
  description4: z.string(),
  link: z.string(),
  keywords: z.string(),
  commentator: z.string(),
  comments: z.string(),
  video_url: z.string(),
  image_url: z.string(),
  source_id: z.string(),
  source_priority: z.number(),
  language: z.string(),
  country: z.string(),
  category: z.string(),
});

type PriorityVariant = 1 | 2 | 3 | 4 | 5 | 0;

const PostsPage = () => {
  const session = useSession();
  const router = useRouter();
  const [priority, setPriority] = useState<PriorityVariant>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      description1: "",
      description2: "",
      description3: "",
      description4: "",
      link: "",
      keywords: "",
      commentator: "",
      comments: "",
      video_url: "",
      image_url: "",
      source_id: "",
      source_priority: priority,
      language: "",
      country: "",
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    axios.post('/api/dashboard/posts', values)
      .then(() => {
        toast({
          variant: "default",
          title: "Post create success!",
          description: "please wait for approve.",
          action: <ToastAction altText="Success!">Success!</ToastAction>,
        })
        router.push("/dashboard");
      })
      .catch(() => toast({
        variant: "destructive",
        title: "Missing info!",
        description: "please re-check info.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      }))
      .finally(() => setIsLoading(false));
  }

  if (isLoading) {
    return (
      <div className='h-screen w-full flex justify-center items-center bg-black'>
        <SkeletonOne />
      </div>
    )
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-900 py-6 space-y-6">
      <div className="max-w-6xl mx-auto px-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Create Post</h2>
              <div className="hidden md:flex items-center space-x-2">
                <Button type="submit" size="sm">Publish Now</Button>
              </div>
            </div>
            <div className='grid grid-cols-7 gap-4'>
              {/*First Column*/}
              <div className='col-span-5 space-y-4'>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="Enter title" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="Enter content" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description1"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Paragraph One" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Type comments if any" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="commentator"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="text" placeholder="Commentator name" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Paragraph Two" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description3"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Paragraph Three" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description4"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Paragraph Four" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                    <FormField
                      control={form.control}
                      name="link"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="text" placeholder="Link" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? categories.find(
                                      (category) => category.value === field.value
                                    )?.label
                                    : "Select category"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                              <Command>
                                <CommandInput placeholder="Search Payment..." />
                                <CommandEmpty>No payment found.</CommandEmpty>
                                <CommandGroup>
                                  {categories.map((category) => (
                                    <CommandItem
                                      value={category.label}
                                      key={category.value}
                                      onSelect={() => {
                                        form.setValue("category", category.value)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          category.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {category.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="image_url"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="text" placeholder="Image Url" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="video_url"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type="text" placeholder="Video Url" {...field} disabled={isLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? countries.find(
                                      (country) => country.value === field.value
                                    )?.label
                                    : "Select country"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                              <Command>
                                <CommandInput placeholder="Search Payment..." />
                                <CommandEmpty>No payment found.</CommandEmpty>
                                <CommandGroup>
                                  {countries.map((country) => (
                                    <CommandItem
                                      value={country.label}
                                      key={country.value}
                                      onSelect={() => {
                                        form.setValue("country", country.value)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          country.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {country.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className={cn(
                                    "justify-between",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? languages.find(
                                      (language) => language.value === field.value
                                    )?.label
                                    : "Select language"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                              <Command>
                                <CommandInput placeholder="Search Payment..." />
                                <CommandEmpty>No payment found.</CommandEmpty>
                                <CommandGroup>
                                  {languages.map((language) => (
                                    <CommandItem
                                      value={language.label}
                                      key={language.value}
                                      onSelect={() => {
                                        form.setValue("language", language.value)
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          language.value === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {language.label}
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='flex justify-between items-center mx-4'>
                    <span className='text-xs uppercase text-bold text-sky-500'>Priority</span>
                    <span onClick={() => setPriority(1)} className={`${priority === 1 && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                      1
                    </span>
                    <span onClick={() => setPriority(2)} className={`${priority === 2 && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                      2
                    </span>
                    <span onClick={() => setPriority(3)} className={`${priority === 3 && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                      3
                    </span>
                    <span onClick={() => setPriority(4)} className={`${priority === 4 && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                      4
                    </span>
                    <span onClick={() => setPriority(5)} className={`${priority === 5 && "bg-rose-600 text-slate-200"} border p-1 px-3 rounded-full flex justify-center items-center cursor-pointer hover:bg-rose-500 hover:text-white`}>
                      5
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default PostsPage