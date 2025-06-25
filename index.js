const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: 'iPhone 14', price: 799 },
  { id: 2, name: 'Galaxy S22', price: 699 },
];

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = Date.now(); // simple unique id
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: `Product ${id} deleted` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
