import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getSession } from "next-auth/react";

export async function GET(request: Request) {
    try {
        const session = await getSession();
        if (!session?.user) {
            return new NextResponse("unauthorized", { status: 403 })
        }
        const user = await prisma.user.findFirst({
            where: {
                email: session.user.email as string,
            }
        })
        if (!user) {
            return new NextResponse("User data not found");
        }

        return NextResponse.json(user);
    } catch (error: any) {
        console.log(error, "USER_GET_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}