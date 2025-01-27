// src/pages/api/track/[trackingNumber].ts
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { trackingNumber } = req.query;

  // Validate trackingNumber
  if (!trackingNumber || typeof trackingNumber !== 'string') {
    return res.status(400).json({ error: 'Invalid tracking number' });
  }

  const apiKey = process.env.AFTERSHIP_API_KEY; // Use environment variable for API key

  if (!apiKey) {
    return res.status(500).json({ error: 'API key is missing' });
  }

  try {
    const response = await axios.get(`https://api.aftership.com/v4/trackings/${trackingNumber}`, {
      headers: {
        'aftership-api-key': apiKey,
      },
    });

    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
}