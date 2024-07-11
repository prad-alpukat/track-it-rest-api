import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Retrieve a list of notes
 *     description: Retrieve a list of notes with their details
 *     tags:
 *       - Notes
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
 *                   date:
 *                     type: string
 *                     description: The date of the note
 *                   name:
 *                     type: string
 *                     description: The name of the note
 *                   description:
 *                     type: string
 *                     description: The description of the note
 */

export async function GET(request: NextRequest) {
    const notes = [
        {
            id: 1,
            date: "24 May 2024, 06.00 PM",
            name: "Beli Bahan Baku",
            description: "Beli bahan baku untuk produksi minggu depan",
        },
        {
            id: 2,
            date: "24 May 2024, 06.00 PM",
            name: "Bayar Gaji Karyawan",
            description: "Bayar gaji karyawan minggu ini",
        },
    ];
    return NextResponse.json(notes, { status: 200 });
}

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a new note
 *     description: Create a new note with the given name and description
 *     tags:
 *       - Notes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the note
 *               description:
 *                 type: string
 *                 description: The description of the note
 *     responses:
 *       201:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The response message
 *                 note:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The note ID
 *                     date:
 *                       type: string
 *                       description: The date of the note
 *                     name:
 *                       type: string
 *                       description: The name of the note
 *                     description:
 *                       type: string
 *                       description: The description of the note
 */
export async function POST(request: NextRequest) {
    // validate request body
    const body = await request.json();
    if (!body.name || !body.description) {
        return NextResponse.json({ message: "Name and description are required" }, { status: 400 });
    }

    const response_success = {
        message: "Note created successfully",
        note: {
            id: 3,
            date: "24 May 2024, 06.00 PM",
            name: body.name,
            description: body.description,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        },
    };

    return NextResponse.json(response_success, { status: 201 });
}