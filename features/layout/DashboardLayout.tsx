"use client";
import { ReactNode, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MobileSidebar from "./MobileSidebar";
import ConfirmLogout from "./ConfirmLogout";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogoutModal, setSHowLogoutModal] = useState(false);
  const handleToggle = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="flex h-screen max-h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar setShowConfirmLogoutModal={setSHowLogoutModal} />
      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <DashboardHeader toggle={handleToggle} />
        <main className="flex-1 p-5 overflow-y-auto">{children}</main>
      </div>
      <MobileSidebar
        setSHowLogoutModal={setSHowLogoutModal}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      {showLogoutModal && (
        <ConfirmLogout cancel={() => setSHowLogoutModal(false)} />
      )}
    </div>
  );
};

export default DashboardLayout;
