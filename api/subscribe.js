export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://joefuqua.blog');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { email } = req.body;
  if (!email) return res.status(400).send('Empty body');

  const response = await fetch(
    'https://api.beehiiv.com/v2/publications/pub_f615b87c-5293-4351-a178-482a353c496b/subscriptions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'joefuqua.blog',
        utm_medium: 'website',
      }),
    }
  );

  const text = await response.text();
  return res.status(response.ok ? 200 : 400).send(response.ok ? 'ok' : text);
}
