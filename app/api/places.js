import axios from 'axios';

export default async function handler(req, res) {
  const { query } = req.query;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}