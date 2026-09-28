import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Sparkles,
    Globe,
    BriefcaseBusiness,
} from "lucide-react";

import api from "../services/api";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        targetRole: "Full Stack Developer",
        targetCountry: "Japan",
        japaneseLevel: "N5",
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

        if (
            !formData.name ||
            !formData.email ||
            !formData.password
        ) {
            setError("Please fill in all required fields");
            return;
        }

        try {
            setLoading(true);

            await api.post("/auth/register", formData);

            navigate("/login", {
                state: {
                    message:
                        "Account created successfully. Please login.",
                },
            });
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Registration failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#09090f] text-white">
            <div className="flex min-h-screen">

                <div className="relative hidden flex-1 overflow-hidden bg-gradient-to-br from-purple-950/40 via-[#09090f] to-pink-950/20 p-12 lg:flex lg:flex-col lg:justify-between">

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
                                Start your journey
                            </span>
                        </div>

                        <h2 className="text-5xl font-bold leading-tight">
                            Your future,
                            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                powered by AI.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md leading-7 text-gray-400">
                            Create your Sakura AI account and build a
                            personalized path for your studies, career,
                            interviews and Japan goals.
                        </p>

                        <div className="mt-8 space-y-3 text-sm text-gray-400">
                            <p>✓ Personalized AI career guidance</p>
                            <p>✓ DSA and study progress tracking</p>
                            <p>✓ AI interview preparation</p>
                            <p>✓ Japan-focused career preparation</p>
                        </div>
                    </div>

                    <p className="relative z-10 text-xs text-gray-600">
                        Sakura AI • AI Career & Life Copilot
                    </p>
                </div>

                <div className="flex w-full items-center justify-center px-6 py-10 lg:w-[560px] lg:px-12">

                    <div className="w-full max-w-md">

                        <div className="mb-7 text-center lg:text-left">

                            <div className="mb-5 flex justify-center lg:hidden">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-3xl">
                                    🌸
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold">
                                Create your account
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Tell Sakura AI a little about yourself.
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

                            <div className="mb-4">
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Name
                                </label>

                                <div className="relative">
                                    <User
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
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

                            <div className="mb-4">
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
                                        placeholder="Minimum 6 characters"
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-11 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Target Role
                                </label>

                                <div className="relative">
                                    <BriefcaseBusiness
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        name="targetRole"
                                        value={formData.targetRole}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-sm text-white outline-none focus:border-purple-500/60"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Target Country
                                </label>

                                <div className="relative">
                                    <Globe
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    />

                                    <input
                                        type="text"
                                        name="targetCountry"
                                        value={formData.targetCountry}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-white/10 bg-black/20 py-3 pl-10 pr-4 text-sm text-white outline-none focus:border-purple-500/60"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="mb-2 block text-sm font-medium text-gray-300">
                                    Japanese Level
                                </label>

                                <select
                                    name="japaneseLevel"
                                    value={formData.japaneseLevel}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none focus:border-purple-500/60"
                                >
                                    <option value="N5">N5</option>
                                    <option value="N4">N4</option>
                                    <option value="N3">N3</option>
                                    <option value="N2">N2</option>
                                    <option value="N1">N1</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-sm font-semibold transition hover:from-purple-500 hover:to-pink-500 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading
                                    ? "Creating account..."
                                    : "Create Account"}
                            </button>

                            <p className="mt-6 text-center text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium text-purple-400 hover:text-purple-300"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;