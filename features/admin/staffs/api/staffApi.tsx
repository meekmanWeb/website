import { db } from "@/config/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Staff } from "../types/staffTypes";

export const addStaff = async (staff: Staff) => {
  await addDoc(collection(db, "staffs"), staff);
};

export const removeStaff = async (id: string) => {
  await updateDoc(doc(db, "staffs", id), {
    status: "inactive",
  });
};

export const setTarget = async (id: string, target: number) => {
  await updateDoc(doc(db, "staffs", id), {
    target,
  });
};
