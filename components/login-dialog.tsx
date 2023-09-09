import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, LogIn } from "lucide-react";

export function LoginDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <UserCircle className='w-5 h-5 dark:text-slate-300 dark:hover:text-white cursor-pointer' />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Star Golpo Login</DialogTitle>
                    <DialogDescription>
                        Login your account using currect username & password.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input type="text" placeholder="username" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Password
                        </Label>
                        <Input type="password" placeholder="password" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" type="submit" className="uppercase text-xs text-sky-400 hover:text-sky-500">
                        <LogIn className="w-4 h-4 mr-2" />
                        Login Now
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
