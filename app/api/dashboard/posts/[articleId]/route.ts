import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { LastPathname } from "@/actions/lastPathname";

export async function GET(req: Request) {
    try {
        const url = req.url;
        const article_id = LastPathname(url);

        if (!article_id) {
            return new NextResponse("Article id is required", { status: 400 });
        }

        const article = await prisma.posts.findMany({
            where: {
                article_id: article_id,
            }
        })

        return NextResponse.json(article);
    } catch (error: any) {
        console.log(error, "LAST_POST_GET_ERROR");
        return new NextResponse("Internal Error", { status: 500 });
    }
}