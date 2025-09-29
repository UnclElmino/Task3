const express = require('express');
const { lcm } = require('mathjs');

const app = express();

const routePath = '/emilio_imam09_gmail_com';

app.get(routePath, (req, res) => {
    res.set('Content-Type', 'text/plain');

    const x = Number(req.query.x);
    const y = Number(req.query.y);

    const valid = Number.isInteger(x) && Number.isInteger(y) && x >= 0 && y >= 0;
    if (!valid) return res.send('NaN');

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