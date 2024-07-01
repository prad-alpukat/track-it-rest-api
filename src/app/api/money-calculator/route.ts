import { NextRequest, NextResponse } from 'next/server';


/**
 * @swagger
 * /api/money-calculator:
 *   get:
 *     summary: Retrieve a list of transactions
 *     description: Retrieve a list of transactions with their details
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
 *                     description: The transaction ID
 *                   type:
 *                     type: string
 *                     description: The type of transaction (income/expense)
 *                   amount:
 *                     type: number
 *                     description: The amount of the transaction
 *                   description:
 *                     type: string
 *                     description: The description of the transaction
 */
export async function GET(request: NextRequest) {
    const transactions = [
        { id: 1, type: 'income', amount: 1000, description: 'Salary' },
        { id: 2, type: 'expense', amount: 200, description: 'Groceries' },
    ];
    return NextResponse.json(transactions, { status: 200 });
}
