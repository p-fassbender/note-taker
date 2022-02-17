const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}

function updateDB(notesArray) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2),(err, res) => {
            if (err) {
                throw err
            }
            res.json(notesArray);
        }
    );
    console.log("notes: " + notesArray)
}

module.exports = { createNewNote, updateDB }