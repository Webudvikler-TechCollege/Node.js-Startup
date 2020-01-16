const express = require('express');
const app = express();
const fetch = require('node-fetch');

//Sætter view engine til ejs
app.set('view engine', 'ejs');

//Definerer root mappe til css referencer m.m.
app.use(express.static(__dirname + '/'));

function myFunction() {
    cars.sort(function(a, b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    displayCars();
}

//Route til forside
app.get("/list", (req, res) => {
    let title = "Sangliste";
    let content = "Her finder du udvalgte lister.";

    fetch('https://api.mediehuset.net/songbook/')
        .then(response => response.json())
        .then(data => {
            const songs = data.song;
            songs.sort(
                function(a, b){
                    var x = a.artist_name.toLowerCase();
                    var y = b.artist_name.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;                
                }
            );
            res.render('pages/list', {
                title: title,
                content: content,
                songs: songs
            });
        })
});

app.get('/details/:id([0-9]*)', (req, res) => {
    let title = "Vis sang";
    let content = "Her finder du tekst og akkorder til en sang";
    //res.end('Henter id ' + req.params.id);
    fetch('https://api.mediehuset.net/songbook/')
        .then(response => response.json())
        .then(data => {
            const songs = data.song;
            const obj = songs.find(obj => obj.id == req.params.id);
            res.render('pages/details', {
                title: title,
                content: content,
                song: obj
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