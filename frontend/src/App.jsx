import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import FormDemo from "./pages/FormDemo.jsx";
import ModalDemo from "./pages/ModalDemo.jsx";
import Documents from "./pages/Documents.jsx";
import Assistant from "./pages/Assistant.jsx";
import DSACoach from "./pages/DSACoach.jsx";
import CareerCopilot from "./pages/CareerCopilot.jsx";
import AIInterview from "./pages/AIInterview.jsx";
import JapanMode from "./pages/JapanMode.jsx";
import Analytics from "./pages/Analytics.jsx";
import StudyCoach from "./pages/StudyCoach.jsx";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function Placeholder({ title }) {
    return (
        <div className="flex min-h-full items-center justify-center p-8">
            <div className="text-center">
                <div className="mb-4 text-4xl">
                    🌸
                </div>

                <h1 className="text-3xl font-bold text-white">
                    {title}
                </h1>

                <p className="mt-2 text-gray-500">
                    This module is coming soon.
                </p>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* =========================
                    Authentication
                ========================= */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />


                {/* =========================
                    Dashboard Application
                ========================= */}

                <Route
                    element={<DashboardLayout />}
                >
                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    {/* =========================
                        AI Modules
                    ========================= */}

                    <Route
                        path="/assistant"
                        element={<Assistant />}
                    />

                    <Route
                        path="/dsa"
                        element={<DSACoach />}
                    />

                    <Route
                        path="/documents"
                        element={<Documents />}
                    />

                    {/* =========================
                        Development / Testing
                    ========================= */}

                    <Route
                        path="/form-demo"
                        element={<FormDemo />}
                    />

                    <Route
                        path="/modal-demo"
                        element={<ModalDemo />}
                    />

                    {/* =========================
                        Career Modules
                    ========================= */}

                    <Route
                        path="/study"
                        element={<StudyCoach />}
                    />

                    <Route
                        path="/career"
                        element={<CareerCopilot />}
                    />

                    <Route
                        path="/interview"
                        element={<AIInterview />}
                    />

                    <Route
                        path="/japan"
                        element={<JapanMode />}
                    />

                    <Route
                        path="/analytics"
                        element={<Analytics />}
                    />
                </Route>


                {/* =========================
                    404
                ========================= */}

                <Route
                    path="*"
                    element={
                        <Placeholder title="Page Not Found" />
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;