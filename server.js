const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`)
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server running on port: ${PORT}`)
});