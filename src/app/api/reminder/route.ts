import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const reminders = [
        { id: 1, title: 'Doctor appointment', date: '2023-07-05' },
        { id: 2, title: 'Submit report', date: '2023-07-10' },
    ];
    return NextResponse.json(reminders, { status: 200 });
}
