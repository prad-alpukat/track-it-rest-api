import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const tasks = [
        { id: 1, title: 'Finish project', completed: false },
        { id: 2, title: 'Clean the house', completed: true },
    ];
    return NextResponse.json(tasks, { status: 200 });
}
