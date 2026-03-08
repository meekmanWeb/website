"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { SidebarMenuItemProps } from "./types";

const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  href,
  name,
  Icon,
  collapsed,
  handleClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100",
        collapsed && "justify-center px-2 py-3",
        isActive && "bg-gray-200 font-semibold",
      )}
    >
      <Icon size={20} />
      {!collapsed && <span>{name}</span>}
    </Link>
  );
};

export default SidebarMenuItem;
