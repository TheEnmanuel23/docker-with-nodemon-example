const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`)
});
var a = 1;
var b = 0;
var r = a/b;
console.log(r)
app.listen(PORT, (err) => {

  if (err) {
    return console.log(err);
  }

  console.log(`Server running on port: ${PORT}`)
});