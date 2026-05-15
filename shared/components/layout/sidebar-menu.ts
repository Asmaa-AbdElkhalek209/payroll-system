import { Home, Users, Folder, Calendar, FileText } from "lucide-react";

export const sidebarMenu = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Employees", icon: Users, href: "/dashboard/employees" },
  { label: "Payroll", icon: Folder, href: "/dashboard/payroll" },
  { label: "Attendance", icon: Calendar, href: "/dashboard/attendance" },
  { label: "Reports", icon: FileText, href: "/dashboard/reports" },
];
