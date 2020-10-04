const express = require('express');

const app = express();
const Database = require("@replit/database")
const db = new Database()

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(3000, () => {
  console.log('server started');
});