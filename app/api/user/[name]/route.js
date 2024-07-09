import { NextResponse } from "next/server";
import prisma from "@/app/(utils)/prisma";

export const GET = async (request, {params}) => {
    try {
        const { name } = params;
        const user = await prisma.player.findUnique({
            where: {
                Name: name
            }
        })
        if (!user) return NextResponse.json({message: "No user"}, {status: 404})
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({message: "No user"}, {status: 500});  
    }
}