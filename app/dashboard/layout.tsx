import DNav from "@/components/dashboard/DNav"

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
