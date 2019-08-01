const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const start = Number(process.hrtime.bigint());

setTimeout(() => {
  fetch('localhost:8080', {method: 'POST', body: JSON.stringify(req.body.num = count + 1)})
}, 30000)

app.use(bodyParser.json());

let count = 0;
app.post('*', (req, res) => {
  fetch('localhost:8080', {method: 'POST', body: JSON.stringify(req.body.num = count + 1)})
  .then(({num}) => {
    count += num;
  })
  .catch((err) => {
    console.error(err);
  })
})

if (count === 10000) {
  const end = Number(process.hrtime.bigint());
  console.log(
    'finalNumberOfRequests RESTFUL:', count);
  console.log(
    'avg millisecond speed per request REST:', ((end - start) /1000000) / count
    );
}

app.listen(8081, () => {console.log('server listening on 8080')})