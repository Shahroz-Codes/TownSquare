import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-800 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
