import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface Error {
    error: {
        message: string | unknown,
        code?: number
    }
}

/**
 * @swagger
 * /api/alarm:
 *   get:
 *     summary: Retrieve a list of alarms
 *     tags: 
 *      - Alarm
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

    const alarms = await prisma.alarm.findMany();

    return NextResponse.json(alarms, { status: 200 });
}

/**
 * @swagger
 * /api/alarm:
 *   post:
 *     summary: Create a new alarm
 *     tags:
 *      - Alarm
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Bangun Tidur"
 *               time:
 *                 type: string
 *                 example: "06:00:00 AM"
 *               date:
 *                 type: string
 *                 example: "Friday, May 24, 2024"
 *             required:
 *               - name
 *               - time
 *               - date
 *     responses:
 *       201:
 *         description: Alarm created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Bangun Tidur"
 *                 time:
 *                   type: string
 *                   example: "06:00:00 AM"
 *                 date:
 *                   type: string
 *                   example: "Friday, May 24, 2024"
 *                 createdAt:
 *                   type: string
 *                   example: "2021-05-24T18:00:00.000Z"
 *                 updatedAt:
 *                   type: string
 *                   example: "2021-05-24T18:00:00.000Z"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "All fields are required"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
export async function POST(request: NextRequest) {
    const data = await request.json();
    const { name, time, date } = data;

    if (!name || !time || !date) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    try {
        const newAlarm = await prisma.alarm.create({
            data: { name, time, date },
        });
        return NextResponse.json(newAlarm, { status: 201 });
    } catch (error: Error | any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

