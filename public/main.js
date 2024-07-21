const ws = new WebSocket('ws://localhost:3000')

ws.addEventListener('open', ()=>{
  console.log('we are connected')
})