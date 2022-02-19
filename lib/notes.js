const fs = require("fs");
const path = require("path");

// gets the note info from the post request body and writes it to the db.json file
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray)
    );
    return note;
}

module.exports = { createNewNote }