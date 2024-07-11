import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     summary: Retrieve a note
 *     description: Retrieve a note with its details
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
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

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Update a note
 *     description: Update a note with the given name and description
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();
    if (!body.name || !body.description) {
        return NextResponse.json({ message: "Name and description are required" }, { status: 400 });
    }


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

    const note = notes.find((note) => note.id === parseInt(id));

    return NextResponse.json(note, { status: 200 });
}