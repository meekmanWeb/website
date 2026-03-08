import { Dispatch, SetStateAction } from "react";
import SidebarMenuItem from "./DashboardSIdebarCard";
import { LogOut, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { dashboardMenuItems } from "./constants";

const MobileSidebar = ({
  setShowSidebar,
  setSHowLogoutModal,
  showSidebar,
}: {
  showSidebar: boolean;
  setSHowLogoutModal: Dispatch<SetStateAction<boolean>>;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {showSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
      <article
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-2/3 max-w-64 bg-white flex flex-col justify-between p-4 shadow-lg md:hidden transform transition-transform duration-600  ease-in-out",
          showSidebar ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <article>
          <div className="justify-end flex items-center">
            <X
              onClick={() => setShowSidebar(false)}
              className="cursor-pointer"
            />
          </div>
          <nav className="flex flex-col gap-4 mt-6">
            {dashboardMenuItems.map(({ href, name, icon: Icon }) => {
              return (
                <SidebarMenuItem
                  handleClick={() => setShowSidebar(false)}
                  key={href}
                  href={href}
                  name={name}
                  Icon={Icon}
                  collapsed={false}
                />
              );
            })}
          </nav>
        </article>
        <div
          className="flex items-center gap-3 cursor-pointer rounded-lg px-4 py-2  hover:bg-gray-100"
          onClick={() => setSHowLogoutModal(true)}
        >
          <LogOut size={16} color="red" />
          <span className="text-red-500">Logout</span>
        </div>
        {/* <LogoutButton collapseText={false} /> */}
      </article>
    </>
  );
};

export default MobileSidebar;
