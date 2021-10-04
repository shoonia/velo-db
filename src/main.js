const express = require('express');
const { json } = require('body-parser');
const { schemas, item } = require('./schema.js')

const app = express();

app.use(json())

app.use('/schemas/list', (req, res) => {
  res.json(schemas);
});

app.use('/schemas/find', (req, res) => {
  res.json(schemas);
});

app.use('data/get', (req, res) => {
  res.json(item);
});

app.use('/data/find', (req, res) => {
  res.json({
    items: [item],
    totalCount: 1,
  });
});

app.use('/data/count', (req, res) => {
  res.json({ totalCount: 1 });
});

app.use('*', (req, res) => {
  res.send('External Database Collections');
});

app.listen(process.env.PORT, () => {
  console.info('start');
});
