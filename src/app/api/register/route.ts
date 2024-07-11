import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a user
 *     description: Register a user with its details
 *     tags:
 *       - Register
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
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
export async function POST(request: NextRequest) {

    // get the body of the request
    const body = await request.json();

    // validate the body
    if (!body.username || !body.email || !body.password) {
        return NextResponse.json({ message: "Please provide all the required fields" }, { status: 400 });
    }

    const new_user = {
        id: 17,
        username: body.username,
        email: body.email
    }

    // return body json
    return NextResponse.json(new_user, { status: 200 });

}