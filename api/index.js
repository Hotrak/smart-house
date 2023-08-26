const express = require("express");
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(cors())

app.get("/api", (request, response) => {
    response.send("777");
});
// module.exports = app;
app.listen(PORT);