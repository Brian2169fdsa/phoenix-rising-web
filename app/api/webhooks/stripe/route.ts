import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      console.log('Payment completed:', session.id, session.amount_total);
      break;
    }
    case 'customer.subscription.created': {
      const subscription = event.data.object;
      console.log('Subscription created:', subscription.id);
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      console.log('Subscription cancelled:', subscription.id);
      break;
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object;
      console.log('Payment failed:', invoice.id);
      break;
    }
    default:
      console.log('Unhandled event type:', event.type);
  }

  return NextResponse.json({ received: true });
}
