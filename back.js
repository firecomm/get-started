const express = require('express');
const app = express();

app.use(express.static('front'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front.html', function(err) {
    if (err) {
      res.status(err.status).end();
    }
  })
})

app.listen(5000, () => console.log('listening on 5000'));
