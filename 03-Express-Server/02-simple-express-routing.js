//Kalder express modulet og definerer konstanten app
const express = require('express');
const app = express();

//Port nummer 
const port = 4242;

//Routing til forside
app.get("/", (req, res) => {
    const content = "<h1>Velkommen</h1>";
    res.send(content);
});

//Routing til about side
app.get("/about", (req, res) => {
    const content = "<h1>Om os</h1>";
    res.send(content);
});

//Routing til kontakt side
app.get("/contact", (req, res) => {
    const content = "<h1>Kontakt os</h1>";
    res.send(content);
});

//Default route til 404 fejl
app.use(function(req, res, next) {
    res.status(404).send('Ups! Kan ikke finde den side du prøver at kalde :(');
});

//Listen metode som lytter på den angivne port
app.listen(port, () => {
    console.log(`Express App lytter på port ${port}!`);
})