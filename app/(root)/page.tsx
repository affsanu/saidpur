"use client";
import CardSection from "@/components/sections/CardSection";
import Category from "@/components/sections/Category";
import MainSection from "@/components/sections/MainSection";
import MegaSection from "@/components/sections/MegaSection";
import PhotoSection from "@/components/sections/PhotoSection";
import SecondSection from "@/components/sections/SecondSection";
import SlidingSection from "@/components/sections/SlidingSection";


const Home = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 py-6 space-y-6">
      <div className="px-3 md:px-6 lg:px-4 space-y-6">
        <MainSection />
        <SecondSection />
      </div>
      <PhotoSection />
      <div className="px-3 md:px-6 lg:px-4 space-y-6">
        <Category />
        <SlidingSection />
        <MegaSection />
      </div>
      <CardSection />
    </div>
  )
}

export default Home
