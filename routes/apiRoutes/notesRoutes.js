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

module.exports = router;