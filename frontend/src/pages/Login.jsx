import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import api from "../services/api";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        if (!formData.email || !formData.password) {
            setError("Please enter email and password");
            return;
        }

        try {
            setLoading(true);

            const response = await api.post("/auth/login", formData);

            const { token, user } = response.data;

            localStorage.setItem("sakura_token", token);
            localStorage.setItem("sakura_user", JSON.stringify(user));

            navigate("/");
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Login failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090f] text-white">
            <div className="flex min-h-screen">

                <div className="relative hidden flex-1 overflow-hidden lg:flex lg:flex-col lg:justify-between bg-gradient-to-br from-purple-950/40 via-[#09090f] to-pink-950/20 p-12">

                    <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />

                    <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-pink-600/10 blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/20 text-2xl">
                                🌸
                            </div>

                            <div>
                                <h1 className="text-xl font-bold">
                                    Sakura AI
                                </h1>

                                <p className="text-xs text-gray-500">
                                    Your AI Life Copilot
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 max-w-lg">
                        <div className="mb-5 flex items-center gap-2 text-purple-400">
                            <Sparkles size={18} />
                            <span className="text-sm font-medium">
                                AI Career & Life Copilot
                            </span>
                        </div>

                        <h2 className="text-5xl font-bold leading-tight">
                            Build your future
                            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                with intelligence.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md leading-7 text-gray-400">
                            Plan your studies, improve your DSA skills,
                            prepare for interviews and build your career
                            with your personal AI copilot.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
                                🤖 AI Assistant
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
                                💻 DSA Coach
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
                                🇯🇵 Japan Mode
                            </span>
                        </div>
                    </div>

                    <p className="relative z-10 text-xs text-gray-600">
                        Sakura AI • AI Career & Life Copilot
                    </p>
                </div>

                <div className="flex w-full items-center justify-center px-6 py-10 lg:w-[520px] lg:px-12">

                    <div className="w-full max-w-md">

                        <div className="mb-8 text-center lg:text-left">
                            <div className="mb-5 flex justify-center lg:hidden">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-3xl">
                                    🌸
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold">
                                Welcome back
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Sign in to continue your Sakura AI journey.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-purple-950/20"
                        >

                            {error && (
                                <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                                    {error}
                                </div>
                            )}

                            <div className="mb-5">
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Email
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-white"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-sm font-semibold text-white transition hover:from-purple-500 hover:to-pink-500 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? (
                                    "Signing in..."
                                ) : (
                                    "Sign In"
                                )}
                            </button>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-medium text-purple-400 transition hover:text-purple-300"
                                >
                                    Create account
                                </Link>
                            </p>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;