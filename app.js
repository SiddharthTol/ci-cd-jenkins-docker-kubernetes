const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps CI/CD on CentOS 🚀');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/error', (req, res) => {
  res.status(500).json({ status: 'error', message: 'Simulated failure' });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
