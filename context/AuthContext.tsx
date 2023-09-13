"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function AuthContext({ children }: ThemeProviderProps) {
    return (
        <ThemeProvider attribute='class' defaultTheme="dark" enableSystem>
            <SessionProvider>
                {children}
            </SessionProvider>
        </ThemeProvider>
    )
}