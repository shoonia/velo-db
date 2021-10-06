const express = require('express');

const { item, schemas } = require('./mockdb.js')

const app = express();

app.post('/schemas/list', (req, res) => {
  res.json(schemas);
});

app.post('/schemas/find', (req, res) => {
  res.json(schemas);
});

app.post('data/get', (req, res) => {
  res.json({ item });
});

app.post('/data/find', (req, res) => {
  res.json({
    items: [item],
    totalCount: 1,
  });
});

app.post('/data/count', (req, res) => {
  res.json({ totalCount: 1 });
});

app.use('*', (req, res) => {
  res.send('External Database Collections');
});

app.listen(process.env.PORT, () => {
  console.info('start');
});
