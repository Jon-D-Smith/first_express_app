const express = require("express");
const app = express();
const port = 3000;

// app.use((req, res) => {
//     console.log("We got a new request");
//     res.send("Hello app.use")
// })

app.get('/', (req, res) => {
    res.send("Hello SuperPowereds world!")
})

app.get('/api/year1/students/', (req, res) => {
    res.send({
        students:
        {
            nick: { name: "Nick Campbell", age: 18, height: "5'10\"", power: "luck" },
            vince: { name: "Vince Reynolds", age: 18, height: "5'8\"", power: "energy absorption" }
        },
    })
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.listen(port, () => {
    console.log("LISTENING ON PORT: ", port);
})