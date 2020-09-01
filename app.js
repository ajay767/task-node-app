/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Task = require('./model/taskModel');

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const itemList = await Task.find();
  res.status(200).render('index', {
    itemList
  });
});

app.post('/', async (req, res) => {
  const { item } = req.body;
  const published = Date.now();
  await Task.create({ item, published });
  console.log({ item, published });
  res.redirect('/');
});

app.post('/delete', async (req, res) => {
  const id = req.body.deleteBtn;
  await Task.findByIdAndDelete({ _id: id });
  res.redirect('/');
});
module.exports = app;
