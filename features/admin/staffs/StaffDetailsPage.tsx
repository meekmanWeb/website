"use client";

import { useParams } from "next/navigation";

export default function StaffDetailsPage() {
  const params = useParams();
  const staffId = params.id;
  console.log(staffId);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Staff Details</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <h3 className="font-semibold">Schools Visited</h3>
          <p>15</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-semibold">Total Sales</h3>
          <p>₦350,000</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-semibold">Returns</h3>
          <p>₦20,000</p>
        </div>

        <div className="border p-4 rounded">
          <h3 className="font-semibold">Reports Submitted</h3>
          <p>12</p>
        </div>
      </div>
    </div>
  );
}
