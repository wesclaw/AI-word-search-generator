// require('dotenv').config()
// const OpenAI = require('openai')

// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI_API_KEY,
// })

// async function main() {
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       {
//         role: 'system',
//         content: 'make me a word serch puzzle for the topic space. 10 rows with 10 columns of letters. only one word to find and its diagonal.'
//       },
//       {
//         role: 'user',
//         content: 'space', 
//       }
//     ]
//   })
//   const openAIResponse = response.choices[0].message.content

//   console.log(openAIResponse)
// }

// main()















// const WebSocket = require('ws')
// const wss = new WebSocket.Server({ port: 3000 })

// wss.on('connection', ws => {
//   console.log('client connected')

//   ws.on('close',()=>{
//     console.log('client has disconnected')
//   })
// })



require('dotenv').config();
const OpenAI = require('openai');
const WebSocket = require('ws');

// Configure OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

// Create WebSocket server
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {
  console.log('client connected');

  // Handle disconnection
  ws.on('close', () => {
    console.log('client has disconnected');
  });

  // Function to fetch data from OpenAI API and send it to the client
  async function fetchAndSendPuzzle() {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a puzzle generator. Ensure the following instructions are strictly followed.'

          },
          {
            role: 'user',
            content: 'make me a word search game. the game must have 10 random letters across and 10 random letters down. Letters from A-Z in random places. for example: A R Y F E Q A U E T. do you see how there are 10 letters on each row?'
          }
        ]
      });
      const openAIResponse = response.choices[0].message.content;

      // Send the OpenAI response to the connected client
      ws.send(openAIResponse);
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      ws.send('Error fetching data from OpenAI');
    }
  }

  // Fetch and send the puzzle when a client connects
  fetchAndSendPuzzle();
});

console.log('WebSocket server is running on ws://localhost:3000');