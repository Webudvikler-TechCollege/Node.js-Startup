const express = require('express');
const templateGenerator = require('./template');
const app = express();

app.get("/", (req, res) => {
    const template = templateGenerator("Welcome to express", "Intro text");
    res.send(template);
});

app.get("/about", (req, res) => {
    const template = templateGenerator("About express", "Text");
    res.send(template);
});

app.get("/contact", (req, res) => {
    const template = templateGenerator("Contact", "Formular");
    res.send(template);
});

app.listen(4242, () => {
    console.log("Express server kører...");
});