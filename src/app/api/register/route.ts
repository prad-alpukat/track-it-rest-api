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
 *                 email:
 *                   type: string
 *                   description: The email of the user
 */
export async function POST(request: NextRequest) {

    // get the body of the request
    const body = await request.json();

    // validate the body
    if (!body.email || !body.password) {
        return NextResponse.json({ message: "Please provide all the required fields" }, { status: 400 });
    }

    // create username
    const username = body.email.split("@")[0];

    const new_user = {
        id: 17,
        username: username,
        email: body.email
    }

    // return body json
    return NextResponse.json(new_user, { status: 200 });

}