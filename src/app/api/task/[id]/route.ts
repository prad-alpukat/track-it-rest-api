import { NextRequest, NextResponse } from "next/server";

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
            name: "Planning"
        }
    ];
    return NextResponse.json(reminders, { status: 200 });
}