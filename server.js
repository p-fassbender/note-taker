const express = require("express");
const path = require("path");
const {notesArray} = require('./db/db');
const { createNewNote } = require("./lib/notes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", (req, res) => {
    res.json(notesArray);
});

app.post("/api/notes", (req, res) => {
    req.body.id = notesArray.length.toString()
    const note = createNewNote(req.body, notesArray);
    res.json(note);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`)
});