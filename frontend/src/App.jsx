import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import FormDemo from "./pages/FormDemo.jsx";

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
            <DashboardLayout>

                <Routes>

                    {/* =========================
                        Dashboard
                    ========================= */}

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    {/* =========================
                        Development / Testing
                    ========================= */}

                    <Route
                        path="/form-demo"
                        element={<FormDemo />}
                    />

                    {/* =========================
                        Sakura AI Modules
                    ========================= */}

                    <Route
                        path="/assistant"
                        element={
                            <Placeholder title="AI Assistant" />
                        }
                    />

                    <Route
                        path="/study"
                        element={
                            <Placeholder title="Study Coach" />
                        }
                    />

                    <Route
                        path="/dsa"
                        element={
                            <Placeholder title="DSA Coach" />
                        }
                    />

                    <Route
                        path="/career"
                        element={
                            <Placeholder title="Career Copilot" />
                        }
                    />

                    <Route
                        path="/interview"
                        element={
                            <Placeholder title="AI Interview" />
                        }
                    />

                    <Route
                        path="/documents"
                        element={
                            <Placeholder title="Documents" />
                        }
                    />

                    <Route
                        path="/japan"
                        element={
                            <Placeholder title="Japan Mode" />
                        }
                    />

                    <Route
                        path="/analytics"
                        element={
                            <Placeholder title="Analytics" />
                        }
                    />

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

            </DashboardLayout>
        </BrowserRouter>
    );
}

export default App;