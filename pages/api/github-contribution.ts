import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = req.query.username || 'Dimas-es';
  const token = process.env.GITHUB_TOKEN; // simpan di .env.local, jangan expose ke browser!

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                color
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  if (data.errors) {
    return res.status(500).json({ error: data.errors });
  }
  res.status(200).json(data.data.user.contributionsCollection.contributionCalendar);
}