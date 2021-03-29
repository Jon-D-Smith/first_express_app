const express = require("express");
const app = express();
const port = 3000;

app.use(() => {
    console.log("We got a new request");
})


app.listen(port, () => {
    console.log("LISTENING ON PORT: ", port);
})