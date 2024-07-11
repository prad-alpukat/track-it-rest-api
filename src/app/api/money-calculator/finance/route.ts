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
 *                 month:
 *                   type: string
 *                   example: May
 *                 year:
 *                   type: string
 *                   example: 2024
 *                 income:
 *                   type: integer
 *                 expenditure:
 *                   type: integer
 */
export async function GET() {
    const finance = {
        month: "May",
        year: "2024",
        income: 1_000_000,
        expenditure: 2_00_000,
    }
    return NextResponse.json(finance, { status: 200 });
}
