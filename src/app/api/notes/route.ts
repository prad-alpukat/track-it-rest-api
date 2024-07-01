import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const notes = [
        { id: 1, content: 'Buy milk' },
        { id: 2, content: 'Attend meeting at 10 AM' },
    ];
    return NextResponse.json(notes, { status: 200 });
}
