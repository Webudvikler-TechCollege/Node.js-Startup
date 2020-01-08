const express = require('express');
const app = express();
const logger = require('morgan');
app.use(logger('dev'));

/* Route begin */

app.get('/api/test', (req, res) => {
    res.json({ text: "Hello World" });
 });

/* Route end */

app.listen(4242, () => {
    console.log("Express server kører...");
});