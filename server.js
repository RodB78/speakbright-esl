const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the inquiry (replace with email service later)
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  console.log('----------------------------------');

  // TODO: Add email sending with nodemailer or a service like SendGrid
  res.json({ success: true, message: 'Thank you! I will get back to you within 24 hours.' });
});

// Catch-all: serve index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SpeakBright ESL server running on port ${PORT}`);
});
