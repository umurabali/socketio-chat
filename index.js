const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.listen(3000,() => {
  console.log('listening on *:3000');
});


