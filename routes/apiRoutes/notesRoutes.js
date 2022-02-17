const router = require('express').Router();
const { notesArray } = require('../../db/db');
const { createNewNote, updateDB } = require("../../lib/notes");

router.get("/notes", (req, res) => {
    res.json(notesArray);
});

router.post("/notes", (req, res) => {
    req.body.id = notesArray.length.toString()
    const note = createNewNote(req.body, notesArray);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    // let newNotesArray = notesArray.filter(
    //     (note) => { return note.id != req.params.id; }
    // );
    // //console.log(newNotesArray);
    // res.json(newNotesArray);
    
    // res.json(notesArray.filter(note => note.id != req.params.id));
    // returns an updated array with the "deleted" note id filtered out
    // however this doesn't do anything when I click the delete button
    // am I supposed to writeFile again?
    let newArray = [];
    newArray = notesArray.filter(note => note.id != req.params.id)
    updateDB(newArray);
    console.log("notesRoutes: " + newArray)
    res.json(newArray);
    
    // this updates the db file to have a new array with the deleted note gone
    // it doesn't adjust the page to show the note is gone
})

module.exports = router;