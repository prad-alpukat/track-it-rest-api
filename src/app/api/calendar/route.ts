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
        { id: '1', title: 'Event 1', start: '2023-07-01T10:00:00', end: '2023-07-01T12:00:00' },
        { id: '2', title: 'Event 2', start: '2023-07-02T12:00:00', end: '2023-07-02T14:00:00' },
    ];
    return NextResponse.json(events, { status: 200 });
}
