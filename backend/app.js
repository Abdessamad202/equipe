const express = require('express');
const app = express();
const fs = require("fs")
const path = require("path")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
    next();
});

// const {json} = require("express");


const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/api/equipes", (req, res) => {
let data = fs.readFileSync(path.resolve(__dirname, "equipe.json"), "utf8");
    let getData = JSON.parse(data)
    res.json(getData)
})
app.get("/api/equipes/:id", (req, res) => {
    let data = fs.readFileSync(path.resolve(__dirname, "equipe.json"), "utf8");
    let getData = JSON.parse(data); // Assuming `data` is a JSON string containing your data
    let team = getData.find(element => element.id == req.params.id);
    if (team) {
        // console.log(team);

        res.json(team);

    } else {
        console.log("error");

        res.status(404).json({ message: "Team not found" });
    }
    // res.json(req.params.name);
});

// let data = fs.readFileSync(path.resolve(__dirname,"equipe.json"),"utf8")
// const path = require('path');  // Import the 'path' module