const User = require("../models/User");

const getDashboard = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            dashboard: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    targetRole: user.targetRole,
                    targetCountry: user.targetCountry,
                    japaneseLevel: user.japaneseLevel,
                    skills: user.skills,
                },

                stats: {
                    studyHours: user.studyHours,
                    dsaSolved: user.dsaSolved,
                    studyStreak: user.studyStreak,
                    lastStudyDate: user.lastStudyDate,
                },
            },
        });
    } catch (error) {
        console.error("Dashboard error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

module.exports = {
    getDashboard,
};