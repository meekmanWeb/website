"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddStaffModal from "./components/AddStaffModal";
import { Staff } from "./types/staffTypes";
import Link from "next/link";

const StaffPage = () => {
  const [showAddStaff, setShowAddStaff] = useState(false);
  const handleCreateStaff = (staff: Staff) => {};
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Staff Performance</h1>

        <Button className="text-white" onClick={() => setShowAddStaff(true)}>
          <Plus size={18} className="mr-2" />
          Add Staff
        </Button>
      </div>
      <div className="border border-gray-50 rounded-lg overflow-hidden">
        <table className="w-full ">
          <thead className="bg-white">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3 text-sm">Schools Visited</th>
              <th className="p-3">Sales</th>
              <th className="p-3">Returns</th>
              <th className="p-3">Target</th>
              <th className="p-3">Reports</th>
            </tr>
          </thead>

          {/* <tbody>
            {staffs.map((staff) => (
              <tr key={staff.id} className="">
                <td className="p-3">
                  <Link
                    href={`/admin/staffs/${staff.id}`}
                    className="text-blue-600"
                  >
                    {staff.name}
                  </Link>
                </td>
                <td className="p-3">{staff.schoolsVisited}</td>
                <td className="p-3">₦{staff.sales.toLocaleString()}</td>
                <td className="p-3">₦{staff.returns.toLocaleString()}</td>
                <td className="p-3">₦{staff.target.toLocaleString()}</td>
                <td className="p-3">{staff.reports}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
      {showAddStaff && <AddStaffModal onAdd={handleCreateStaff} />}
    </section>
  );
};

export default StaffPage;
