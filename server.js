const express = require('express');
const { create, all } = require('mathjs');

const config = { number: 'BigNumber'};
const math = create(all, config);

const app = express();

const routePath = '/emilio_imam09_gmail_com';

app.get(routePath, (req, res) => {
    res.set('Content-Type', 'text/plain');

    const x = math.bignumber(req.query.x);
    const y = math.bignumber(req.query.y);

    if (!x.isInteger() || !y.isInteger() || x.isNegative() || y.isNegative()) {
      return res.send('NaN');
    }

    try {
        const result = math.lcm(x, y);
        res.send(result.toFixed());
    } catch {
        res.send('NaN');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});