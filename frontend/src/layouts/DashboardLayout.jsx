import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-[#09090f] text-white">

            {/* Sidebar */}
            <Sidebar />

            {/* Right Section */}
            <div className="flex min-w-0 flex-1 flex-col">

                {/* Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="min-w-0 flex-1 overflow-y-auto">
                    {children}
                </main>

            </div>
        </div>
    );
}

export default DashboardLayout;