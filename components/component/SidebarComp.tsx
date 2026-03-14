import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../data";
import CompanyLogo from "./CompanyLogo";
import { cn } from "@/lib/utils";
interface Props {
  setOpenSideBar: (open: boolean) => void;
  openSidebar: boolean;
}
const SidebarComp = ({ setOpenSideBar, openSidebar }: Props) => {
  const pathname = usePathname();
  return (
    <>
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-40"
          onClick={() => setOpenSideBar(false)}
        ></div>
      )}
      <article
        className={cn(
          "fixed inset-y-0 right-0 z-1999 w-2/3 max-w-64 bg-white  justify-between p-4 shadow-lg md:hidden transform transition-transform duration-600  ease-in-out",
          !openSidebar ? "translate-x-full" : "translate-x-0",
        )}
      >
        <div className="flex items-center justify-between mb-10">
          <CompanyLogo />
          <X
            onClick={() => setOpenSideBar(false)}
            className="cursor-pointer"
            color="black"
          />
        </div>
        <ul className="space-y-4 text-center text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                onClick={() => setOpenSideBar(false)}
                href={link.href}
                className={` ${
                  link.href == pathname ? "text-secondary" : "text-primary"
                } hover:underline transition text-lg`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default SidebarComp;
