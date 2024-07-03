import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/money-calculator/finance:
 *   get:
 *     summary: Retrieve the finance details
 *     tags:
 *      - Money Calculator
 *     responses:
 *       200:
 *         description: The finance details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 income:
 *                   type: integer
 *                 expenditure:
 *                   type: integer
 */
export async function GET() {
    const finance = {
        income: 1_000_000,
        expenditure: 2_00_000,
    }
    return NextResponse.json(finance, { status: 200 });
}

/**
 * @swagger
 * /api/money-calculator/finance:
 *   post:
 *     summary: Create a new finance detail
 *     tags:
 *      - Money Calculator
 */

export async function POST() {
    return NextResponse.json({ message: "Finance detail created" }, { status: 201 });
}