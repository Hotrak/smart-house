const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api", (request, response) => {
    response.send("777");
});
// module.exports = app;
app.listen(PORT);