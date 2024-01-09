const express = require("express");
const app = express();
const port = 4000;
const pool = require("./model/db");

app.listen(port, () => console.log(`Server Listening on Port ${port}.`));
