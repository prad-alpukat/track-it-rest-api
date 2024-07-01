import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Retrieve a list of notes
 *     description: Retrieve a list of notes with their details
 *     responses:
 *       200:
 *         description: A list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The note ID
 *                   content:
 *                     type: string
 *                     description: The content of the note
 */

export async function GET(request: NextRequest) {
    const notes = [
        { id: 1, content: 'Buy milk' },
        { id: 2, content: 'Attend meeting at 10 AM' },
    ];
    return NextResponse.json(notes, { status: 200 });
}
