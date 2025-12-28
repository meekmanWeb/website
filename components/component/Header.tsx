"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { links } from "../data";
import { usePathname } from "next/navigation";
import SidebarComp from "./SidebarComp";
import CompanyLogo from "./CompanyLogo";

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const pathname = usePathname();
  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-9999 py-4 px-6">
      <div className="flex items-center justify-between">
        {/* company logo  */}
        <div className="flex items-center gap-4">
          <CompanyLogo />
          <h2 className="text-4xl font-semibold text-center">Meekman</h2>
        </div>
        {/* icon to open sidebar on mobile */}
        <div
          className="md:hidden w-fit h-fit cursor-pointer"
          onClick={() => setOpenSideBar(!openSideBar)}
        >
          {!openSideBar && <Menu />}
        </div>
        {openSideBar && (
          <SidebarComp setOpenSideBar={() => setOpenSideBar(!openSideBar)} />
        )}

        <ul className="hidden md:flex gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={` ${
                  link.href == pathname ? "text-secondary" : "text-white"
                } hover:underline text-lg`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
