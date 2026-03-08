import { FC } from "react";

export interface SidebarMenuItemProps {
  href: string;
  name: string;
  Icon: FC<{ size: number }>;
  collapsed: boolean;
  handleClick?: () => void;
}
