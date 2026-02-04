import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { sendEmail } from '@/lib/notifications';
import * as XLSX from 'xlsx';

export const dynamic = 'force-dynamic'; // Ensure it runs every time

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'weekly' or 'monthly'
    const authHeader = request.headers.get('authorization');

    // Basic security check (Cron job should send a secret)
    // You should define CRON_SECRET in your .env file
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    let startDate = new Date();
    let subject = '';
    let fileNameType = '';
    
    // Set time to beginning of the day for accurate range start (optional, but cleaner)
    // We want records FROM this date onwards.
    
    if (type === 'weekly') {
        // Last 7 days
        startDate.setDate(startDate.getDate() - 7);
        startDate.setHours(0,0,0,0);
        subject = 'Weekly Contact Report';
        fileNameType = 'weekly';
    } else if (type === 'monthly') {
        // First day of current month
        startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        startDate.setHours(0,0,0,0);
        subject = 'Monthly Contact Report';
        fileNameType = 'monthly';
    } else {
        return NextResponse.json({ error: 'Invalid or missing "type" parameter. Use ?type=weekly or ?type=monthly' }, { status: 400 });
    }

    console.log(`Generating ${type} report from ${startDate.toISOString()}`);

    const contacts = await Contact.find({
        createdAt: { $gte: startDate }
    }).sort({ createdAt: -1 }).lean();

    if (contacts.length === 0) {
        return NextResponse.json({ message: 'No new contacts found for this period.', count: 0 });
    }

    // Generate Excel
    const data = contacts.map(c => ({
        Name: c.name,
        Email: c.email,
        Phone: c.phone,
        Message: c.message,
        Date: new Date(c.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) // Formatting for Indian Context given the phone numbers
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    
    // Auto-adjust column widths (approximation)
    const wscols = [
        { wch: 20 }, // Name
        { wch: 25 }, // Email
        { wch: 15 }, // Phone
        { wch: 50 }, // Message
        { wch: 25 }, // Date
    ];
    worksheet['!cols'] = wscols;

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
    
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Send Email
    if (process.env.ADMIN_EMAIL) {
        await sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: `${subject} - ${new Date().toLocaleDateString()}`,
            html: `
                <h3>${subject}</h3>
                <p>Please find attached the consolidated excel report of users who filled the contact form.</p>
                <p><strong>Period:</strong> ${startDate.toLocaleDateString()} to ${new Date().toLocaleDateString()}</p>
                <p><strong>Total Records:</strong> ${contacts.length}</p>
            `,
            attachments: [
                {
                    filename: `contacts-${fileNameType}-${new Date().toISOString().split('T')[0]}.xlsx`,
                    content: buffer
                }
            ]
        });
        return NextResponse.json({ success: true, message: `Report sent to ${process.env.ADMIN_EMAIL}`, count: contacts.length });
    } else {
        return NextResponse.json({ error: 'ADMIN_EMAIL not configured' }, { status: 500 });
    }

  } catch (error) {
    console.error('Cron Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
