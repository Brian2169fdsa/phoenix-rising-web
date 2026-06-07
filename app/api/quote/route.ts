import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, details, address } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Phoenix Rising <noreply@phoenixrisingwindowcleaning.com>',
      to: process.env.CONTACT_TO_EMAIL || 'hello@phoenixrisingwindowcleaning.com',
      subject: `Quote request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Address:</strong> ${address || 'Not provided'}</p>
        <hr />
        <p><strong>Details:</strong></p>
        <p>${(details || '').replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Quote email error:', err);
    return NextResponse.json({ error: 'Failed to send quote request' }, { status: 500 });
  }
}
