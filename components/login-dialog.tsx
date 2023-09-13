"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import axios from "axios";
import { UserCircle, Loader2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useToast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { ToastAction } from "./ui/toast";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Minimum 6 digit required").max(32),
});

type Variant = "LOGIN" | "REGISTER";

export function LoginDialog() {
    const router = useRouter();
    const session = useSession();

    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        if (variant === "REGISTER") {
            axios.post('/api/login', values)
                .then(() => signIn("credentials", values))
                .catch(() => toast({
                    variant: "destructive",
                    title: "Invalid credentials!",
                    description: "please provide valid info.",
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                }))
                .finally(() => setIsLoading(false));
        }

        if (variant === "LOGIN") {
            signIn("credentials", {
                ...values,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast({
                            variant: "destructive",
                            title: callback.error,
                            description: `please provide valid info.`,
                            action: <ToastAction altText="Try again">Try Again</ToastAction>,
                        });
                    }

                    if (callback?.ok && !callback?.error) {
                        toast({
                            variant: "default",
                            title: "Logged in!",
                            description: "you can access all features.",
                            action: <ToastAction altText="Welcome back!">Welcome back!</ToastAction>,
                        });
                        
                    }
                }).finally(() => setIsLoading(false));
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <UserCircle className='w-5 h-5 dark:text-slate-300 dark:hover:text-white cursor-pointer' />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{variant === "LOGIN" ? "Login Area" : "Registration Area"}</DialogTitle>
                    <DialogDescription>
                        {
                            variant === "LOGIN" ?
                                "Use valid admin credentials for login."
                                :
                                "Only Admin can registration here."
                        }
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="example@domain.com" {...field} disabled={isLoading} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter Password" {...field} disabled={isLoading} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button size="sm" type="submit" disabled={isLoading} className="w-full">
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            {variant === "LOGIN" ? 'Sign in' : 'Register'}
                        </Button>
                    </form>
                </Form>
                <DialogFooter className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        {variant === "REGISTER" ? "Already have an account?" : "Don't have account?"}
                    </p>
                    <Button disabled={isLoading} onClick={toggleVariant} variant="link" size="sm" className="text-blue-500">
                        {variant === "REGISTER" ? "sign in" : "create account"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
