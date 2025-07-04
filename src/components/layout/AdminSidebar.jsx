import { NavLink } from "react-router-dom";
import { Home, MessageCircle, PlusCircle, BarChart2 } from "lucide-react";

const AdminSidebar = () => {
    return (
        <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
            <NavLink
                to="/admin"
                className={({ isActive }) =>
                    `flex items-center gap-3 p-2 rounded-lg transition ${isActive ? "bg-gray-700" : "hover:bg-gray-800"
                    }`
                }
            >
                <Home className="w-5 h-5" />
                Dashboard Home
            </NavLink>

            <nav className="flex-1 px-4 py-6 space-y-2">
                <NavLink
                    to="/admin/feedbacks"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg transition ${isActive ? "bg-gray-700" : "hover:bg-gray-800"
                        }`
                    }
                >
                    <MessageCircle className="w-5 h-5" />
                    Feedbacks
                </NavLink>
                <NavLink
                    to="/admin/add-event"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg transition ${isActive ? "bg-gray-700" : "hover:bg-gray-800"
                        }`
                    }
                >
                    <PlusCircle className="w-5 h-5" />
                    Add Event
                </NavLink>
                <NavLink
                    to="/admin/analytics"
                    className={({ isActive }) =>
                        `flex items-center gap-3 p-2 rounded-lg transition ${isActive ? "bg-gray-700" : "hover:bg-gray-800"
                        }`
                    }
                >
                    <BarChart2 className="w-5 h-5" />
                    Analytics
                </NavLink>
            </nav>
        </aside>
    );
};

export default AdminSidebar;
