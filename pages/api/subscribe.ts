import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  const { email, locale } = req.body;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error('[Subscribe API] Missing environment variables: RESEND_API_KEY or RESEND_AUDIENCE_ID');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const resendResponse = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        unsubscribed: false,
        properties: {
          locale: typeof locale === 'string' ? locale.trim() : 'en',
          site: 'axem-sx.org'
        }
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error('[Subscribe API] Resend error:', errorData);
      
      // Handle the case where contact already exists to avoid throwing an error
      if (errorData.message && errorData.message.toLowerCase().includes('already exists')) {
        return res.status(200).json({ success: true, message: 'Already subscribed' });
      }

      return res.status(resendResponse.status).json({ error: errorData.message || 'Failed to subscribe' });
    }

    const data = await resendResponse.json();
    return res.status(200).json({ success: true, id: data.id });
  } catch (err: any) {
    console.error('[Subscribe API] Error connecting to Resend:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
