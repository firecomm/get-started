const duplex = document.querySelector('#duplex');
const duplexSocket = new WebSocket('ws://localhost:1111');

// Connection opened
duplexSocket.addEventListener('open', function (event) {
    duplexSocket.send('Hello Server!');
});

// Listen for messages
duplexSocket.addEventListener('message', function (event) {
    duplex.innerHTML(JSON.stringify(event.data));
});

const fetchs = document.querySelector('#fetch');
const fetchSocket = new WebSocket('ws://localhost:2222');

// Connection opened
fetchSocket.addEventListener('open', function (event) {
  fetchSocket.send('Hello Server!');
});

// Listen for messages
fetchSocket.addEventListener('message', function (event) {
  fetchs.innerHTML(JSON.stringify(event.data));
});

const arrays = document.querySelector('#array');
const arraySocket = new WebSocket('ws://localhost:3333');

// Connection opened
arraySocket.addEventListener('open', function (event) {
  arraySocket.send('Hello Server!');
});

// Listen for messages
arraySocket.addEventListener('message', function (event) {
  arrays.innerHTML(JSON.stringify(event.data));
});
