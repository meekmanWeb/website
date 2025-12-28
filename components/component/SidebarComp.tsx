import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../data";
import CompanyLogo from "./CompanyLogo";
interface Props {
  setOpenSideBar: (open: boolean) => void;
}
const SidebarComp = ({ setOpenSideBar }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-10 z-40"
        onClick={() => setOpenSideBar(false)}
      ></div>
      <aside className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-9999 p-4 ">
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
      </aside>
    </>
  );
};

export default SidebarComp;
