import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/money-calculator/transaction:
 *   get:
 *     summary: Retrieve a list of transactions
 *     responses:
 *       200:
 *         description: A list of transactions
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
 *                   balance_name:
 *                     type: string
 *                   money:
 *                     type: integer
 */
export async function GET(request: NextRequest) {
  const transactions = [
    {
      id: 1,
      name: "Redmi Note 6",
      balance_name: "Balance A",
      money: -2_000_000,
    },
    {
      id: 3,
      name: "Redmi Note 10 Pro",
      balance_name: "Balance A",
      money: -3_000_000,
    },
    {
      id: 3,
      name: "Ideapad 3 14ARE05",
      balance_name: "Balance B",
      money: -10_000_000,
    },
  ];
  return NextResponse.json(transactions, { status: 200 });
}

/**
 * @swagger
 * /api/money-calculator/transaction:
 *   post:
 *     summary: Create a new transaction
 */
export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "Transaction created" }, { status: 201 });
}
