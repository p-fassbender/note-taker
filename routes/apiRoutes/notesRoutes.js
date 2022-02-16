const router = require('express').Router();
const { notesArray } = require('../../db/db');
const { createNewNote } = require("../../lib/notes");

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

    res.json(notesArray.filter(note => note.id !== parseInt(req.params.id)));
})

module.exports = router;