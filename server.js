const express = require('express');
const { create, all } = require('mathjs');

const config = { number: 'BigNumber'};
const math = create(all, config);

const app = express();

const routePath = '/emilio_imam09_gmail_com';

app.get(routePath, (req, res) => {
    res.set('Content-Type', 'text/plain');

    const xstr = req.query.x;
    const ystr = req.query.y;

    if (!/^\d+$/.test(xstr) || !/^\d+$/.test(ystr)) {
      return res.send('NaN');
    }

    try {
        const x = math.bignumber(xstr);
        const y = math.bignumber(ystr);

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