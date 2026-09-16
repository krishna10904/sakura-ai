import { Bell, Search, User } from "lucide-react";

function Navbar() {
    return (
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#09090f]/95 px-4 backdrop-blur sm:px-6">

            {/* Left */}
            <div>
                <h2 className="text-lg font-semibold text-white">
                    Dashboard
                </h2>

                <p className="hidden text-xs text-gray-500 sm:block">
                    Your personal AI workspace
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 sm:gap-3">

                {/* Search */}
                <button
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
                    title="Search"
                >
                    <Search size={18} />
                </button>

                {/* Notification */}
                <button
                    className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white"
                    title="Notifications"
                >
                    <Bell size={18} />

                    {/* Badge */}
                    <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-pink-500 ring-2 ring-[#09090f]" />
                </button>

                {/* Profile */}
                <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/5">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                        <User size={17} />
                    </div>

                    <span className="hidden text-sm text-gray-300 sm:block">
            Krishna
          </span>

                </button>

            </div>

        </header>
    );
}

export default Navbar;