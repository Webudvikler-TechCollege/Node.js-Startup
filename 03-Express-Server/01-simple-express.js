//Kalder express modulet og definerer konstanten app
const express = require('express');
const app = express();

//Port nummer
const port = 4242;

//Routing til URL / med en HTTP GET REQUEST
app.get("/", (req, res) => {
    res.send('Hello');
    console.log('Hello');
});

//Listen metode som lytter på den angivne port
app.listen(port, () => {
    console.log(`Express App lytter på port ${port}!`);
})