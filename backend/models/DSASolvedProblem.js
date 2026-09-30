const mongoose = require("mongoose");

const dsaSolvedProblemSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        problemId: {
            type: Number,
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        difficulty: {
            type: String,
            required: true,
            trim: true,
        },

        topic: {
            type: String,
            required: true,
            trim: true,
        },

        solvedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

dsaSolvedProblemSchema.index(
    {
        user: 1,
        problemId: 1,
    },
    {
        unique: true,
    }
);

const DSASolvedProblem = mongoose.model(
    "DSASolvedProblem",
    dsaSolvedProblemSchema
);

module.exports = DSASolvedProblem;