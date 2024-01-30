const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
    res.send("Hello Login!");
});

app.get("/youtube", (req, res) => {
    res.send("Hello Youtube!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
