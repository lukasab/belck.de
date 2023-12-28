import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest, { params } : { params: { id: string } }) {
    const pokerPlanningRoom = await prisma.pokerPlanningRoom.findFirst({
        where: {
            id: String(params.id)
        }
    })

    if (!pokerPlanningRoom) {
        return new NextResponse(null, { status: 404 })
    }

    return new NextResponse(JSON.stringify(pokerPlanningRoom), {status: 200})
}