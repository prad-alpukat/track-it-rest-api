import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/reminder:
 *   get:
 *     summary: Retrieve a list of reminders
 *     responses:
 *       200:
 *         description: A list of reminders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   time:
 *                     type: string
 */

export async function GET(request: NextRequest) {
    const reminders = [
        {
            id: 1,
            name: "Gaji Karyawan",
            time: "08.00 AM",
        },
        {
            id: 2,
            name: "Rapat Pagi",
            time: "09.00 AM",
        },
    ];
    return NextResponse.json(reminders, { status: 200 });
}
