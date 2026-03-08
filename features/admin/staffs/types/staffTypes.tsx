export type Staff = {
  id: string;
  name: string;
  phone: string;
  territory: string;
  target: number;
  sales: number;
  returns: number;
  schoolsVisited: number;
  reports: number;
  status: "active" | "inactive";
};
export type Report = {
  id: string;
  staffId: string;
  school: string;
  booksSold: number;
  returns: number;
  remarks: string;
  date: string;
  status: "pending" | "approved" | "rejected";
};
