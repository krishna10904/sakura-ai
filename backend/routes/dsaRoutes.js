const express = require("express");

const protect = require("../middleware/authMiddleware");
const {
    addDSAProblem,
} = require("../controllers/dsaController");

const router = express.Router();

router.post("/", protect, addDSAProblem);

module.exports = router;