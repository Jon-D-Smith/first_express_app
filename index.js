const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send("Hello app.use")
// })

app.get('/', (req, res) => {
    res.send("Hello World!")
})


app.listen(port, () => {
    console.log("LISTENING ON PORT: ", port);
})