const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "dbname"
});

con.connect((err) => {
    if (err) throw err;
    console.log("connected");
    var sql = "SELECT * FROM table_1 LIMIT 3";
    con.query(sql, (err, result, fields) => {
        if(err) throw err;
        for(var data of result) {
            console.log(data.title);
        }
    })
});