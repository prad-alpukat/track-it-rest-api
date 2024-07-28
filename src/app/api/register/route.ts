import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

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
export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Validasi input
        if (!email || !password) {
            return new NextResponse('Missing fields', { status: 400 });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user baru di database
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}