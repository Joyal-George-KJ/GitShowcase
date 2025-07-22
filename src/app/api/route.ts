import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl

    const name = searchParams.get('name');
    
    // return NextResponse.json({ message: `Hello ${name}` })
    return NextResponse.redirect(new URL('/', req.url))
    
}

export async function POST(req: NextRequest) {
    console.log(req);
    
    return NextResponse.json({ message: `Hello World ${req?.body}` })
}

export async function PUT(req: NextRequest) {
    console.log(req);
    
    return NextResponse.json({ message: `Hello World ${req?.body}` })
}

