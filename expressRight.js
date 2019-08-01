const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const start = Number(process.hrtime.bigint());

app.use(bodyParser.json());

app.post('/', (req, res) => {
  fetch('https://8c45c46f.ngrok.io', {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({num: 0})})
  .then(({num}) => {
  })
  .catch((err) => {
    console.error(err);
  })
})

app.listen(8081, () => {console.log('server listening on 8081')})

// const https = require('https');

// const options = {
//   hostname: 'encrypted.google.com',
//   port: 8080,
//   path: '/',
//   method: 'GET'
// };

// const req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (e) => {
//   console.error(e);
// });
// req.end();
