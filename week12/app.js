const express = require("express");
const pug = require ("pug");
const app = express();
const student = require('./routes/student.route');

// configure router
app.use('/', student);

// Sutup Template Engion
app.set("views", "/views");
app.set("view engine", "pug");

app.get('/', (req,  res) => {
    res.render('./pages/home', {
        pageTitle: "INFT2202 Student View"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
