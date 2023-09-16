import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { email, password } = body;

        if (!email || !password) {
            return new NextResponse("Missing info", { status: 400 });
        }

        const adminEmail = process.env.ADMIN_EMAIL;
        if (email !== adminEmail) {
            return new NextResponse("Admin email only!", { status: 400 });
        }
        const existingAdmin = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        if (existingAdmin) {
            return new NextResponse("Admin exists!", { status: 404 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                name: "Admin",
                email,
                password: hashedPassword,
                isAdmin: true,
            }
        })

        return NextResponse.json(user);
    } catch (error: any) {
        console.log(error, "REGISTRATION_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}