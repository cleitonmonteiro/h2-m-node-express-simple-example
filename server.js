'use strict';
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Simple api express\n');
});

app.route('/books')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  })
  .delete(function(req, res){
      res.send('Delete the book');
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);