import { NextResponse } from "next/server";
import prisma from "@/app/(utils)/prisma";

export const GET = async () => {
    const Users = await prisma.player.findMany({
        include: {
            Character: true,
            Posts: true
        }
    })
    return NextResponse.json(Users)
}

export const POST = async (request) => {
        const body = await request.json();
        const { Name, isGameMaster } = body;
        var isTrueSet = (isGameMaster === "true")?true:false
        
        const NewUser = await prisma.player.create({
            data: {
                Name: Name,
                IsGameMaster: isTrueSet,
                Character: null,
                Posts: null
            },
            include: {
                Character: true,
                Posts: true
            }
        })
        return NextResponse.json(NewUser)
}