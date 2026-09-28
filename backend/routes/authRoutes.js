const express = require("express");

const {
    registerUser,
    loginUser,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error("Get user error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

module.exports = router;