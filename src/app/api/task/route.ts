import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     description: Retrieve a list of tasks with their details
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
 *                     description: The task ID
 *                   title:
 *                     type: string
 *                     description: The title of the task
 *                   completed:
 *                     type: boolean
 *                     description: The status of the task
 */

export async function GET(request: NextRequest) {
    const tasks = [
        { id: 1, title: 'Finish project', completed: false },
        { id: 2, title: 'Clean the house', completed: true },
    ];
    return NextResponse.json(tasks, { status: 200 });
}
