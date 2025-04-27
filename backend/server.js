const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from tutoria!');
});

console.log('Starting the server...');
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});