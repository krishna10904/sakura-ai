const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        targetRole: {
            type: String,
            default: "Software Developer",
            trim: true,
        },

        targetCountry: {
            type: String,
            default: "Japan",
            trim: true,
        },

        japaneseLevel: {
            type: String,
            default: "N5",
            trim: true,
        },

        skills: {
            type: [String],
            default: [],
        },

        studyHours: {
            type: Number,
            default: 0,
        },

        dsaSolved: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;