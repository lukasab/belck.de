import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { name, description } = body;

    const pokerRoom = await prisma.pokerPlanningRoom.create({
        data: {
            name: name,
            description: description
        }
    })

    return new Response(pokerRoom.id)
}

export async function GET() {
    const pokerPlanningRooms = await prisma.pokerPlanningRoom.findMany()

    return new Response(JSON.stringify(pokerPlanningRooms))
}