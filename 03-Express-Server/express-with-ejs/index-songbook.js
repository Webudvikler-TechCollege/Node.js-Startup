const express = require('express');
const app = express();
const fetch = require('node-fetch');

//Sætter view engine til ejs
app.set('view engine', 'ejs');

//Definerer root mappe til css referencer m.m.
app.use(express.static(__dirname + '/'));
//app.use(express.static('/Users/heinz/Sites/Node.js-Startup/03-Express-Server/express-with-ejs/'));

//Route til liste med sange
app.get("/list", (req, res) => {
    //Fetch API data
    fetch('https://api.mediehuset.net/songbook/')
        //Parse data as json
        .then(response => response.json())
        //Array data
        .then(data => {
            const songlist = data.song;

            //Render til EJS side
            res.render('pages/songlist', {
                title: "Sangliste",
                content: "Her finder du udvalgte lister.",
                songlist: songlist
            });
        })
});

//Route til detalje side - skal have et parameter - eks: http://localhost:4242/details/233
app.get('/details/:id([0-9]*)', (req, res) => {
    //Fetch API data
    fetch('https://api.mediehuset.net/songbook/')
        //Parse data as json
        .then(response => response.json())
        //Array data
        .then(data => {
            const songlist = data.song;
            const song = songlist.find(obj => obj.id == req.params.id);
            res.render('pages/songdetails', {
                title: "Vis sang",
                content: "Her finder du tekst og akkorder til en sang",
                song: song
            });
        })
})


//404 meddelelse
app.use(function(req, res, next) {
    title = "Kan ikke finde siden";
    content = "Kan ikke blah blah";
    res.status(404).send(
        res.render('pages/404', {
            title: title,
            content: content
        })   
    );
});

//Angiver port der skal lyttes på
app.listen(4242, () => {
    console.log("Express server kører...");
});