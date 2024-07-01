import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];
    return NextResponse.json(users, { status: 200 });
}
