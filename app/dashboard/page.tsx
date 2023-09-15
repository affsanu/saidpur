"use client";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "./components/date-range-picker"
import { Overview } from "./components/overview"
import { StaffList } from "./components/staff-list"
import { Album, BookOpen, BookX, StickyNote } from "lucide-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function DashboardPage() {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.status === "unauthenticated") {
            router.push("/");
        }
    }, [session?.status, router]);
    return (
        <div className="max-w-6xl mx-auto">

            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="hidden md:flex items-center space-x-2">
                            <CalendarDateRangePicker />
                            <Button>Download</Button>
                        </div>
                    </div>
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics" disabled>
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger value="reports" disabled>
                                Reports
                            </TabsTrigger>
                            <TabsTrigger value="notifications" disabled>
                                Notifications
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Today Post
                                        </CardTitle>
                                        <StickyNote />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">7</div>
                                        <p className="text-xs text-muted-foreground">
                                            +20.1% from last day
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            This Month
                                        </CardTitle>
                                        <BookOpen />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">280</div>
                                        <p className="text-xs text-muted-foreground">
                                            +180.1% from last month
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Total Post</CardTitle>
                                        <Album />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">12,234</div>
                                        <p className="text-xs text-muted-foreground">
                                            +19% increase
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Draft
                                        </CardTitle>
                                        <BookX />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">0</div>
                                        <p className="text-xs text-muted-foreground">
                                            delete if not usable
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4">
                                    <CardHeader>
                                        <CardTitle>Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pl-2">
                                        <Overview />
                                    </CardContent>
                                </Card>
                                <Card className="col-span-3">
                                    <CardHeader>
                                        <CardTitle>Our Staffs</CardTitle>
                                        <CardDescription>
                                            All staff name email and profile.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <StaffList />
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
