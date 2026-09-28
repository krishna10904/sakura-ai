import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-[#09090f] text-white">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Navbar />

                <main className="min-w-0 flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;