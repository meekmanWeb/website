"use client";
import { Menu } from "lucide-react";
import Avatar from "./UserAvatar";
import Logo from "./Logo";

const DashboardHeader = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <header className="flex h-20 items-center justify-between  bg-white px-6">
        <div className=" flex items-center gap-2 ">
          <div className="md:hidden">
            <Logo />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Avatar name="Abeeb Maroof" />
          <Menu
            className="h-6 w-6 cursor-pointer md:hidden"
            onClick={() => toggle()}
          />
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
