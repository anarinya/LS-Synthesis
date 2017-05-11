'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

let nextItemId = 0;
function getNextId() {
  return (nextItemId++).toString();
}

const items = [
  { 
    id: getNextId(), 
    name: 'Sword', 
    price: 100, 
    img: '/img/sword.gif',
    desc1: 'A super basic sword.',
    desc2: '+1 attack',
    quantity: 5
  },
  { 
    id: getNextId(), 
    name: 'Bow', 
    price: 300, 
    img: '/img/bow.gif',
    desc1: 'A super basic bow.',
    desc2: '+1 attack',
    quantity: 2  
  },
  { 
    id: getNextId(), 
    name: 'Shield', 
    price: 200, 
    img: '/img/shield.gif',
    desc1: 'A super basic shield.',
    desc2: '+1 defense',
    quantity: 3
  }
];

app.get('/items', (req, res) => {
  res.send(items.map(item => {
    return { 
      id: item.id, 
      name: item.name,
      price: item.price,
      img: item.img,
      desc1: item.desc1,
      desc2: item.desc2,
      quantity: item.quantity
    };
  }));
});

app.get('/items/:id', (req, res) => {
  const item = items.find(item => item.id === req.params.id) || null;
  res.send(item);
});

app.post('/items', (req, res) => {
  const newItem = Object.assign({}, req.body, {
    id: getNextId()
  });

  items.push(newItem);
  res.send(newItem);
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
