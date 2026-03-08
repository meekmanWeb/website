import { db } from "@/config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export const approveReport = async (id: string) => {
  await updateDoc(doc(db, "reports", id), {
    status: "approved",
  });
};

export const rejectReport = async (id: string) => {
  await updateDoc(doc(db, "reports", id), {
    status: "rejected",
  });
};
