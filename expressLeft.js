const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const start = Number(process.hrtime.bigint());

setTimeout(() => {
  fetch('https://3573cedf.ngrok.io', {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({num: 1})})
  .then(data => {
  })
  .catch(err => {
    console.error(err);
  })
}, 3000)

app.use(bodyParser.json());

let count = 0;
app.post('/', (req, res) => {
  count += 2;
  if(count === 100) {
    const end = Number(process.hrtime.bigint());
      console.log(
        'finalNumberOfRequests RESTFUL:', count);
      console.log(
        'avg millisecond speed per request REST:', ((end - start) /10000000) / count
        );
  }
  fetch('https://3573cedf.ngrok.io', {
    method: 'POST', 
    credentials: 'same-origin', 
    body: JSON.stringify({num: 0})})
  .then(({num}) => {
  })
  .catch((err) => {
    console.error(err);
  })
})

app.listen(8080, () => {console.log('server listening on 8080')})

// const https = require('https');

// const options = {
//   hostname: '0.0.0.0',
//   port: 8081,
//   path: '/',
//   method: 'POST',
//   body: {},
// };

// const req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     console.log(d)
//     process.stdout.write(d);
//   });
// });

// req.on('error', (e) => {
//   console.error(e);
// });
// req.end();
