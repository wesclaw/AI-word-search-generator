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
//         content: 'make me a word serch puzzle for the topic space. 5 rows with 5 columns of letters. only one word to find.'
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


require('dotenv').config()

const PORT = process.env.PORT

const express = require('express')
const path = require('path')

const OpenAI = require('openai').OpenAI;

const app = express()

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
})

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(PORT, ()=>{
  console.log('server is on port 3000')
})







