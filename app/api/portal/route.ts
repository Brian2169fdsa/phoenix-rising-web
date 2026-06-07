import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { customerId } = await req.json();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${siteUrl}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Portal session error:', err);
    return NextResponse.json({ error: 'Failed to create portal session' }, { status: 500 });
  }
}
