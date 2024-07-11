import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/money-calculator/balance:
 *   get:
 *     summary: Retrieve a list of balances
 *     tags:
 *      - Money Calculator / balance
 *     responses:
 *       200:
 *         description: A list of balances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   money:
 *                     type: integer
 */
export async function GET(request: NextRequest) {
  const transactions = [
    {
      id: 1,
      name: "Balance A",
      money: 5_000_000,
    },
    {
      id: 2,
      name: "Balance B",
      money: 10_000_000,
    },
  ];
  return NextResponse.json(transactions, { status: 200 });
}

/**
 * @swagger
 * /api/money-calculator/balance:
 *   post:
 *     summary: Create a new balance
 *     tags:
 *      - Money Calculator / balance
 */
export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "Balance created" }, { status: 201 });
}

// update balance