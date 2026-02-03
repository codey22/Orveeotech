import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    await dbConnect();

    const contact = await Contact.create(body);

    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit message. Please try again.' },
      { status: 500 }
    );
  }
}
