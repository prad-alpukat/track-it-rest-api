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
