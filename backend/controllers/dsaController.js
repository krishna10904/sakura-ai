const User = require("../models/User");
const DSASolvedProblem = require("../models/DSASolvedProblem");

const addDSAProblem = async (req, res) => {
    try {
        const {
            problemId,
            title,
            difficulty,
            topic,
        } = req.body;

        if (
            problemId === undefined ||
            !title ||
            !difficulty ||
            !topic
        ) {
            return res.status(400).json({
                success: false,
                message: "Problem details are required",
            });
        }

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const existingProblem = await DSASolvedProblem.findOne({
            user: user._id,
            problemId: Number(problemId),
        });

        if (existingProblem) {
            return res.status(409).json({
                success: false,
                message: "Problem already solved",
                alreadySolved: true,
                stats: {
                    dsaSolved: user.dsaSolved,
                },
            });
        }

        await DSASolvedProblem.create({
            user: user._id,
            problemId: Number(problemId),
            title,
            difficulty,
            topic,
        });

        user.dsaSolved += 1;

        await user.save();

        res.status(201).json({
            success: true,
            message: "DSA problem solved successfully",
            alreadySolved: false,
            stats: {
                dsaSolved: user.dsaSolved,
            },
        });
    } catch (error) {
        console.error("DSA problem error:", error.message);

        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Problem already solved",
                alreadySolved: true,
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

const getSolvedProblems = async (req, res) => {
    try {
        const solvedProblems = await DSASolvedProblem.find({
            user: req.user.userId,
        }).sort({
            solvedAt: -1,
        });

        res.status(200).json({
            success: true,
            solvedProblems,
        });
    } catch (error) {
        console.error(
            "Get solved DSA problems error:",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Unable to load solved problems",
        });
    }
};

module.exports = {
    addDSAProblem,
    getSolvedProblems,
};