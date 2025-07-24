import { databases } from '@/functions/appwrite';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const data = await databases.getDocument(
			process.env.APPWRITE_DATABASE_ID!,
			process.env.APPWRITE_COLLECTION_ID!,
			'686bbf0800393943fefb'
		);

		return NextResponse.json({ data });
	} catch (error) {
		console.error('Appwrite error:', error);
		return NextResponse.json({ error: 'Failed to fetch document' }, { status: 500 });
	}
}
