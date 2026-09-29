const express = require("express");

const protect = require("../middleware/authMiddleware");
const {
    addStudySession,
} = require("../controllers/studyController");

const router = express.Router();

router.post("/", protect, addStudySession);

module.exports = router;