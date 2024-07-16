///set up a node server
///we can use express to simplify this process

require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: "http://127.0.0.1:5500",
}))

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
  res.send('hey there!')
})


app.listen(PORT, () => {
  console.log('u are listening on port 3000')
})