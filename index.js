const express = require('express');
const app = express();

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to CookMaster! Learn how to cook like a pro with our interactive courses and personalized recipes.');
});

app.get('/courses', (req, res) => {
  res.send('Explore our collection of interactive courses, designed to help you master any cuisine or cooking technique.');
});

app.get('/recipes', (req, res) => {
  res.send('Get personalized recipes tailored to your taste and skill level, and cook like a pro in no time!');
});

app.get('/register', (req, res) => {
  res.send('Ready to become a CookMaster? Register for our platform today and start your culinary journey!');
});

// Start the server
app.listen(3000, () => {
  console.log('CookMaster server is running on port 3000.');
});