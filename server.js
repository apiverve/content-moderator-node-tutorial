/**
 * Content Moderator - Tutorial Example
 *
 * A simple Express server for filtering profanity using the APIVerve API.
 * https://apiverve.com/marketplace/profanityfilter
 */

const express = require('express');
const path = require('path');

// ============================================
// CONFIGURATION - Add your API key here
// Get a free key at: https://dashboard.apiverve.com
// ============================================
const API_KEY = process.env.API_KEY || 'your-api-key-here';
const API_URL = 'https://api.apiverve.com/v1/profanityfilter';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static('public'));

// API endpoint to filter profanity
app.post('/api/moderate', async (req, res) => {
  const { text, mask = '*' } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  if (API_KEY === 'your-api-key-here') {
    return res.status(500).json({
      error: 'API key not configured. Set API_KEY environment variable or edit server.js'
    });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
      },
      body: JSON.stringify({ text, mask })
    });

    const data = await response.json();

    if (data.status === 'ok') {
      res.json({
        success: true,
        original: text,
        filtered: data.data.filteredText,
        isProfane: data.data.isProfane,
        profaneWords: data.data.profaneWords || 0,
        mask: data.data.mask
      });
    } else {
      res.status(400).json({ error: data.error || 'Moderation failed' });
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ error: 'Failed to moderate content' });
  }
});

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Content Moderator running at http://localhost:${PORT}\n`);
});
