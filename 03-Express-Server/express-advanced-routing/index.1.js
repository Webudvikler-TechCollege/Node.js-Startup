const express = require('express');
const app = express();

//Sætter view engine til ejs
app.set('view engine', 'ejs');

//Korrigerer view mappe
//app.set('views','lektion-7-server/express-advanced-routing/views');
app.get("/", (req, res) => {
    res.send("Liste over  sange");
});


app.get("/sange", (req, res) => {
    console.log(req.params);
    res.send("Liste over  sange");
});

app.get("/sange/:id", (req, res) => {
    console.log(req.params);
    res.json({
        params: req.params
    });
});

//Angiver port der skal lyttes på
app.listen(4242, () => {
    console.log("Express server kører...");
});