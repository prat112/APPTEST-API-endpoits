const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Sample data (for demonstration purposes)
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// GET method to retrieve data
app.get('/api/items', (req, res) => {
  res.json(data);
});

// POST method to add new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// DELETE method to remove an item by ID
app.delete('/api/items/:id', (req, res) => {
  const idToDelete = parseInt(req.params.id);
  data = data.filter(item => item.id !== idToDelete) ;
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
