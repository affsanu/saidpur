import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getSession from "@/actions/getSession";

export async function POST(request: Request) {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return new NextResponse("Please login", { status: 401 });
        }

        const user = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        });

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await request.json();

        const {
            title,
            content,
            paragraph1,
            paragraph2,
            paragraph3,
            paragraph4,
            comments,
            commentator,
            link,
            category,
            image_url,
            video_url,
            country,
            language,
            source_priority,
            source_id,
        } = body;

        const post = await prisma.posts.create({
            data: {
                userId: user.id,
                article_id: "sdfsdfsd",
                title,
                content,
                description1: paragraph1,
                description2: paragraph2,
                description3: paragraph3,
                description4: paragraph4,
                comments,
                commentator,
                link,
                category,
                image_url,
                video_url,
                keywords: "ABC",
                country,
                language,
                source_priority,
                source_id,
                published: true,
            }
        })
        return NextResponse.json(post);
    } catch (error: any) {
        console.log(error, "POSTS_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}