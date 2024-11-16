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
let data = fs.readFileSync(path.resolve(__dirname, "equipe.json"), "utf8");


const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/api/equipes", (req, res) => {
    let getData = JSON.parse(data)
    res.json(getData)
})
app.get("/api/equipes/:name", (req, res) => {
    let getData = JSON.parse(data); // Assuming `data` is a JSON string containing your data
    let team = getData.find(element => element.team.toLowerCase() === req.params.name.toLowerCase());

    if (team) {
        res.json(team);
    } else {
        res.status(404).json({ message: "Team not found" });
    }
    // res.json(req.params.name);
});

// let data = fs.readFileSync(path.resolve(__dirname,"equipe.json"),"utf8")
// const path = require('path');  // Import the 'path' module

app.get("/equipes/:name", (req, res) => {
    // Generate the correct file path for 'team.html'
    const filePath = path.join(__dirname, "../frontend", "team.html");
    
    // Send the HTML file
    res.sendFile(filePath);
});

// const path = require('path');  // Import the 'path' module

app.get("/equipes", (req, res) => {
    // Correct the file name to "example.html" (if that’s the intended file name)
    const filePath = path.join(__dirname, "../frontend", "exampe.html");
    
    // Send the HTML file
    res.sendFile(filePath);
});
