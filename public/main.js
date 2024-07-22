
// const ws = new WebSocket('ws://localhost:3000');

// ws.addEventListener('open', ()=> {
//   console.log('we are connected')
// })





const ws = new WebSocket('ws://localhost:3000');

const puzzle = document.querySelector('.puzzle')

// Handle the 'open' event
ws.addEventListener('open', () => {
  console.log('we are connected');
});

// Handle the 'message' event
ws.addEventListener('message', (event) => {
  console.log(event.data);
  const mainData = event.data;
  puzzle.innerHTML = mainData



});