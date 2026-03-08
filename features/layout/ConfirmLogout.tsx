"use client";
import AppButton from "@/components/button/AppButton";
import { useRouter } from "next/navigation";
interface ConfirmLogoutProps {
  cancel: () => void;
}
const ConfirmLogout = ({ cancel }: ConfirmLogoutProps) => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/auth/login");
  };
  return (
    <div className="fixed z-9999 inset-0 justify-center  items-center flex bg-black/20">
      <div className="w-9/10 max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold ">Confirm Logout</h2>
        <p className="text-gray-600 ">Are you sure you want to logout?</p>
        <div className="flex justify-end mt-8 gap-3">
          <AppButton
            appVariant="secondary"
            className="w-fit  px-6 py-4"
            onClick={cancel}
          >
            Cancel
          </AppButton>
          <AppButton
            appVariant="primary"
            className="w-fit bg-red-600 px-6 py-4"
            onClick={handleLogout}
          >
            Logout
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
