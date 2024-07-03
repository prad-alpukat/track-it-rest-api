import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Retrieve a list of tasks
 *      tags:
 *      - Task
 *     responses:
 *       200:
 *         description: A list of tasks
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
 *                   description:
 *                     type: string
 *                   completed:
 *                     type: boolean
 */
export async function GET(request: NextRequest) {
    const tasks = [
        {
            id: 1,
            name: "Membersihkan rumah",
            description: "membersihkan rumah jam 10 pagi",
            completed: false,
        },
        {
            id: 2,
            name: "Update website halaman about",
            description: "update responsiveness website halaman about jam 2 siang",
            completed: false,
        },
        {
            id: 3,
            name: "Buy groceries",
            description: "buy groceries for the week",
            completed: true,
        },
        {
            id: 4,
            name: "Finish coding assignment",
            description: "complete the coding assignment by tomorrow",
            completed: false,
        },
        {
            id: 5,
            name: "Attend meeting",
            description: "attend the project meeting at 3 PM",
            completed: false,
        }
    ];
    return NextResponse.json(tasks, { status: 200 });
}
