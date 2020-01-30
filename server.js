'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// serve the React app
const clientPath = path.join(__dirname, './client/build');
app.use(express.static(clientPath, { index: false }));
// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${port}!`);
});
