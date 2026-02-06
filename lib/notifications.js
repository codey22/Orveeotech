import nodemailer from 'nodemailer';

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your preferred provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email notification
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {Array} options.attachments - Array of attachments
 */
export async function sendEmail({ to, subject, html, attachments = [] }) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not found. Skipping email sending.');
    return;
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      attachments,
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    // Don't throw, just log so other processes continue
  }
}

/**
 * Sends a WhatsApp notification
 * Uses Twilio API as a standard example. 
 * Requires TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM
 * @param {string} to - Recipient phone number (e.g., '+918961779987')
 * @param {string} message - Message content
 */
export async function sendWhatsApp(to, message) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'

  if (!accountSid || !authToken || !from) {
    console.warn('Twilio credentials not found. Skipping WhatsApp sending.');
    return;
  }

  try {
    // Basic formatting for WhatsApp number if not already formatted
    const formattedTo = to.startsWith('whatsapp:') ? to : `whatsapp:${to.replace(/\s+/g, '')}`;

    const response = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: formattedTo,
        From: from,
        Body: message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Twilio API Error');
    }
  } catch (error) {
    console.error('Failed to send WhatsApp:', error);
  }
}
