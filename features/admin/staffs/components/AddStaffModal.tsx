"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Staff } from "../types/staffTypes";
import { lga, statesArray } from "./data";

type Props = {
  onAdd: (staff: Staff) => void;
};

export default function AddStaffModal({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [target, setTarget] = useState("");

  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedLgas, setSelectedLgas] = useState<string[]>([]);

  // combine LGAs from selected states
  const lgas = useMemo(() => {
    let all: string[] = [];

    selectedStates.forEach((state) => {
      const stateLgas = lga[state as keyof typeof lga] || [];
      all = [...all, ...stateLgas];
    });

    return all;
  }, [selectedStates]);

  const handleSubmit = () => {
    const newStaff: Staff = {
      id: Date.now().toString(),
      name,
      phone,
      target: Number(target),
      schoolsVisited: 0,
      sales: 0,
      returns: 0,
      reports: 0,
      status: "active",
      territory: `${selectedStates.join(", ")} - ${selectedLgas.join(", ")}`,
    };

    onAdd(newStaff);

    setName("");
    setPhone("");
    setTarget("");
    setSelectedStates([]);
    setSelectedLgas([]);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Add New Staff</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Staff Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Sales Target"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />

        {/* Multi State Select */}
        <label className="text-sm font-medium">States</label>
        <select
          multiple
          className="border p-2 w-full mb-3 h-32"
          value={selectedStates}
          onChange={(e) =>
            setSelectedStates(
              Array.from(e.target.selectedOptions, (opt) => opt.value),
            )
          }
        >
          {statesArray.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* Multi LGA Select */}
        <label className="text-sm font-medium">Local Government Areas</label>
        <select
          multiple
          className="border p-2 w-full mb-4 h-32"
          value={selectedLgas}
          disabled={!selectedStates.length}
          onChange={(e) =>
            setSelectedLgas(
              Array.from(e.target.selectedOptions, (opt) => opt.value),
            )
          }
        >
          {lgas.map((lgaName) => (
            <option key={lgaName} value={lgaName}>
              {lgaName}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>

          <Button onClick={handleSubmit}>Save Staff</Button>
        </div>
      </div>
    </div>
  );
}
