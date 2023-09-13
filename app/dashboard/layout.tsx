import DNav from "@/components/dashboard/DNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Star Golpo | Dashboard',
    description: 'News & Magazin',
  }

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-full">
            <DNav />
            {children}
        </div>
    )
}
