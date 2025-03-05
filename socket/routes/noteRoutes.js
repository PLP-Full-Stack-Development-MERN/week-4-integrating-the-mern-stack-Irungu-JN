const express = require("express");
const { getNotes, saveNote } = require("../controllers/noteController");
const router = express.Router();

router.get("/:room", getNotes);
router.post("/", saveNote);

module.exports = router;
