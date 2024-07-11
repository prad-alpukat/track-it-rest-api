import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     summary: Retrieve a note
 *     description: Retrieve a note with its details
 *     tags:
 *       - Notes
 *     responses:
 *       200:
 *         description: A note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The note ID
 *                 date:
 *                   type: string
 *                   description: The date of the note
 *                 name:
 *                   type: string
 *                   description: The name of the note
 *                 description:
 *                   type: string
 *                   description: The description of the note
 */
export async function GET(request: NextRequest) {
    const note = {
        id: 1,
        date: "24 May 2024, 06.00 PM",
        name: "Beli Bahan Baku",
        description: "Beli bahan baku untuk produksi minggu depan",
    };
    return NextResponse.json(note, { status: 200 });
}

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Retrieve a note
 *     description: Retrieve a note with its details
 *     tags:
 *       - Notes
 *     responses:
 *       200:
 *         description: A note
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The note ID
 *                 date:
 *                   type: string
 *                   description: The date of the note
 *                 name:
 *                   type: string
 *                   description: The name of the note
 *                 description:
 *                   type: string
 *                   description: The description of the note
 */
export async function DELETE() {
    return NextResponse.json({ message: "Note deleted" }, { status: 200 });
}