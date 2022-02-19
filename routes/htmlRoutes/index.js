const path = require("path");
const router = require("express").Router();

// get index.html for homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// get notes.html for /notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// any other url redirects to index.html
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;