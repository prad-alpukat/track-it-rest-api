import { NextRequest, NextResponse } from 'next/server';

/**
 * @swagger
 * /api/money-calculator/transaction/{id}:
 *   delete:
 *     summary: Delete a transaction by ID
 *     tags:
 *      - Money Calculator / transaction
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Transaction deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    if (!id) {
        return NextResponse.json({ message: "Transaction ID is required" }, { status: 400 });
    }

    // Assuming we have a function to delete the transaction from the database
    // deleteTransactionById(parseInt(id));

    return NextResponse.json({ message: `Transaction with ID ${id} deleted` }, { status: 200 });
}
