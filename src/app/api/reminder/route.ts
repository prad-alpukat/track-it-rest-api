import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/reminder:
 *   get:
 *     summary: Retrieve a list of reminders
 *     description: Retrieve a list of reminders with their details
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
 *                     description: The reminder ID
 *                   title:
 *                     type: string
 *                     description: The title of the reminder
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the reminder
 */

export async function GET(request: NextRequest) {
    const reminders = [
        { id: 1, title: 'Doctor appointment', date: '2023-07-05' },
        { id: 2, title: 'Submit report', date: '2023-07-10' },
    ];
    return NextResponse.json(reminders, { status: 200 });
}
