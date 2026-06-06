const express = require('express');
const app = express();
const path = require('path');

// Temporary server-side storage
const submissions = [];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// GET - Show form
app.get('/', (req, res) => {
  res.render('index', { title: 'Registration Form', errors: [] });
});

// POST - Handle form submission with server-side validation
app.post('/submit', (req, res) => {
  const { name, email, phone, password, age } = req.body;
  const errors = [];

  // Server-side validation
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Please enter a valid email address');
  }

  if (!phone || !/^\d{10}$/.test(phone)) {
    errors.push('Phone number must be exactly 10 digits');
  }

  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!age || isNaN(age) || age < 18 || age > 100) {
    errors.push('Age must be between 18 and 100');
  }

  // If errors, re-render form with errors
  if (errors.length > 0) {
    return