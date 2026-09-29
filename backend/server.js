const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboardRoutes");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studyRoutes = require("./routes/studyRoutes");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/study", studyRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🌸 Sakura AI Backend is running",
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "healthy",
        service: "Sakura AI API",
        database:
            mongoose.connection.readyState === 1
                ? "connected"
                : "disconnected",
        timestamp: new Date().toISOString(),
    });
});

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(
            `🌸 Sakura AI server running on port ${PORT}`
        );
    });
};

startServer();