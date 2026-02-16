# Content Moderator | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000)](https://expressjs.com)
[![APIVerve | Profanity Filter](https://img.shields.io/badge/APIVerve-Profanity_Filter-purple)](https://apiverve.com/marketplace/profanityfilter?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial)

A Node.js web app for filtering profanity from user-generated content. Perfect for moderating comments, chat messages, and user submissions.

![Screenshot](https://raw.githubusercontent.com/apiverve/content-moderator-node-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial)** - no credit card required.

---

## Features

- Filter profanity from any text input
- Customizable mask character (*, #, etc.)
- Shows filtered result and flagged words
- Clean/Flagged status indicator
- Count of profane words found
- Modern, responsive UI
- Built with Express.js

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/content-moderator-node-tutorial.git
   cd content-moderator-node-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your API key**

   Set environment variable or edit `server.js`:
   ```bash
   export API_KEY=your-api-key-here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**

   Visit http://localhost:3000 and test the moderator!

## Project Structure

```
content-moderator-node-tutorial/
├── server.js           # Express server & API endpoint
├── public/
│   └── index.html      # Frontend UI
├── package.json        # Dependencies
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. User enters text in the web interface
2. Frontend sends POST request to `/api/moderate`
3. Server calls the Profanity Filter API
4. API returns filtered text and flagged words
5. Frontend displays results with status

### The API Call

```javascript
const response = await fetch('https://api.apiverve.com/v1/profanityfilter', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  },
  body: JSON.stringify({
    text: 'Text to moderate',
    mask: '*'
  })
});
```

## API Reference

**Endpoint:** `POST https://api.apiverve.com/v1/profanityfilter`

**Request Body:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | Text to filter |
| `mask` | string | No | Character to replace profanity (default: *) |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "filteredText": "What the **** is going on?",
    "hasProfanity": true,
    "profanityCount": 1,
    "profanityWords": ["****"]
  }
}
```

## Use Cases

- **Comment moderation** - Filter user comments before posting
- **Chat applications** - Real-time message filtering
- **User profiles** - Validate usernames and bios
- **Reviews** - Clean up product/service reviews
- **Forums** - Moderate discussion posts
- **Gaming** - Filter in-game chat

## Customization Ideas

- Add batch processing for multiple texts
- Save moderation history to database
- Add different severity levels
- Implement allow/block lists
- Add real-time filtering as you type
- Build a moderation dashboard with statistics

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial):

- [Spam Detector](https://apiverve.com/marketplace/spamdetector?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial) - Detect spam content
- [Sentiment Analysis](https://apiverve.com/marketplace/sentimentanalysis?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial) - Analyze text sentiment
- [Content Filter](https://apiverve.com/marketplace/contentfilter?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial) - Advanced content filtering

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial) - Browse 300+ APIs
- [Profanity Filter API](https://apiverve.com/marketplace/profanityfilter?utm_source=github&utm_medium=tutorial&utm_campaign=content-moderator-node-tutorial) - API details
