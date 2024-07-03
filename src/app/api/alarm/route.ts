import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/alarm:
 *   get:
 *     summary: Retrieve a list of alarms
 *     responses:
 *       200:
 *         description: A list of alarms
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
 *                   date:
 *                     type: string
 *                   created_at:
 *                     type: string
 */
export async function GET(request: NextRequest) {
    const alarms = [
        {
            id: 1,
            name: "Bangun Tidur",
            time: "06.00 AM",
            date: "Friday, May 24",
            created_at: "2021-05-24T18:00:00.000Z",
        },
        {
            id: 2,
            name: "Makan Siang",
            time: "11.00 AM",
            date: "Friday, May 24",
            created_at: "2021-05-24T18:00:00.000Z",
        },
        {
            id: 3,
            name: "Sore Santai",
            time: "04.00 PM",
            date: "Friday, May 24",
            created_at: "2021-05-24T18:00:00.000Z",
        },
    ];
    return NextResponse.json(alarms, { status: 200 });
}

/**
 * @swagger
 * /api/alarm:
 *   post:
 *     summary: Create a new alarm
 *     responses:
 *       201:
 *         description: Alarm created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
export async function POST(request: NextRequest) {
    return NextResponse.json({ message: "Alarm created" }, { status: 201 });
}