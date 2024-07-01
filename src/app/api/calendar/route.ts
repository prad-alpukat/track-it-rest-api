import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const events = [
        { id: '1', title: 'Event 1', start: '2023-07-01T10:00:00' },
        { id: '2', title: 'Event 2', start: '2023-07-02T12:00:00' },
    ];
    return NextResponse.json(events, { status: 200 });
}
