import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const transactions = [
        { id: 1, type: 'income', amount: 1000, description: 'Salary' },
        { id: 2, type: 'expense', amount: 200, description: 'Groceries' },
    ];
    return NextResponse.json(transactions, { status: 200 });
}
