//Kalder express modulet og definerer konstanten app
const express = require('express');
const app = express();
//Kalder body-parser modulet til at håndtere form requests
const bodyParser = require('body-parser');

//Hjælper med at få post og put variabler ud
app.use(bodyParser.urlencoded({ extended: true }));

//Port nummer 
const port = 4242;

//Routing til forside med GET request
app.get("/", (req, res) => {
    let message = "GET REQUEST";
    res.send(message)
});

//Routing til forside med dynamisk GET request
app.get("/:id([0-9]*)", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        let message = "GET REQUEST WITH PARAMS - ID: " + req.params.id;
        res.send(message)
    }
});

//Routing til forside side med POST request
app.post("/", (req, res) => {
    let name = (req.body.name === undefined) ? '' : req.body.name;
    if(name === "") {
        res.sendStatus(418);
    } else {
        let message = "SUCCESS! POST REQUEST";
        res.send(message)
    }
});

//Routing til forside med PUT request
app.put("/", (req, res) => {
    let key = (req.body.key === undefined) ? '' : req.body.key;
    if(key === "") {
        res.sendStatus(418);
    } else {
        let message = "PUT REQUEST - ID: " + key;
        res.send(message)
    }
});

//Routing til forside med DELETE request
app.delete("/:id([0-9]*)", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        let message = "DELETE REQUEST - ID: " + req.params.id;
        res.send(message)
    }
});

//Default route til 404 fejl
app.use(function(req, res, next) {
    res.status(404).send('Ups! Kan ikke finde den side du prøver at kalde :(');
});

//Listen metode som lytter på den angivne port
app.listen(port, () => {
    console.log(`Express App lytter på port ${port}!`);
})