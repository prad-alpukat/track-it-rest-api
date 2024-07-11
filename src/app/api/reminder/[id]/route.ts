import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/reminder/{id}:
 *   get:
 *     summary: Retrieve a reminder
 *     description: Retrieve a reminder with its details
 *     tags:
 *       - Reminders
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: A reminder
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The reminder ID
 *                 name:
 *                   type: string
 *                   description: The name of the reminder
 *                 dateTime:
 *                   type: string
 *                   description: The date and time of the reminder
 */
export async function GET(request: NextRequest) {
    const reminder = {
        id: 1,
        name: "Gaji Karyawan",
        dateTime: "2024-07-11T10:20:30Z",
    }
    return NextResponse.json(reminder, { status: 200 });
}

/**
 * @swagger
 * /api/reminder/{id}:
 *   delete:
 *     summary: Delete a reminder
 *     description: Delete a reminder by its ID
 *     tags:
 *       - Reminders
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: A reminder
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const deleted_reminder = {
        message: `Successfully deleted reminder with ID ${id}`,
        data: {
            id: id,
            name: "Gaji Karyawan",
            dateTime: "2024-07-11T10:20:30Z",
        }
    }
    return NextResponse.json(deleted_reminder, { status: 200 });
}
/**
 * @swagger
 * /api/reminder/{id}:
 *   put:
 *     summary: Update a reminder
 *     description: Update a reminder by its ID
 *     tags:
 *       - Reminders
 *     parameters:
 *       - name: id
 *         in: path
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The reminder ID
 *               name:
 *                 type: string
 *                 description: The name of the reminder
 *               dateTime:
 *                 type: string
 *                 description: The date and time of the reminder
 *     responses:
 *       200:
 *         description: A reminder
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The reminder ID
 *                 name:
 *                   type: string
 *                   description: The name of the reminder
 *                 dateTime:
 *                   type: string
 *                   description: The date and time of the reminder
 */
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const updated_reminder = {
        id: id,
        name: "Gaji Karyawan",
        dateTime: "2024-07-11T10:20:30Z",
    }
    return NextResponse.json(updated_reminder, { status: 200 });
}