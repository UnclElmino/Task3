const express = require('express');
const { lcm } = require('mathjs');

const app = express();

const routePath = '/emilio_imam09_gmail_com';

app.get(routePath, (req, res) => {
    res.set('Content-Type', 'text/plain; charset=utf-8');

    const x = Number(req.query.x);
    const y = Number(req.query.y);
    try {
        const result = lcm(x, y);
        res.send(String(result));
    } catch {
        res.send('NaN');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});