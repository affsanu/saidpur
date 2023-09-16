import getCurrentUser from "@/actions/getCurrentUser";
import DNav from "@/components/dashboard/DNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Star Golpo | Dashboard',
    description: 'News & Magazin',
}

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();
    const userName = currentUser?.name;
    const isAdmin = currentUser?.isAdmin;
    const email = currentUser?.email;
    return (
        <div className="h-screen w-full">
            <DNav userName={userName!} isAdmin={isAdmin!} email={email!} />
            {children}
        </div>
    )
}
