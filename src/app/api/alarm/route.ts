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
 *                   time:
 *                     type: string
 *                   label:
 *                     type: string
 */
export async function GET(request: NextRequest) {
    const alarms = [
        { id: 1, time: '07:00', label: 'Morning Alarm' },
        { id: 2, time: '18:00', label: 'Evening Alarm' },
    ];
    return NextResponse.json(alarms, { status: 200 });
}
