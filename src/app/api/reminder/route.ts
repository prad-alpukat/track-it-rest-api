import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/reminder:
 *   get:
 *     summary: Retrieve a list of reminders
 *     tags: 
 *       - Reminders
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

/**
 * @swagger
 * /api/reminder:
 *   post:
 *     summary: Create a new reminder
 *     tags: 
 *       - Reminders
 *     responses:
 *       200:
 *         description: A reminder
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 time:
 *                   type: string
 */
export async function POST(request: NextRequest) {
    const reminder = {
        id: 3,
        name: "Meeting",
        time: "10.00 AM",
    };
    return NextResponse.json(reminder, { status: 200 });
}
