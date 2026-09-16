import {
    LayoutDashboard,
    MessageCircle,
    BookOpen,
    Code2,
    BriefcaseBusiness,
    Mic,
    FileText,
    Languages,
    BarChart3,
    Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "AI Assistant",
        path: "/assistant",
        icon: MessageCircle,
    },
    {
        name: "Study Coach",
        path: "/study",
        icon: BookOpen,
    },
    {
        name: "DSA Coach",
        path: "/dsa",
        icon: Code2,
    },
    {
        name: "Career Copilot",
        path: "/career",
        icon: BriefcaseBusiness,
    },
    {
        name: "AI Interview",
        path: "/interview",
        icon: Mic,
    },
    {
        name: "Documents",
        path: "/documents",
        icon: FileText,
    },
    {
        name: "Japan Mode",
        path: "/japan",
        icon: Languages,
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: BarChart3,
    },
];

function Sidebar() {
    return (
        <aside className="sticky top-0 flex h-screen w-60 shrink-0 flex-col border-r border-white/10 bg-[#0f0f16] px-3 py-4">

            {/* Logo */}
            <div className="mb-8 px-3">
                <div className="flex items-center gap-2">
                    <span className="text-2xl">🌸</span>

                    <h1 className="text-xl font-bold text-white">
                        Sakura AI
                    </h1>
                </div>

                <p className="mt-1 text-xs text-gray-500">
                    Your AI Life Copilot
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-1 flex-col gap-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                                    isActive
                                        ? "bg-purple-500/20 text-white"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`
                            }
                        >
                            <Icon size={19} strokeWidth={1.8} />

                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

            {/* Japan Goal */}
            <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs font-semibold text-white">
                    🇯🇵 Japan Goal
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                    Keep building your skills.
                </p>
            </div>

            {/* Floating AI Indicator */}
            <div className="absolute bottom-20 right-[-14px] flex h-7 w-7 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500 text-white shadow-lg shadow-purple-500/20">
                <Sparkles size={14} />
            </div>

        </aside>
    );
}

export default Sidebar;