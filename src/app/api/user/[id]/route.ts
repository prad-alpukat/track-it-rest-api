import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: Retrieve a user
 *     description: Retrieve a user with its details
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The user ID
 *                 username:
 *                   type: string
 *                   description: The username of the user
 *                 email:
 *                   type: string
 *                   description: The email of the user
 */
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params

    const users = [
        { id: 1, username: 'John Doe', email: 'jhon@gmail.com' },
        { id: 2, username: 'Jane Smith', email: 'jane@gmail.com' },
    ];

    const user = users.find((user) => user.id === parseInt(id));
    return NextResponse.json(user, { status: 200 });
}