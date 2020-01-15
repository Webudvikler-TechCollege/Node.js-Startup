const express = require('express');
const app = express();

app.get("/", (req, res) => {
    const title = "Velkommen";
    res.send(title);
})

app.listen(3434, () => {
    console.log("Express kører på port 3434");
})