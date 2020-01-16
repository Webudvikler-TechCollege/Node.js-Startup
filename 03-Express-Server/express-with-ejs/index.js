const express = require('express');
const app = express();

//Sætter view engine til ejs
app.set('view engine', 'ejs');

//Definerer root mappe til css referencer m.m.
app.use(express.static(__dirname + '/'));

//Route til forside
app.get("/", (req, res) => {
    res.render('pages/index', {
        title: "Den store sangbog",
        content: "Test"
    });
});

//Sang API
app.get("/sange", (req, res) => {

    //Definerer array med sange
    let songs = [
        {title: "Midt om natten", artist: "Kim Larsen"},
        {title: "Fed rock", artist: "Shubidua"},
        {title: "Vilde kaniner", artist: "Gnags"}
    ];    

    res.render('pages/sange', {
        title: "Sange",
        content: "Her er en liste over sange",
        songs: songs
    });

});


//Sange
app.get("/sangtext", (req, res) => {

    //Definerer array med sange
    let songs = [
        {title: "Midt om natten", artist: "Kim Larsen"},
        {title: "Fed rock", artist: "Shubidua"},
        {title: "Vilde kaniner", artist: "Gnags"}
    ];    

    res.render('pages/sange', {
        title: "Sange",
        content: "Her er en liste over sange",
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