import { NextRequest, NextResponse, userAgent } from 'next/server';


export async function GET(req: NextRequest) {
    const a = userAgent(req);
    return NextResponse.json({ a });
}