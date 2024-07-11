import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     summary: Retrieve a task
 *     description: Retrieve a task with its details
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: A task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The task ID
 *                 name:
 *                   type: string
 *                   description: The name of the task
 *                 description:
 *                   type: string
 *                   description: The description of the task
 *                 completed:
 *                   type: boolean
 *                   description: The completion status of the task
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const task = {
        id: id,
        name: "Membersihkan rumah",
        description: "membersihkan rumah jam 12 pagi",
        completed: false,
    }
    return NextResponse.json(task, { status: 200 });
}

/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     summary: Delete a task
 *     description: Delete a task by its ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: A task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 */
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    return NextResponse.json({ id }, { status: 200 });
}

// update the task
/**
 * @swagger
 * /api/task/{id}:
 *   put:
 *     summary: Update a task
 *     description: Update a task by its ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: A task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 completed:
 *                   type: boolean
 */
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const task = {
        id: id,
        name: "Membersihkan rumah",
        description: "membersihkan rumah jam 12 pagi",
        completed: true,
    }
    return NextResponse.json(task, { status: 200 });
}