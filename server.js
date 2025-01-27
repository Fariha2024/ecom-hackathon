const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const apiKey = 'YOUR_API_KEY'; // Replace with your AfterShip API key

app.get('/track/:trackingNumber', async (req, res) => {
  const { trackingNumber } = req.params;

  try {
    const response = await axios.get(`https://api.aftership.com/v4/trackings/${trackingNumber}`, {
      headers: {
        'aftership-api-key': apiKey,
      },
    });

    res.json(response.data); // Send tracking data as JSON response
  } catch (error) {
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});