const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const OpenAI = require('openai').OpenAI;
require('dotenv').config(); 

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const openaiApiKey = process.env.OPENAIAPIKEY;

if (!openaiApiKey) {
  throw new Error("The OPENAI_API_KEY environment variable is missing or empty.");
}

const openai = new OpenAI({ apiKey: openaiApiKey });

// Serve static files from the 'public' directory
app.use(express.static('public'));

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('A client connected.');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Echo the received message back to the client
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

// Start the HTTP server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});