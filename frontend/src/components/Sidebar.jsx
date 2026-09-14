import {
    LayoutDashboard,
    MessageCircle,
    BookOpen,
    Code2,
    Briefcase,
    Mic,
    FileText,
    Languages,
    BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "AI Assistant", icon: MessageCircle, path: "/assistant" },
    { name: "Study Coach", icon: BookOpen, path: "/study" },
    { name: "DSA Coach", icon: Code2, path: "/dsa" },
    { name: "Career Copilot", icon: Briefcase, path: "/career" },
    { name: "AI Interview", icon: Mic, path: "/interview" },
    { name: "Documents", icon: FileText, path: "/documents" },
    { name: "Japan Mode", icon: Languages, path: "/japan" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
];

function Sidebar() {
    return (
        <aside className="w-64 min-h-screen bg-[#101018] border-r border-white/10 p-5">

            <div className="mb-8">
                <h1 className="text-2xl font-bold">
                    🌸 Sakura AI
                </h1>

                <p className="text-xs text-gray-500 mt-1">
                    Your AI Life Copilot
                </p>
            </div>

            <nav className="space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                                    isActive
                                        ? "bg-purple-500/20 text-purple-400"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`
                            }
                        >
                            <Icon size={19} />
                            <span className="text-sm">{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="mt-10 p-4 rounded-xl bg-white/5">
                <p className="text-sm font-medium">
                    🇯🇵 Japan Goal
                </p>

                <p className="text-xs text-gray-500 mt-1">
                    Keep building your skills.
                </p>
            </div>

        </aside>
    );
}

export default Sidebar;