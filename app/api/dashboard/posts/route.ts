import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getSession from "@/actions/getSession";
import { ArticleIdGen } from "@/actions/articleIdGen";

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
            description1,
            description2,
            description3,
            description4,
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
            keywords,
        } = body;

        const post = await prisma.posts.create({
            data: {
                userId: user.id,
                article_id: ArticleIdGen(10),
                title,
                content,
                description1,
                description2,
                description3,
                description4,
                comments,
                commentator,
                link,
                category,
                image_url,
                video_url,
                keywords,
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

export async function GET(request: Request) {
    try {
        const posts = await prisma.posts.findMany({
            orderBy: { pubDate: 'desc' },
        });

        return NextResponse.json(posts);
    } catch (error: any) {
        console.log(error, "LAST_POST_GET_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}