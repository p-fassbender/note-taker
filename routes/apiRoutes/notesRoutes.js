const router = require('express').Router();
let notesArray = require('../../db/db');
const fs = require("fs");
const path = require("path");
const { createNewNote } = require("../../lib/notes");

// get all notes
router.get("/notes", (req, res) => {
    notesArray = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    res.json(notesArray);
});

// add a note
router.post("/notes", (req, res) => {
    req.body.id = Math.floor(Math.random() * 1000)
    const note = createNewNote(req.body, notesArray);
    res.json(note);
});

// delete a note
router.delete('/notes/:id', (req, res) => {
    let newArray = [];
    newArray = notesArray.filter(note => note.id != req.params.id)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(newArray), (err, res) => {
            if (err) {
                throw err
            }
        }
    )
    res.json("delete successful")
})

module.exports = router;