import Footer from "@/components/Footer"
import MainNav from "@/components/MainNav"
import MobileMainNav from "@/components/MobileMainNav"
import SiteName from "@/components/SiteName"
import TopNav from "@/components/TopNav"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-full">
      <MobileMainNav />
      <TopNav />
      <SiteName />
      <MainNav />
      {children}
      <Footer />
    </div>
  )
}
