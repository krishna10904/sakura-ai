const User = require("../models/User");

const addStudySession = async (req, res) => {
    try {
        const { hours } = req.body;

        if (!hours || hours <= 0) {
            return res.status(400).json({
                success: false,
                message: "Study hours must be greater than 0",
            });
        }

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const now = new Date();

        const today = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );

        let streak = user.studyStreak || 0;

        if (user.lastStudyDate) {
            const lastDate = new Date(user.lastStudyDate);

            const lastStudyDay = new Date(
                lastDate.getFullYear(),
                lastDate.getMonth(),
                lastDate.getDate()
            );

            const difference =
                (today - lastStudyDay) / (1000 * 60 * 60 * 24);

            if (difference === 1) {
                streak += 1;
            } else if (difference > 1) {
                streak = 1;
            }
        } else {
            streak = 1;
        }

        user.studyHours += Number(hours);
        user.studyStreak = streak;
        user.lastStudyDate = now;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Study session added successfully",
            stats: {
                studyHours: user.studyHours,
                studyStreak: user.studyStreak,
                lastStudyDate: user.lastStudyDate,
            },
        });
    } catch (error) {
        console.error("Study session error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

module.exports = {
    addStudySession,
};