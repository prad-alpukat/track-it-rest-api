import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Param {
    id: number;
}

export async function get({ param: { id } }: { param: Param }) {
    const event = await prisma.calendar.findUnique({
        where: {
            id: id
        }
    });
    return NextResponse.json(event, { status: 200 });
}