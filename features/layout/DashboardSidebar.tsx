"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import SidebarMenuItem from "./DashboardSIdebarCard";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import LogoutButton from "@/components/button/LogoutButton";
import { dashboardMenuItems } from "./constants";
import CompanyLogo from "@/components/component/CompanyLogo";
interface DashboardSidebarProps {
  setShowConfirmLogoutModal: Dispatch<SetStateAction<boolean>>;
}
const DashboardSidebar = ({
  setShowConfirmLogoutModal,
}: DashboardSidebarProps) => {
  const [collapseText, setCollapseText] = useState(false);
  return (
    <>
      <aside
        className={cn(
          "bg-white hidden md:block relative shadow  p-4  transition-all duration-300",
          collapseText ? "w-20" : "w-64",
        )}
      >
        <button
          onClick={() => setCollapseText(!collapseText)}
          className="rounded p-1 absolute top-[12%] bg-blue-200 -right-3 hover:bg-gray-100"
        >
          {collapseText ? (
            <ChevronsRight size={16} />
          ) : (
            <ChevronsLeft size={16} />
          )}
        </button>
        <section className="flex flex-col justify-between  h-full">
          <article>
            {collapseText ? (
              <h1 className="text-4xl font-bold text-transparent bg-linear-to-r from-blue-800 to-orange-600 bg-clip-text">
                <Logo />
              </h1>
            ) : (
              <div className="flex items-center gap-4">
                <CompanyLogo />
                <div className="text-3xl font-semibold ">
                  <h1 className="text-primary">Meekman</h1>
                  <p className="text-xs text-center italic font-sans text-secondary font-normal">
                    Books & Educational Services
                  </p>
                </div>
              </div>
            )}
            <nav className=" space-y-2 mt-10">
              {dashboardMenuItems.map(({ href, name, icon: Icon }) => {
                return (
                  <SidebarMenuItem
                    key={href}
                    href={`/admin${href}`}
                    name={name}
                    Icon={Icon}
                    collapsed={collapseText}
                  />
                );
              })}
            </nav>
          </article>
        </section>
      </aside>
    </>
  );
};

export default DashboardSidebar;
