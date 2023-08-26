const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("777");
});

app.listen(PORT);