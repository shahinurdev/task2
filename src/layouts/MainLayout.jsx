import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-indigo-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
