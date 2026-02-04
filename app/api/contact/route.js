import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/notifications';

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

    // Notification Content
    const emailSubject = `New Contact Form Submission: ${body.name}`;
    const emailHtml = `
      <h2>New Message Received</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #b91c1c;">${body.message}</p>
      <br>
      <p><small>This email was sent automatically from the Orveeotech website.</small></p>
    `;

    // Execute DB Save and Email Sending in Parallel
    // This reduces the wait time by running them simultaneously
    const [contact] = await Promise.all([
      Contact.create(body),
      process.env.ADMIN_EMAIL 
        ? sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: emailSubject,
            html: emailHtml
          }) 
        : Promise.resolve()
    ]);

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
