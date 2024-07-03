import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/calendar:
 *   get:
 *     summary: Retrieve a list of events
 *     description: Retrieve a list of events with their details
 *     responses:
 *       200:
 *         description: A list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The event ID
 *                   title:
 *                     type: string
 *                     description: The event title
 *                   start:
 *                     type: string
 *                     format: date-time
 *                     description: The start time of the event
 *                   end:
 *                     type: string
 *                     format: date-time
 *                     description: The end time of the event
 */
export async function GET(request: NextRequest) {
    const events = [
        { id: 1, title: "Title 1", start: "2024-05-02", end: "2024-05-02" },
        { id: 2, title: "Title 2", start: "2024-05-03", end: "2024-05-03" },
        { id: 3, title: "Title 3", start: "2024-05-04", end: "2024-05-04" },
    ];
    return NextResponse.json(events, { status: 200 });
}

/**
 * @swagger
 * /api/calendar:
 *   post:
 *     summary: Create a new event
 *     description: Create a new event with the provided details
 */
export async function POST(request: NextRequest) {
    return NextResponse.json({ message: "Event created" }, { status: 201 });
}
