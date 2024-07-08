import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * @swagger
 * /api/calendar:
 *   get:
 *     summary: Retrieve a list of events
 *     description: Retrieve a list of events with their details
 *     tags: 
 *       - Calendar
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
    const data = request
    const url = new URL(data.url)
    const date = url.searchParams.get('date')

    if (!date) {
        const events = await prisma.calendar.findMany();
        return NextResponse.json(events, { status: 200 });
    }

    const events = await prisma.calendar.findMany({
        where: {
            OR: [
                {
                    start: {
                        contains: date,
                    },
                },
                {
                    end: {
                        contains: date,
                    },
                },
            ],
        },
    });

    return NextResponse.json(events, { status: 200 });
}


/**
 * @swagger
 * /api/calendar:
 *   post:
 *     summary: Create a new event
 *     description: Create a new event with details
 *     tags: 
 *       - Calendar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The event title
 *               start:
 *                 type: string
 *                 format: date-time
 *                 description: The start time of the event
 *               end:
 *                 type: string
 *                 format: date-time
 *                 description: The end time of the event
 *             required:
 *               - title
 *               - start
 *               - end
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The event ID
 *                 title:
 *                   type: string
 *                   description: The event title
 *                 start:
 *                   type: string
 *                   format: date-time
 *                   description: The start time of the event
 *                 end:
 *                   type: string
 *                   format: date-time
 *                   description: The end time of the event
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: The creation time of the event
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: The last update time of the event
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { title, start, end } = data;

    if (!title || !start || !end) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        const newEvent = await prisma.calendar.create({
            data: {
                title,
                start: new Date(start).toDateString(),
                end: new Date(end).toDateString(),
            },
        });
        return NextResponse.json(newEvent, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}