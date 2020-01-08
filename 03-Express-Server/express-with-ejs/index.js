const express = require('express');
const app = express();
const fetch = require('node-fetch');

//Sætter view engine til ejs
app.set('view engine', 'ejs');

//Korrigerer view mappe
app.set('views','lektion-7-server/express-with-ejs/views');
app.use(express.static(__dirname + '/'));

//Forside
app.get("/", (req, res) => {
    let title = "Velkommen til sangbogen";
    let content = "";
    
    res.render('pages/index', {
        title: title,
        content: content
    });
});

//Sange
app.get("/sange", (req, res) => {
    let title = "Sange";
    let content = "";

    let songs = [
        { title: "Midt om natten", artist: "Kim Larsen"},
        {title: "Fed rock", artist: "Shubidua"},
        {title: "Vilde kaniner", artist: "Gnags"}
    ];

    res.render('pages/sange', {
        title: title,
        content: content,
        songs: songs
    });
});

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