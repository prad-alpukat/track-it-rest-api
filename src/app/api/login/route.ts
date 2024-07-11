import { NextResponse, NextRequest } from "next/server";

// login function

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login user
 *     tags: 
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
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
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 *       400:
 *         description: Please provide all the required fields
 */
export async function POST(request: NextRequest) {
    const body = await request.json();

    if (!body.email || !body.password) {
        return NextResponse.json({ message: "Please provide all the required fields" }, { status: 400 });
    }

    const users = [
        {
            id: 1,
            username: "syalwa",
            email: "syalwa@gmail.com",
            password: "syalwapassword",
        },
        {
            id: 2,
            username: "anton",
            email: "anton@gmail.com",
            password: "antonpassword"
        }
    ]

    // check email and password
    const user = users.find(user => user.email === body.email && user.password === body.password);

    if (!user) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // return response
    const response = {
        id: user.id,
        username: user.username,
        email: user.email
    }

    return NextResponse.json(response, { status: 200 });
}