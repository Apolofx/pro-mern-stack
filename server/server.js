const express = require("express");
const app = express();
const path = require("path");
const fileServerMiddleware = express.static("public");

app.use(fileServerMiddleware);

app.listen(3000, () => console.log("App started on port 3000"));
