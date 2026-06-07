import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, amount, email, mode = 'payment', priceId } = body;

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const sessionConfig: Parameters<typeof stripe.checkout.sessions.create>[0] = {
      mode: mode as 'payment' | 'subscription',
      customer_email: email,
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}&plan=${plan}&total=${amount}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
      metadata: { plan },
    };

    if (mode === 'subscription' && priceId) {
      sessionConfig.line_items = [{ price: priceId, quantity: 1 }];
    } else {
      sessionConfig.line_items = [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Phoenix Rising Window Cleaning',
              description: `Service: ${plan || 'Window Cleaning'}`,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ];
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Checkout session error:', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
