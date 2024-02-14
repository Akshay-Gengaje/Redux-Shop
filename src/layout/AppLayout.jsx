import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
