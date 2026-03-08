import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
interface LogoutButtonProps {
  collapseText: boolean;
  setShowConfirmLogoutModal: Dispatch<SetStateAction<boolean>>;
}
const LogoutButton = ({
  collapseText,
  setShowConfirmLogoutModal,
}: LogoutButtonProps) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center gap-3 cursor-pointer rounded-lg px-4 py-2  hover:bg-gray-100",
          collapseText && "justify-center px-2 py-3",
        )}
        onClick={() => setShowConfirmLogoutModal(true)}
      >
        <LogOut size={16} color="red" />
        {!collapseText && <span className="text-red-500">Logout</span>}
      </div>
    </>
  );
};

export default LogoutButton;
