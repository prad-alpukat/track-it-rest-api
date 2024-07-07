import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

interface Params {
    id: string
}

/**
* @swagger
* /api/alarm/{id}:
*   delete:
*     summary: Delete an alarm by ID
*     tags:
*      - Alarm
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The alarm ID
*     responses:
*       204:
*         description: Alarm deleted successfully
*       404:
*         description: Alarm not found
*       500:
*         description: Internal server error
*/
export async function DELETE(request: NextRequest, { params }: { params: Params }) {
    const { id } = params;

    try {
        await prisma.alarm.delete({
            where: { id: Number(id) },
        });

        return NextResponse.json({
            message: 'Alarm deleted successfully',
        }, {
            status: 200
        });
    } catch (error: unknown) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
            return NextResponse.json({ error: 'Alarm not found' }, { status: 404 });
        }
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
