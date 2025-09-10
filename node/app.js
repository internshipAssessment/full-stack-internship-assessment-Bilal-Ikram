const express = require('express');
const app = express();

app.use(express.json());

// Implement POST /api/sum
app.post('/api/sum', (req, res) => {
    const { a, b } = req.body;

    // Validate input
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Respond with the sum
    const sum = a + b;
    res.json({ sum });
});

module.exports = app;
