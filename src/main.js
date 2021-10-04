const express = require('express');
const { json, urlencoded } = require('body-parser');
const schema = require('./schema.js')

const app = express();

const item = {
  _id: "24f63542-d9eb-4651-8aa3-bd710135dc0c",
  _owner: "e3b156c2-28f9-4bda-97b3-6a3044636f69",
  title: "test",
};

app.use(json())
app.use(urlencoded({ extended: true }));

app.use('/schemas/list', (req, res) => {
  res.json({ schemas: [schema] });
});

app.use('/schemas/find', (req, res) => {
  res.json({ schemas: [schema] });
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
