//Kalder express modulet og definerer konstanten app
const express = require('express');
const app = express();

//Port nummer 
const port = 4242;

//Sætter view engine til ejs
app.set('view engine', 'ejs');

//Definerer rod mappe til EJS m.m.
app.set('views','/Mappe/til/site/views');

//Definerer rod mappe til css referencer m.m.
app.use(express.static('/Mappe/til/site/'));

//Routing til URL / med en HTTP GET REQUEST
app.get("/", (req, res) => {
    //Renderer til EJS fil med variabler i key/value pairs
    res.render('sti/til/ejsfil', {
        key1: value1,
        key2: value2
    });
});

//Listen metode som lytter på den angivne port
app.listen(port, () => {
    console.log(`Express App lytter på port ${port}!`);
})