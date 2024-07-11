import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/money-calculator/finance:
 *   get:
 *     summary: Retrieve the finance details
 *     tags:
 *      - Money Calculator / finance
 *     responses:
 *       200:
 *         description: The finance details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 date: 
 *                   type: string
 *                 income:
 *                   type: integer
 *                 expenditure:
 *                   type: integer
 */
export async function GET() {
    const finance = {
        date: new Date().toISOString(),
        income: 1_000_000,
        expenditure: 2_00_000,
    }
    return NextResponse.json(finance, { status: 200 });
}
